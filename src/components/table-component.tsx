"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Select } from "@/components/ui/select";
import { PeopleIcon, ArrowUpwardIcon, ArrowDownwardIcon, NavigateBeforeIcon, NavigateNextIcon } from "@/components/ui/icon";

export const PAGE_SIZE_OPTIONS = [50, 100] as const;
export type PageSizeOption = (typeof PAGE_SIZE_OPTIONS)[number];

export interface ParticipantRow {
  participantId: string;
  studyId: string;
  sexAtBirth: string;
  race: string;
  diagnosis: string;
  diagnosisAnatomicSite: string;
  diagnosisCategory: string;
  /** Age at diagnosis in days. Can be null/undefined if not available. */
  ageAtDiagnosis?: number | null;
  /** Treatment type(s), can be multiple separated by semicolons. Can be null/undefined if not available. */
  treatmentType?: string | null;
  /** Last known survival status. Can be null/undefined if not available. */
  lastKnownSurvivalStatus?: string | null;
  /** Badge count shown on the people icon (e.g. related entities). */
  badgeCount?: number;
  /** Optional href for participant ID link. */
  participantHref?: string;
  /** Optional href for diagnosis anatomic site (renders as link when set). */
  anatomicSiteHref?: string;
  /** Optional href for diagnosis category (renders as link when set). */
  categoryHref?: string;
}

export type SortDirection = "asc" | "desc" | null;
export type SortableColumn = 
  | "participantId"
  | "studyId"
  | "sexAtBirth"
  | "race"
  | "diagnosis"
  | "diagnosisAnatomicSite"
  | "diagnosisCategory"
  | "ageAtDiagnosis"
  | "treatmentType"
  | "lastKnownSurvivalStatus";

export interface TableComponentProps {
  data: ParticipantRow[];
  /** Callback when selection changes. Receives array of selected participant IDs. */
  onSelectionChange?: (selectedIds: string[]) => void;
  /** Controlled sort column. If provided, component is controlled. */
  sortColumn?: SortableColumn | null;
  /** Controlled sort direction. If provided, component is controlled. */
  sortDirection?: SortDirection;
  /** Callback when sort changes. Receives column and direction. */
  onSortChange?: (column: SortableColumn | null, direction: SortDirection) => void;
  /** Initial or controlled page size (50 or 100). Default 50. */
  pageSize?: PageSizeOption;
  /** Callback when page size changes. */
  onPageSizeChange?: (pageSize: PageSizeOption) => void;
  className?: string;
}

