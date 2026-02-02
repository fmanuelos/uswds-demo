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
import { ArrowUpwardIcon, ArrowDownwardIcon, NavigateBeforeIcon, NavigateNextIcon } from "@/components/ui/icon";
import type { SortDirection, PageSizeOption } from "./table-component";
import { PAGE_SIZE_OPTIONS } from "./table-component";
import type { FileRow } from "./tabbed-table-component";

export type FilesSortableColumn =
  | "file_name"
  | "data_category"
  | "file_type"
  | "file_size"
  | "study_id"
  | "participant_id"
  | "sample_id"
  | "file_access"
  | "file_mapping_level"
  | "library_strategy";

export interface FilesTableComponentProps {
  data: FileRow[];
  onSelectionChange?: (selectedIds: string[]) => void;
  sortColumn?: FilesSortableColumn | null;
  sortDirection?: SortDirection;
  onSortChange?: (column: FilesSortableColumn | null, direction: SortDirection) => void;
  pageSize?: PageSizeOption;
  onPageSizeChange?: (pageSize: PageSizeOption) => void;
  className?: string;
}

function formatFileSize(bytes: string | number | null | undefined): string {
  const num = typeof bytes === "string" ? (bytes ? Number(bytes) : NaN) : bytes;
  if (num == null || Number.isNaN(num) || num === 0) return "";
  const units = ["B", "KB", "MB", "GB", "TB"];
  let size = num;
  let unitIndex = 0;
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }
  return `${size.toFixed(unitIndex === 0 ? 0 : 2)} ${units[unitIndex]}`;
}

/** Remove surrounding [ ] from API values for display. */
function stripBrackets(s: string | null | undefined): string {
  if (s == null) return "";
  return s.replace(/^\s*\[/, "").replace(/\]\s*$/, "").trim();
}

