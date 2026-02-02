"use client";

import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { TableComponent, type ParticipantRow } from "@/components/table-component";
import { StudiesTableComponent } from "@/components/studies-table-component";
import { SamplesTableComponent } from "@/components/samples-table-component";
import { FilesTableComponent } from "@/components/files-table-component";

/** Matches studyOverview API (e.g. StudyOverViewResult). Use as-is from data.studyOverview. */
export interface StudyRow {
  id: string;
  study_id: string;
  pubmed_id?: string;
  grant_id?: string;
  dbgap_accession: string;
  study_name: string;
  study_status: string;
  personnel_name: string;
  diagnosis: string[];
  anatomic_site: string[];
  num_of_participants: string;
  num_of_samples: string;
  num_of_files: string;
  file_type: string[];
  __typename?: string;
}

/** Matches sampleOverview API (e.g. SampleOverViewResult). Use as-is from data.sampleOverview. */
export interface SampleRow {
  id: string;
  sample_id: string;
  participant_id: string;
  study_id: string;
  anatomic_site: string;
  participant_age_at_collection: number;
  sample_tumor_status: string;
  tumor_classification: string;
  diagnosis: string;
  diagnosis_category: string;
  __typename?: string;
}

/** Matches fileOverview API (e.g. FileOverViewResult). Use as-is from data.fileOverview. */
export interface FileRow {
  id: string;
  file_name: string;
  data_category: string;
  file_description: string;
  file_type: string;
  file_size: string;
  study_id: string;
  participant_id: string;
  sample_id: string;
  file_id: string;
  guid: string;
  md5sum: string;
  library_selection: string | null;
  library_source_material: string | null;
  library_source_molecule: string | null;
  library_strategy: string | null;
  file_access: string;
  file_mapping_level: string;
  __typename?: string;
}

export interface TabbedTableComponentProps {
  participants?: ParticipantRow[];
  studies?: StudyRow[];
  samples?: SampleRow[];
  files?: FileRow[];
  /**
   * Optional display counts for tab labels. Use when showing a subset of data
   * but the tab should display the full total (e.g. "Participants (59,795)").
   * Avoids generating huge arrays that can exceed WebSocket payload limits.
   */
  participantCount?: number;
  studyCount?: number;
  sampleCount?: number;
  fileCount?: number;
  /** Callback when selection changes. Receives tab name and array of selected IDs. */
  onSelectionChange?: (tab: string, selectedIds: string[]) => void;
  className?: string;
}

// Mock data generators (studyOverview API shape)
const generateMockStudies = (count: number): StudyRow[] => {
  const statuses = ["Active", "Completed", "Recruiting"];
  const personnel = [
    "Richard Lock, PhD",
    "Greg T Armstrong, MD, MS",
    "Elli Papaemmanuil",
    "Roy Jensen, MD",
    "Rajen Mody, MD",
  ];
  const diagnosisPool = [
    "B lymphoblastic leukemia/lymphoma, NOS (253)",
    "T lymphoblastic leukemia/lymphoma (71)",
    "Neuroblastoma, NOS (487)",
    "Nephroblastoma, NOS (652)",
    "Osteosarcoma, NOS (282)",
  ];
  const anatomicPool = [
    "C42.1 : Bone marrow (324)",
    "C74.9 : Adrenal gland, NOS (87)",
    "C64.9 : Kidney, NOS (652)",
    "C40.2 : Long bones of lower limb and associated joints (148)",
  ];
  const fileTypePool = ["vcf", "bam", "fastq", "txt", "pdf", "tsv", "bai", "cram"];

  return Array.from({ length: count }, (_, i) => {
    const numDiag = 1 + (i % 4);
    const numAnatomic = 1 + (i % 3);
    const numFileTypes = 2 + (i % 5);
    return {
      id: `mock-${i}`,
      study_id: `phs${String(300000 + i).padStart(6, "0")}`,
      pubmed_id: i % 3 === 0 ? `${37169874 + i}` : "",
      grant_id: `CA${199000 + (i % 1000)}`,
      dbgap_accession: `phs${String(300000 + i).padStart(6, "0")}`,
      study_name: `CCDI Pediatric Study ${i + 1} - ${["Leukemia", "Neuroblastoma", "Sarcoma", "Solid Tumors"][i % 4]}`,
      study_status: statuses[i % statuses.length],
      personnel_name: personnel[i % personnel.length],
      diagnosis: diagnosisPool.slice(0, numDiag),
      anatomic_site: anatomicPool.slice(0, numAnatomic),
      num_of_participants: String(Math.floor(Math.random() * 5000) + 40),
      num_of_samples: String(Math.floor(Math.random() * 2000) + 50),
      num_of_files: String(Math.floor(Math.random() * 10000) + 100),
      file_type: fileTypePool.slice(0, numFileTypes),
    };
  });
};

const generateMockSamples = (count: number): SampleRow[] => {
  const tumorStatuses = ["Tumor", "Normal"];
  const tumorClassifications = ["Primary", "Metastatic", "Not Applicable"];
  const anatomicSites = [
    "C76.2 : Abdomen, NOS",
    "C42.0 : Blood",
    "C76.3 : Pelvis, NOS",
    "C40.2 : Long bones of lower limb and associated joints",
    "C41.0 : Bones of skull and face and associated joints",
    "C47 : PERIPHERAL NERVES AND AUTONOMIC NERVOUS SYSTEM",
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: `mock-sample-${i}`,
    sample_id: `${String((i % 50) + 1).padStart(3, "0")}-${(i % 20) + 1}`,
    participant_id: String((i % 100) + 1),
    study_id: i % 3 === 0 ? "phs003519" : "phs002430",
    anatomic_site: anatomicSites[i % anatomicSites.length],
    participant_age_at_collection: [1461, 4212, 4017, 7305, -999, 6205][i % 6] + (i % 100) * 10,
    sample_tumor_status: tumorStatuses[i % tumorStatuses.length],
    tumor_classification: tumorClassifications[i % tumorClassifications.length],
    diagnosis: "",
    diagnosis_category: "",
  }));
};