export function TableComponent({
  data,
  onSelectionChange,
  sortColumn: controlledSortColumn,
  sortDirection: controlledSortDirection,
  onSortChange,
  pageSize: controlledPageSize,
  onPageSizeChange,
  className,
}: TableComponentProps) {
  const [selectedIds, setSelectedIds] = React.useState<Set<string>>(new Set());
  const [internalSortColumn, setInternalSortColumn] = React.useState<SortableColumn | null>(null);
  const [internalSortDirection, setInternalSortDirection] = React.useState<SortDirection>(null);
  const [internalPageSize, setInternalPageSize] = React.useState<PageSizeOption>(50);
  const [page, setPage] = React.useState(1);

  // Use controlled or internal state
  const isControlled = controlledSortColumn !== undefined || controlledSortDirection !== undefined;
  const sortColumn = isControlled ? (controlledSortColumn ?? null) : internalSortColumn;
  const sortDirection = isControlled ? (controlledSortDirection ?? null) : internalSortDirection;
  const pageSize = controlledPageSize ?? internalPageSize;

  // Reset to page 1 when pageSize or data length changes
  React.useEffect(() => {
    setPage(1);
  }, [pageSize, data.length]);

  const someSelected = selectedIds.size > 0;

  const handleSelectRow = (participantId: string, checked: boolean) => {
    const next = new Set(selectedIds);
    if (checked) next.add(participantId);
    else next.delete(participantId);
    setSelectedIds(next);
    onSelectionChange?.(Array.from(next));
  };

  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(e.target.value) as PageSizeOption;
    if (PAGE_SIZE_OPTIONS.includes(value)) {
      if (controlledPageSize === undefined) setInternalPageSize(value);
      onPageSizeChange?.(value);
    }
  };

  const handleSort = (column: SortableColumn) => {
    let nextDirection: SortDirection;
    
    if (sortColumn === column) {
      // Toggle: null → asc → desc → null
      if (sortDirection === null) {
        nextDirection = "asc";
      } else if (sortDirection === "asc") {
        nextDirection = "desc";
      } else {
        nextDirection = null;
      }
    } else {
      // New column: start with asc
      nextDirection = "asc";
    }

    const nextColumn = nextDirection === null ? null : column;

    if (isControlled) {
      onSortChange?.(nextColumn, nextDirection);
    } else {
      setInternalSortColumn(nextColumn);
      setInternalSortDirection(nextDirection);
    }
  };

  // Sort the data
  const sortedData = React.useMemo(() => {
    if (!sortColumn || !sortDirection) {
      return data;
    }

    const sorted = [...data].sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];
      
      // Handle null/undefined values
      if (aValue == null && bValue == null) return 0;
      if (aValue == null) return 1;
      if (bValue == null) return -1;

      // Numeric comparison for ageAtDiagnosis
      if (sortColumn === "ageAtDiagnosis") {
        const aNum = typeof aValue === "number" ? aValue : Number(aValue);
        const bNum = typeof bValue === "number" ? bValue : Number(bValue);
        const comparison = aNum - bNum;
        return sortDirection === "asc" ? comparison : -comparison;
      }

      // String comparison for other columns
      const comparison = String(aValue).localeCompare(String(bValue), undefined, {
        numeric: true,
        sensitivity: "base",
      });

      return sortDirection === "asc" ? comparison : -comparison;
    });

    return sorted;
  }, [data, sortColumn, sortDirection]);

  // Pagination derived from sorted data
  const totalRows = sortedData.length;
  const totalPages = Math.max(1, Math.ceil(totalRows / pageSize));
  const clampedPage = Math.min(Math.max(1, page), totalPages);
  const startRow = (clampedPage - 1) * pageSize;
  const endRow = Math.min(startRow + pageSize, totalRows);
  const paginatedData = sortedData.slice(startRow, endRow);

  const allSelected =
    paginatedData.length > 0 &&
    paginatedData.every((row) => selectedIds.has(row.participantId));

  const handleSelectAll = (checked: boolean) => {
    const pageParticipantIds = paginatedData.map((row) => row.participantId);
    const next = new Set(selectedIds);
    if (checked) {
      pageParticipantIds.forEach((id) => next.add(id));
    } else {
      pageParticipantIds.forEach((id) => next.delete(id));
    }
    setSelectedIds(next);
    onSelectionChange?.(Array.from(next));
  };

  const renderPaginationPanel = (idSuffix: string) => (
    <div className="flex flex-wrap items-center justify-end gap-4 font-public-sans text-base text-gray-90">
      <label htmlFor={`table-page-size${idSuffix}`} className="text-gray-90">
        Results per Page:
      </label>
      <Select
        id={`table-page-size${idSuffix}`}
        value={pageSize}
        onChange={handlePageSizeChange}
        aria-label="Results per page"
        compact
        className="w-auto min-w-[3.5rem]"
      >
        {PAGE_SIZE_OPTIONS.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </Select>
      <span className="text-gray-90">
        {totalRows === 0 ? "0-0 of 0" : `${startRow + 1}-${endRow} of ${totalRows.toLocaleString()}`}
      </span>
      <div className="flex items-center gap-0">
        <button
          type="button"
          onClick={() => clampedPage > 1 && setPage(clampedPage - 1)}
          disabled={clampedPage <= 1}
          aria-label="Previous page"
          className={cn(
            "p-2 inline-flex items-center justify-center text-gray-90",
            "hover:text-blue-60v focus:outline focus:outline-4 focus:outline-blue-40 focus:outline-offset-0",
            clampedPage <= 1 && "text-gray-50 cursor-not-allowed opacity-60"
          )}
        >
          <NavigateBeforeIcon size="sm" aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => clampedPage < totalPages && setPage(clampedPage + 1)}
          disabled={clampedPage >= totalPages}
          aria-label="Next page"
          className={cn(
            "p-2 inline-flex items-center justify-center text-gray-90",
            "hover:text-blue-60v focus:outline focus:outline-4 focus:outline-blue-40 focus:outline-offset-0",
            clampedPage >= totalPages && "text-gray-50 cursor-not-allowed opacity-60"
          )}
        >
          <NavigateNextIcon size="sm" aria-hidden />
        </button>
      </div>
    </div>
  );

  const renderSortableHeader = (
    column: SortableColumn,
    label: string | React.ReactNode,
    className?: string,
    ariaLabel?: string
  ) => {
    const isActive = sortColumn === column;
    const currentDirection = isActive ? sortDirection : null;
    const labelText = typeof label === "string" ? label : ariaLabel || String(column);
    const isMultiLine = typeof label !== "string";

    return (
      <TableHead className={cn("border-gray-30 border-b border-l-0 border-r-0 border-t-0", className)}>
        <button
          type="button"
          onClick={() => handleSort(column)}
          className={cn(
            "inline-flex gap-1 font-public-sans text-left text-gray-90 hover:text-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-40 focus:ring-offset-1",
            isMultiLine ? "items-start" : "items-center"
          )}
          aria-label={`Sort by ${labelText}${isActive ? ` (${currentDirection === "asc" ? "ascending" : "descending"})` : ""}`}
        >
          <span className={cn("flex", isMultiLine ? "flex-col items-start" : "")}>
            {label}
          </span>
          {currentDirection === "asc" && (
            <ArrowUpwardIcon size="sm" className={cn("shrink-0", isMultiLine ? "mt-0.5" : "")} aria-hidden />
          )}
          {currentDirection === "desc" && (
            <ArrowDownwardIcon size="sm" className={cn("shrink-0", isMultiLine ? "mt-0.5" : "")} aria-hidden />
          )}
        </button>
      </TableHead>
    );
  };

  return (
    <div className={cn("w-full", className)}>
      {/* Pagination - top */}
      <div className="pb-3 mb-0 border-b border-gray-30">
        {renderPaginationPanel("")}
      </div>

      <div className="overflow-auto">
      <Table>
        <TableHeader className="[&_tr_th]:bg-gray-10 [&_tr_th]:border-gray-30 [&_tr_th]:border-b">
          <TableRow className="border-0 hover:bg-transparent">
            <TableHead className="w-[52px] border-gray-30 border-b border-l-0 border-r-0 border-t-0 pr-2">
              <Checkbox
                checked={allSelected}
                aria-checked={allSelected ? true : someSelected ? "mixed" : false}
                onCheckedChange={handleSelectAll}
                aria-label="Select all rows"
              />
            </TableHead>
            {renderSortableHeader("participantId", "Participant ID", "min-w-[200px]")}
            {renderSortableHeader("studyId", "Study ID", "min-w-[120px]")}
            {renderSortableHeader("sexAtBirth", "Sex at Birth", "min-w-[100px]")}
            {renderSortableHeader("race", "Race", "min-w-[160px]")}
            {renderSortableHeader("diagnosis", "Diagnosis", "min-w-[220px]")}
            {renderSortableHeader("diagnosisAnatomicSite", "Diagnosis Anatomic Site", "min-w-[200px]")}
            {renderSortableHeader("diagnosisCategory", "Diagnosis Category", "min-w-[140px]")}
            {renderSortableHeader(
              "ageAtDiagnosis",
              (
                <>
                  <span>Age at Diagnosis</span>
                  <span className="text-xs font-normal">(days)</span>
                </>
              ),
              "min-w-[140px]",
              "Age at Diagnosis (days)"
            )}
            {renderSortableHeader("treatmentType", "Treatment Type", "min-w-[200px]")}
            {renderSortableHeader("lastKnownSurvivalStatus", "Last Known Survival Status","min-w-[160px]")}
          </TableRow>
        </TableHeader>
        <TableBody striped className="[&_tr_td]:border-gray-30 [&_tr_td]:border-b [&_tr_td]:border-l-0 [&_tr_td]:border-r-0">
          {paginatedData.map((row) => (
            <TableRow
              key={row.participantId}
              className="border-0 hover:bg-gray-5/50"
            >
              <TableCell className="w-[52px] border-gray-30 border-b border-l-0 border-r-0 border-t-0 pr-2">
                <Checkbox
                  checked={selectedIds.has(row.participantId)}
                  onCheckedChange={(checked) =>
                    handleSelectRow(row.participantId, !!checked)
                  }
                  aria-label={`Select ${row.participantId}`}
                />
              </TableCell>
              <TableCell className="min-w-[200px] border-gray-30 border-b border-l-0 border-r-0 border-t-0">
                <div className="flex items-center gap-2">
                  <span className="font-public-sans text-gray-90">
                    {row.participantId}
                  </span>
                  {row.badgeCount != null && row.badgeCount > 0 && (
                    <span className="relative inline-flex shrink-0">
                      <PeopleIcon
                        size="sm"
                        className="text-blue-60v"
                        aria-hidden
                      />
                      <span
                        className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-blue-60v px-1 text-[10px] font-bold leading-none text-white"
                        aria-hidden
                      >
                        {row.badgeCount}
                      </span>

                    </span>
                  )}
                </div>
              </TableCell>
              <TableCell className="min-w-[120px] border-gray-30 border-b border-l-0 border-r-0 border-t-0 font-public-sans text-gray-90">
                {row.studyId}
              </TableCell>
              <TableCell className="min-w-[100px] border-gray-30 border-b border-l-0 border-r-0 border-t-0 font-public-sans text-gray-90">
                {row.sexAtBirth}
              </TableCell>
              <TableCell className="min-w-[160px] border-gray-30 border-b border-l-0 border-r-0 border-t-0 font-public-sans text-gray-90 whitespace-normal">
                {row.race}
              </TableCell>
              <TableCell className="min-w-[220px] border-gray-30 border-b border-l-0 border-r-0 border-t-0 font-public-sans text-gray-90 whitespace-normal">
                {row.diagnosis}
              </TableCell>
              <TableCell className="min-w-[200px] border-gray-30 border-b border-l-0 border-r-0 border-t-0 font-public-sans text-gray-90 whitespace-normal">
                {row.diagnosisAnatomicSite}
              </TableCell>
              <TableCell className="min-w-[140px] border-gray-30 border-b border-l-0 border-r-0 border-t-0 font-public-sans text-gray-90 whitespace-normal">
                {row.diagnosisCategory}
              </TableCell>
              <TableCell className="min-w-[140px] border-gray-30 border-b border-l-0 border-r-0 border-t-0 font-public-sans text-gray-90">
                {row.ageAtDiagnosis != null ? row.ageAtDiagnosis : ""}
              </TableCell>
              <TableCell className="min-w-[200px] border-gray-30 border-b border-l-0 border-r-0 border-t-0 font-public-sans text-gray-90 whitespace-normal">
                {row.treatmentType || ""}
              </TableCell>
              <TableCell className="min-w-[160px] border-gray-30 border-b border-l-0 border-r-0 border-t-0 font-public-sans text-gray-90 whitespace-normal">
                {row.lastKnownSurvivalStatus || ""}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>

      {/* Pagination - bottom */}
      <div className="pt-3 mt-0 border-t border-gray-30">
        {renderPaginationPanel("-bottom")}
      </div>
    </div>
  );
}