export function FilesTableComponent({
  data,
  onSelectionChange,
  sortColumn: controlledSortColumn,
  sortDirection: controlledSortDirection,
  onSortChange,
  pageSize: controlledPageSize,
  onPageSizeChange,
  className,
}: FilesTableComponentProps) {
  const [selectedIds, setSelectedIds] = React.useState<Set<string>>(new Set());
  const [internalSortColumn, setInternalSortColumn] = React.useState<FilesSortableColumn | null>(null);
  const [internalSortDirection, setInternalSortDirection] = React.useState<SortDirection>(null);
  const [internalPageSize, setInternalPageSize] = React.useState<PageSizeOption>(50);
  const [page, setPage] = React.useState(1);

  const isControlled = controlledSortColumn !== undefined || controlledSortDirection !== undefined;
  const sortColumn = isControlled ? (controlledSortColumn ?? null) : internalSortColumn;
  const sortDirection = isControlled ? (controlledSortDirection ?? null) : internalSortDirection;
  const pageSize = controlledPageSize ?? internalPageSize;

  React.useEffect(() => {
    setPage(1);
  }, [pageSize, data.length]);

  const someSelected = selectedIds.size > 0;

  const handleSelectRow = (rowId: string, checked: boolean) => {
    const next = new Set(selectedIds);
    if (checked) next.add(rowId);
    else next.delete(rowId);
    setSelectedIds(next);
    onSelectionChange?.(Array.from(next));
  };

  const handleSort = (column: FilesSortableColumn) => {
    let nextDirection: SortDirection;
    if (sortColumn === column) {
      if (sortDirection === null) {
        nextDirection = "asc";
      } else if (sortDirection === "asc") {
        nextDirection = "desc";
      } else {
        nextDirection = null;
      }
    } else {
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

  const sortedData = React.useMemo(() => {
    if (!sortColumn || !sortDirection) return data;
    const numericColumns = ["file_size"];
    const sorted = [...data].sort((a, b) => {
      const aValue = a[sortColumn as keyof FileRow];
      const bValue = b[sortColumn as keyof FileRow];
      if (aValue == null && bValue == null) return 0;
      if (aValue == null) return 1;
      if (bValue == null) return -1;
      if (numericColumns.includes(sortColumn)) {
        const aNum = Number(String(aValue).replace(/,/g, "")) || 0;
        const bNum = Number(String(bValue).replace(/,/g, "")) || 0;
        const comparison = aNum - bNum;
        return sortDirection === "asc" ? comparison : -comparison;
      }
      const comparison = String(aValue).localeCompare(String(bValue), undefined, {
        numeric: true,
        sensitivity: "base",
      });
      return sortDirection === "asc" ? comparison : -comparison;
    });
    return sorted;
  }, [data, sortColumn, sortDirection]);

  const totalRows = sortedData.length;
  const totalPages = Math.max(1, Math.ceil(totalRows / pageSize));
  const clampedPage = Math.min(Math.max(1, page), totalPages);
  const startRow = (clampedPage - 1) * pageSize;
  const endRow = Math.min(startRow + pageSize, totalRows);
  const paginatedData = sortedData.slice(startRow, endRow);

  const allSelected =
    paginatedData.length > 0 &&
    paginatedData.every((row) => selectedIds.has(row.id));

  const handleSelectAll = (checked: boolean) => {
    const pageIds = paginatedData.map((row) => row.id);
    const next = new Set(selectedIds);
    if (checked) pageIds.forEach((id) => next.add(id));
    else pageIds.forEach((id) => next.delete(id));
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

  const renderPaginationPanel = (idSuffix: string) => (
    <div className="flex flex-wrap items-center justify-end gap-4 font-public-sans text-base text-gray-90">
      <label htmlFor={`files-page-size${idSuffix}`} className="text-gray-90">
        Results per Page:
      </label>
      <Select
        id={`files-page-size${idSuffix}`}
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
    column: FilesSortableColumn,
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
            {renderSortableHeader("file_name", "File Name", "min-w-[220px]")}
            {renderSortableHeader("data_category", "Data Category", "min-w-[140px]")}
            {renderSortableHeader("file_type", "File Type", "min-w-[90px]")}
            {renderSortableHeader("file_size", "File Size", "min-w-[100px]")}
            {renderSortableHeader("study_id", "Study ID", "min-w-[110px]")}
            {renderSortableHeader("participant_id", "Participant ID", "min-w-[180px]")}
            {renderSortableHeader("sample_id", "Sample ID", "min-w-[180px]")}
            {renderSortableHeader("file_access", "File Access", "min-w-[100px]")}
            {renderSortableHeader("file_mapping_level", "Mapping Level", "min-w-[120px]")}
            {renderSortableHeader("library_strategy", "Library Strategy", "min-w-[120px]")}
          </TableRow>
        </TableHeader>
        <TableBody striped className="[&_tr_td]:border-gray-30 [&_tr_td]:border-b [&_tr_td]:border-l-0 [&_tr_td]:border-r-0">
          {paginatedData.map((row) => (
            <TableRow key={row.id} className="border-0 hover:bg-gray-5/50">
              <TableCell className="w-[52px] border-gray-30 border-b border-l-0 border-r-0 border-t-0 pr-2">
                <Checkbox
                  checked={selectedIds.has(row.id)}
                  onCheckedChange={(checked) => handleSelectRow(row.id, !!checked)}
                  aria-label={`Select ${row.file_name}`}
                />
              </TableCell>
              <TableCell className="min-w-[220px] border-gray-30 border-b border-l-0 border-r-0 border-t-0 font-public-sans text-gray-90 whitespace-normal">
                {row.file_name}
              </TableCell>
              <TableCell className="min-w-[140px] border-gray-30 border-b border-l-0 border-r-0 border-t-0 font-public-sans text-gray-90">
                {stripBrackets(row.data_category)}
              </TableCell>
              <TableCell className="min-w-[90px] border-gray-30 border-b border-l-0 border-r-0 border-t-0 font-public-sans text-gray-90">
                {row.file_type}
              </TableCell>
              <TableCell className="min-w-[100px] border-gray-30 border-b border-l-0 border-r-0 border-t-0 font-public-sans text-gray-90 tabular-nums">
                {formatFileSize(row.file_size)}
              </TableCell>
              <TableCell className="min-w-[110px] border-gray-30 border-b border-l-0 border-r-0 border-t-0 font-public-sans text-gray-90">
                {row.study_id}
              </TableCell>
              <TableCell className="min-w-[180px] border-gray-30 border-b border-l-0 border-r-0 border-t-0 font-public-sans text-gray-90 whitespace-normal truncate max-w-[200px]" title={stripBrackets(row.participant_id)}>
                {stripBrackets(row.participant_id)}
              </TableCell>
              <TableCell className="min-w-[180px] border-gray-30 border-b border-l-0 border-r-0 border-t-0 font-public-sans text-gray-90 whitespace-normal truncate max-w-[200px]" title={stripBrackets(row.sample_id)}>
                {stripBrackets(row.sample_id)}
              </TableCell>
              <TableCell className="min-w-[100px] border-gray-30 border-b border-l-0 border-r-0 border-t-0 font-public-sans text-gray-90">
                {row.file_access}
              </TableCell>
              <TableCell className="min-w-[120px] border-gray-30 border-b border-l-0 border-r-0 border-t-0 font-public-sans text-gray-90">
                {row.file_mapping_level}
              </TableCell>
              <TableCell className="min-w-[120px] border-gray-30 border-b border-l-0 border-r-0 border-t-0 font-public-sans text-gray-90">
                {row.library_strategy ?? ""}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
      <div className="pt-3 mt-0 border-t border-gray-30">
        {renderPaginationPanel("-bottom")}
      </div>
    </div>
  );
}
