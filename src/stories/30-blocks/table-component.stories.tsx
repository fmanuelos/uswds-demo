import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  TableComponent,
  type ParticipantRow,
  type SortableColumn,
  type SortDirection,
} from "@/components/table-component";

const meta = {
  title: "Blocks/Table Component",
  component: TableComponent,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A participant data table with row selection, sortable Participant ID column, and optional links. Uses the UI table, checkbox, and icon components.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    data: { control: false },
    onSelectionChange: { action: "selectionChange" },
    onSortChange: { action: "sortChange" },
    sortColumn: {
      options: [
        "participantId",
        "studyId",
        "sexAtBirth",
        "race",
        "diagnosis",
        "diagnosisAnatomicSite",
        "diagnosisCategory",
        "ageAtDiagnosis",
        "treatmentType",
        "lastKnownSurvivalStatus",
        null,
      ],
      control: { type: "select" },
    },
    sortDirection: {
      options: ["asc", "desc", null],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof TableComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockParticipantData: ParticipantRow[] = [
  {
    participantId: "00301d78915737fa100f",
    studyId: "phs002431",
    sexAtBirth: "Female",
    race: "White",
    diagnosis: "Glioblastoma, NOS",
    diagnosisAnatomicSite: "C71.9 : Posterior cranial fossa",
    diagnosisCategory: "Gliomas",
    ageAtDiagnosis: 268,
    treatmentType: "Stem Cell Transplantation, Autologous;Chemotherapy;Surgery;Radiation Therapy",
    lastKnownSurvivalStatus: "Alive",
    badgeCount: 1,
    participantHref: "#",
    anatomicSiteHref: "#",
    categoryHref: "#",
  },
  {
    participantId: "00301d78915737fa100e",
    studyId: "phs002431",
    sexAtBirth: "Male",
    race: "Hispanic or Latino;White",
    diagnosis: "Mixed phenotype acute leukemia with t(v ;11q23); MLL rearranged",
    diagnosisAnatomicSite: "C42.1 : Bone marrow",
    diagnosisCategory: "Leukemias, NOS",
    ageAtDiagnosis: 2746,
    treatmentType: "Chemotherapy;Surgery;Radiation Therapy",
    lastKnownSurvivalStatus: "Alive;Dead",
    badgeCount: 2,
    participantHref: "#",
  },
  {
    participantId: "00301d78915737fa100d",
    studyId: "phs002431",
    sexAtBirth: "Female",
    race: "White",
    diagnosis: "Acute myeloid leukemia, NOS",
    diagnosisAnatomicSite: "C42.1 : Bone marrow",
    diagnosisCategory: "Leukemias, NOS",
    ageAtDiagnosis: 630,
    treatmentType: "Surgery;Radiation Therapy",
    lastKnownSurvivalStatus: "Alive",
    badgeCount: 3,
    participantHref: "#",
    categoryHref: "#",
  },
  {
    participantId: "00301d78915737fa100c",
    studyId: "phs002431",
    sexAtBirth: "Male",
    race: "Asian",
    diagnosis: "Diffuse large B-cell lymphoma, NOS",
    diagnosisAnatomicSite: "C77.9 : Lymph node, NOS",
    diagnosisCategory: "Lymphomas",
    ageAtDiagnosis: 5102,
    treatmentType: "Surgery",
    lastKnownSurvivalStatus: "Alive",
    badgeCount: 1,
    participantHref: "#",
    anatomicSiteHref: "#",
  },
  {
    participantId: "00301d78915737fa100b",
    studyId: "phs002431",
    sexAtBirth: "Female",
    race: "Black or African American",
    diagnosis: "Medulloblastoma, NOS",
    diagnosisAnatomicSite: "C71.6 : Cerebellum, NOS",
    diagnosisCategory: "Embryonal tumors",
    ageAtDiagnosis: 940,
    treatmentType: "Chemotherapy;Surgery",
    lastKnownSurvivalStatus: "Alive",
    badgeCount: 2,
    participantHref: "#",
  },
  {
    participantId: "00301d78915737fa100a",
    studyId: "phs002431",
    sexAtBirth: "Male",
    race: "White",
    diagnosis: "Glioblastoma, NOS",
    diagnosisAnatomicSite: "C71.0 : Cerebrum",
    diagnosisCategory: "Gliomas",
    ageAtDiagnosis: 4911,
    treatmentType: "Radiation Therapy;Chemotherapy;Surgery",
    lastKnownSurvivalStatus: "Alive",
    participantHref: "#",
    anatomicSiteHref: "#",
    categoryHref: "#",
  },
  {
    participantId: "00301d78915737fa1009",
    studyId: "phs002431",
    sexAtBirth: "Female",
    race: "Hispanic or Latino;White",
    diagnosis: "Pilocytic astrocytoma",
    diagnosisAnatomicSite: "C71.5 : Brain stem",
    diagnosisCategory: "Gliomas",
    ageAtDiagnosis: 6026,
    treatmentType: "Chemotherapy;Radiation Therapy",
    lastKnownSurvivalStatus: "Alive",
    badgeCount: 1,
    participantHref: "#",
  },
  {
    participantId: "00301d78915737fa1008",
    studyId: "phs002431",
    sexAtBirth: "Male",
    race: "Asian",
    diagnosis: "Ependymoma, NOS",
    diagnosisAnatomicSite: "C72.0 : Spinal cord",
    diagnosisCategory: "Ependymal tumors",
    ageAtDiagnosis: 315,
    treatmentType: null,
    lastKnownSurvivalStatus: "Alive",
    badgeCount: 2,
    participantHref: "#",
    anatomicSiteHref: "#",
  },
  {
    participantId: "00301d78915737fa1007",
    studyId: "phs002431",
    sexAtBirth: "Female",
    race: "White",
    diagnosis: "Meningioma, NOS",
    diagnosisAnatomicSite: "C70.0 : Cerebral meninges",
    diagnosisCategory: "Meningiomas",
    ageAtDiagnosis: 2261,
    treatmentType: null,
    lastKnownSurvivalStatus: null,
    participantHref: "#",
    categoryHref: "#",
  },
  {
    participantId: "00301d78915737fa1006",
    studyId: "phs002431",
    sexAtBirth: "Male",
    race: "Black or African American",
    diagnosis: "Glioblastoma, NOS",
    diagnosisAnatomicSite: "C71.9 : Posterior cranial fossa",
    diagnosisCategory: "Gliomas",
    ageAtDiagnosis: 179,
    treatmentType: "Surgery",
    lastKnownSurvivalStatus: "Alive",
    badgeCount: 1,
    participantHref: "#",
    anatomicSiteHref: "#",
    categoryHref: "#",
  },
  {
    participantId: "00301d78915737fa1005",
    studyId: "phs002431",
    sexAtBirth: "Female",
    race: "White",
    diagnosis: "Glioblastoma, NOS",
    diagnosisAnatomicSite: "C71.0 : Cerebrum",
    diagnosisCategory: "Gliomas",
    ageAtDiagnosis: 2346,
    treatmentType: "Chemotherapy;Surgery;Radiation Therapy",
    lastKnownSurvivalStatus: "Alive",
  },
  {
    participantId: "00301d78915737fa1004",
    studyId: "phs002431",
    sexAtBirth: "Male",
    race: "Asian",
    diagnosis: "Acute myeloid leukemia, NOS",
    diagnosisAnatomicSite: "C42.1 : Bone marrow",
    diagnosisCategory: "Leukemias, NOS",
    ageAtDiagnosis: 896,
    treatmentType: null,
    lastKnownSurvivalStatus: "Alive",
  },
  {
    participantId: "00301d78915737fa1003",
    studyId: "phs002431",
    sexAtBirth: "Female",
    race: "White",
    diagnosis: "Medulloblastoma, NOS",
    diagnosisAnatomicSite: "C71.6 : Cerebellum, NOS",
    diagnosisCategory: "Embryonal tumors",
    ageAtDiagnosis: 2331,
    treatmentType: "Radiation Therapy;Chemotherapy",
    lastKnownSurvivalStatus: "Alive;Dead",
  },
  {
    participantId: "00301d78915737fa1002",
    studyId: "phs002431",
    sexAtBirth: "Male",
    race: "Black or African American",
    diagnosis: "Glioblastoma, NOS",
    diagnosisAnatomicSite: "C71.9 : Posterior cranial fossa",
    diagnosisCategory: "Gliomas",
    ageAtDiagnosis: 1970,
    treatmentType: "Surgery;Radiation Therapy",
    lastKnownSurvivalStatus: "Alive",
  },
  {
    participantId: "00301d78915737fa1001",
    studyId: "phs002431",
    sexAtBirth: "Female",
    race: "White",
    diagnosis: "Ependymoma, NOS",
    diagnosisAnatomicSite: "C72.0 : Spinal cord",
    diagnosisCategory: "Ependymal tumors",
    ageAtDiagnosis: 4528,
    treatmentType: "Chemotherapy",
    lastKnownSurvivalStatus: "Alive",
  },
  {
    participantId: "00301d78915737fa1000",
    studyId: "phs002431",
    sexAtBirth: "Male",
    race: "Asian",
    diagnosis: "Meningioma, NOS",
    diagnosisAnatomicSite: "C70.0 : Cerebral meninges",
    diagnosisCategory: "Meningiomas",
    ageAtDiagnosis: 4277,
    treatmentType: null,
    lastKnownSurvivalStatus: null,
  },
  {
    participantId: "00301d78915737fa0fff",
    studyId: "phs002431",
    sexAtBirth: "Female",
    race: "Hispanic or Latino;White",
    diagnosis: "Glioblastoma, NOS",
    diagnosisAnatomicSite: "C71.0 : Cerebrum",
    diagnosisCategory: "Gliomas",
    ageAtDiagnosis: 5694,
    treatmentType: "Stem Cell Transplantation, Autologous;Chemotherapy",
    lastKnownSurvivalStatus: "Alive",
  },
  {
    participantId: "00301d78915737fa0ffe",
    studyId: "phs002431",
    sexAtBirth: "Male",
    race: "White",
    diagnosis: "Acute myeloid leukemia, NOS",
    diagnosisAnatomicSite: "C42.1 : Bone marrow",
    diagnosisCategory: "Leukemias, NOS",
    ageAtDiagnosis: 2055,
    treatmentType: "Chemotherapy;Surgery",
    lastKnownSurvivalStatus: "Alive",
  },
  {
    participantId: "00301d78915737fa0ffd",
    studyId: "phs002431",
    sexAtBirth: "Female",
    race: "Black or African American",
    diagnosis: "Medulloblastoma, NOS",
    diagnosisAnatomicSite: "C71.6 : Cerebellum, NOS",
    diagnosisCategory: "Embryonal tumors",
    ageAtDiagnosis: 686,
    treatmentType: null,
    lastKnownSurvivalStatus: null,
  },
];

export const Default: Story = {
  args: {
    data: mockParticipantData,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Participant table with select-all and row checkboxes, all columns are sortable. Click any column header to toggle between ascending, descending, and no sort. Blue links where hrefs are provided. People icon shows an optional badge count.",
      },
    },
  },
};

