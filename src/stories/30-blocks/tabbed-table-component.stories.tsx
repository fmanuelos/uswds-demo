import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  TabbedTableComponent,
  type ParticipantRow,
  type StudyRow,
  type SampleRow,
  type FileRow,
} from "@/components/tabbed-table-component";

// Generate sample participant data
const generateMockParticipants = (count: number): ParticipantRow[] => {
  const sexes = ["Female", "Male"];
  const races = ["White", "Black or African American", "Asian", "Hispanic or Latino;White"];
  const diagnoses = [
    "Glioblastoma, NOS",
    "Acute myeloid leukemia, NOS",
    "Medulloblastoma, NOS",
    "Ependymoma, NOS",
    "Meningioma, NOS",
  ];
  const anatomicSites = [
    "C71.9 : Posterior cranial fossa",
    "C42.1 : Bone marrow",
    "C71.6 : Cerebellum, NOS",
    "C72.0 : Spinal cord",
    "C70.0 : Cerebral meninges",
  ];
  const categories = ["Gliomas", "Leukemias, NOS", "Embryonal tumors", "Ependymal tumors", "Meningiomas"];

  return Array.from({ length: count }, (_, i) => ({
    participantId: `00301d78915737fa${String(100 + i).padStart(3, "0")}`,
    studyId: "phs002431",
    sexAtBirth: sexes[i % sexes.length],
    race: races[i % races.length],
    diagnosis: diagnoses[i % diagnoses.length],
    diagnosisAnatomicSite: anatomicSites[i % anatomicSites.length],
    diagnosisCategory: categories[i % categories.length],
    ageAtDiagnosis: Math.floor(Math.random() * 6000) + 100,
    treatmentType: i % 2 === 0 ? "Chemotherapy;Surgery" : "Radiation Therapy;Surgery",
    lastKnownSurvivalStatus: i % 3 === 0 ? "Alive" : "Alive;Dead",
    badgeCount: i % 3 === 0 ? Math.floor(Math.random() * 3) + 1 : undefined,
  }));
};

const meta = {
  title: "Blocks/Tabbed Table Component",
  component: TabbedTableComponent,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A tabbed interface containing four tables: Participants, Studies, Samples, and Files. Each tab displays a table with sorting and selection capabilities. The count next to each tab name shows the number of entries in that table.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    participants: { control: false },
    studies: { control: false },
    samples: { control: false },
    files: { control: false },
    onSelectionChange: { action: "selectionChange" },
  },
} satisfies Meta<typeof TabbedTableComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

// Generate sample data (studyOverview API shape)
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

export const Default: Story = {
  args: {
    participants: generateMockParticipants(20),
    studies: generateMockStudies(40),
    samples: generateMockSamples(100),
    files: generateMockFiles(200),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Tabbed interface with four tables. Click on any tab to switch between Participants, Studies, Samples, and Files. Each table supports sorting and row selection.",
      },
    },
  },
};

export const WithLargeDatasets: Story = {
  args: {
    // Use small sample data to avoid WebSocket "Max payload size exceeded"
    participants: generateMockParticipants(100),
    studies: generateMockStudies(40),
    samples: generateMockSamples(100),
    files: generateMockFiles(200),
    // Display counts show the full totals in tab labels
    participantCount: 59795,
    studyCount: 40,
    sampleCount: 68140,
    fileCount: 1238181,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example with large display counts in tab labels. Tables show a small sample of data; counts (59,795; 40; 68,140; 1,238,181) are passed via participantCount, studyCount, sampleCount, fileCount to avoid generating huge arrays and exceeding WebSocket payload limits.",
      },
    },
  },
};

export const WithSelectionCallback: Story = {
  render: function WithSelectionCallbackStory(args) {
    const [selected, setSelected] = React.useState<{ tab: string; ids: string[] } | null>(null);
    return (
      <div className="space-y-4">
        {selected && (
          <div className="font-public-sans text-sm text-gray-70 p-4 bg-gray-5 rounded">
            <p className="font-semibold">Selected:</p>
            <p>
              Tab: {selected.tab}, Count: {selected.ids.length}
            </p>
            {selected.ids.length > 0 && (
              <p className="text-xs text-gray-60 mt-1">
                IDs: {selected.ids.slice(0, 5).join(", ")}
                {selected.ids.length > 5 && ` ... and ${selected.ids.length - 5} more`}
              </p>
            )}
          </div>
        )}
        <TabbedTableComponent
          {...args}
          onSelectionChange={(tab, ids) => setSelected({ tab, ids })}
        />
      </div>
    );
  },
  args: {
    participants: generateMockParticipants(20),
    studies: generateMockStudies(40),
    samples: generateMockSamples(100),
    files: generateMockFiles(200),
  },
  parameters: {
    docs: {
      description: {
        story: "Selection state is tracked and displayed above the tabs when rows are selected.",
      },
    },
  },
};