const generateMockFiles = (count: number): FileRow[] => {
  const fileTypes = ["dicom", "vcf", "tbi", "csv", "html", "ped", "txt", "tsv", "cram", "crai", "pdf"];
  const dataCategories = ["[Pathology Imaging]", "[Sequencing]", "[Genomics]", "[Transcriptome Profiling]"];
  const libraryStrategies = ["WGS", "RNA-Seq", null];
  const fileAccesses = ["Open", "Controlled"];

  return Array.from({ length: count }, (_, i) => {
    const ext = fileTypes[i % fileTypes.length];
    const fid = `dg.4DFC/${String(1000000 + i).padStart(10, "0")}-${Math.random().toString(36).slice(2, 10)}`;
    return {
      id: fid,
      file_name: `0000${String((i % 9000) + 1000).padStart(4, "0")}-sample.${ext}`,
      data_category: dataCategories[i % dataCategories.length],
      file_description: i % 5 === 0 ? "Annotated Gene Fusion" : "",
      file_type: ext,
      file_size: String(Math.floor(Math.random() * 1e10) + 1e6),
      study_id: i % 3 === 0 ? "phs002517" : i % 3 === 1 ? "phs002790" : "phs001846",
      participant_id: `[PT_${Math.random().toString(36).slice(2, 10).toUpperCase()}]`,
      sample_id: `[BS_${Math.random().toString(36).slice(2, 10).toUpperCase()}]`,
      file_id: fid,
      guid: fid,
      md5sum: Array.from({ length: 32 }, () => Math.floor(Math.random() * 16).toString(16)).join(""),
      library_selection: i % 4 === 0 ? null : "Hybrid Selection",
      library_source_material: i % 4 === 0 ? null : "Bulk Cells",
      library_source_molecule: i % 4 === 0 ? null : "Genomic",
      library_strategy: libraryStrategies[i % 3],
      file_access: fileAccesses[i % fileAccesses.length],
      file_mapping_level: "Sample",
    };
  });
};


export function TabbedTableComponent({
  participants = [],
  studies = [],
  samples = [],
  files = [],
  participantCount,
  studyCount,
  sampleCount,
  fileCount,
  onSelectionChange,
  className,
}: TabbedTableComponentProps) {
  const [activeTab, setActiveTab] = React.useState("participants");

  const handleParticipantSelection = React.useCallback(
    (selectedIds: string[]) => {
      onSelectionChange?.("participants", selectedIds);
    },
    [onSelectionChange]
  );

  const handleStudySelection = React.useCallback(
    (selectedIds: string[]) => {
      onSelectionChange?.("studies", selectedIds);
    },
    [onSelectionChange]
  );

  const handleSampleSelection = React.useCallback(
    (selectedIds: string[]) => {
      onSelectionChange?.("samples", selectedIds);
    },
    [onSelectionChange]
  );

  const handleFileSelection = React.useCallback(
    (selectedIds: string[]) => {
      onSelectionChange?.("files", selectedIds);
    },
    [onSelectionChange]
  );

  // Use mock data if not provided (keep counts small to avoid WebSocket payload limits)
  const participantsData = participants.length > 0 ? participants : [];
  const studiesData = studies.length > 0 ? studies : generateMockStudies(40);
  const samplesData = samples.length > 0 ? samples : generateMockSamples(100);
  const filesData = files.length > 0 ? files : generateMockFiles(200);

  // Display count: use override if provided, otherwise use actual data length
  const participantsDisplayCount = participantCount ?? participantsData.length;
  const studiesDisplayCount = studyCount ?? studiesData.length;
  const samplesDisplayCount = sampleCount ?? samplesData.length;
  const filesDisplayCount = fileCount ?? filesData.length;

  return (
    <div className={className}>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="participants">
            Participants ({participantsDisplayCount.toLocaleString()})
          </TabsTrigger>
          <TabsTrigger value="studies">
            Studies ({studiesDisplayCount.toLocaleString()})
          </TabsTrigger>
          <TabsTrigger value="samples">
            Samples ({samplesDisplayCount.toLocaleString()})
          </TabsTrigger>
          <TabsTrigger value="files">
            Files ({filesDisplayCount.toLocaleString()})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="participants" className="border-0 p-0">
          {participantsData.length > 0 ? (
            <TableComponent data={participantsData} onSelectionChange={handleParticipantSelection} />
          ) : (
            <div className="text-center py-8 text-gray-70">No participant data available</div>
          )}
        </TabsContent>

        <TabsContent value="studies" className="border-0 p-0">
          <StudiesTableComponent data={studiesData} onSelectionChange={handleStudySelection} />
        </TabsContent>

        <TabsContent value="samples" className="border-0 p-0">
          <SamplesTableComponent data={samplesData} onSelectionChange={handleSampleSelection} />
        </TabsContent>

        <TabsContent value="files" className="border-0 p-0">
          <FilesTableComponent data={filesData} onSelectionChange={handleFileSelection} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