export const AscendingSort: Story = {
  args: {
    data: mockParticipantData,
    sortColumn: "participantId",
    sortDirection: "asc",
  },
  parameters: {
    docs: {
      description: {
        story: "Participant ID column sorted ascending (up arrow shown).",
      },
    },
  },
};

export const DescendingSort: Story = {
  args: {
    data: mockParticipantData,
    sortColumn: "participantId",
    sortDirection: "desc",
  },
  parameters: {
    docs: {
      description: {
        story: "Participant ID column sorted descending (down arrow shown).",
      },
    },
  },
};

export const NoSort: Story = {
  args: {
    data: mockParticipantData,
    sortColumn: null,
    sortDirection: null,
  },
  parameters: {
    docs: {
      description: {
        story: "No column is sorted (no arrow indicators shown).",
      },
    },
  },
};

export const FewRows: Story = {
  args: {
    data: mockParticipantData.slice(0, 3),
  },
};

export const ControlledSort: Story = {
  render: function ControlledSortStory(args) {
    const [sortColumn, setSortColumn] = React.useState<SortableColumn | null>("participantId");
    const [sortDirection, setSortDirection] = React.useState<SortDirection>("asc");

    return (
      <div className="space-y-4">
        <div className="font-public-sans text-sm text-gray-70">
          <p>
            Sort: {sortColumn || "None"} ({sortDirection || "None"})
          </p>
          <p className="text-xs text-gray-60 mt-1">
            Click column headers to toggle sorting. Sorting is controlled externally.
          </p>
        </div>
        <TableComponent
          {...args}
          data={args.data}
          sortColumn={sortColumn}
          sortDirection={sortDirection}
          onSortChange={(column, direction) => {
            setSortColumn(column);
            setSortDirection(direction);
          }}
        />
      </div>
    );
  },
  args: {
    data: mockParticipantData.slice(0, 5),
  },
  parameters: {
    docs: {
      description: {
        story: "Controlled sorting example. Sort state is managed externally and displayed above the table.",
      },
    },
  },
};

export const WithSelectionCallback: Story = {
  render: function WithSelectionCallbackStory(args) {
    const [selected, setSelected] = React.useState<string[]>([]);
    return (
      <div className="space-y-4">
        <p className="font-public-sans text-sm text-gray-70">
          Selected: {selected.length === 0 ? "None" : selected.join(", ")}
        </p>
        <TableComponent
          {...args}
          data={args.data}
          onSelectionChange={setSelected}
        />
      </div>
    );
  },
  args: {
    data: mockParticipantData.slice(0, 5),
  },
  parameters: {
    docs: {
      description: {
        story: "Selection state is reflected in a callback and displayed above the table.",
      },
    },
  },
};
