// src/mocks/datasetMock.ts
import type { DatasetLayoutProps } from "../types/dataset";

export const mockDatasetProps: DatasetLayoutProps = {
  datasetTitle: "Consumer price inflation consumption segment indices and price quotes",
  description: "Price quote data (for locally collected data only) and consumption segment indices that underpin consumer price inflation statistics, giving users access to the detailed data that are used in the construction of the UK's inflation figures. The data are being made available for research purposes only and are not an accredited official statistic. From October 2024, private school fees and part-time education classes have been included in the consumption segment indices file. For more information on the introduction of consumption segments, please see the Consumer Prices Indices Technical Manual, 2019. Note that this dataset was previously called the consumer price inflation item indices and price quotes dataset.",
  editionTitle: "CPIH 2025 classification - Revised",
  metadata: {
    releaseDate: "18 August 2026",
    nextRelease: "18 September 2026",
    publisher: "Office for National Statistics",
    contact: "Prices & Inflation Team",
    version: "1",
    accreditationStatus: "Accredited Official Statistics",
  },
  dataFiles: [
    {
      fileName: "CPIH-2025-classification-Revised.xlsx",
      fileType: "XLSX",
      fileDescription: "Full raw dataset containing item price indices.",
      fileSize: "2.4 MB",
      fileUrl: "#"
    },
    {
      fileName: "CPIH-2025-classification-Revised.txt",
      fileType: "TXT",
      fileDescription: "Full raw dataset containing item price indices.",
      fileSize: "2.4 MB",
      fileUrl: "#"
    },
    {
      fileName: "CPIH-2025-classification-Revised.csv",
      fileType: "CSV",
      fileDescription: "Full raw dataset containing item price indices.",
      fileSize: "2.4 MB",
      fileUrl: "#"
    },
    {
      fileName: "CPIH-2025-classification-Revised.csvw",
      fileType: "CSVW",
      fileDescription: "Full raw dataset containing item price indices.",
      fileSize: "2.4 MB",
      fileUrl: "#"
    }
  ],
  importantNotesAndUsageInformation: "Data are broadly at the geographic level of Nomenclature of Territorial Units for Statistics (NUTS) 1 (for example, South East England, West Midlands, Wales). This level of detail was chosen to ensure that no individual retailer or service provider will be able to be identified and therefore is in line with the assurances given to data providers. For the same reason, a very small number of item indices (six) are also unavailable. With effect from the January 2017 CPI publication, these data will be published on a monthly basis showing the latest month data.",
  relatedContent: [
    {
      title: "Consumer Price Inflation Methodology",
      url: "#",
      releaseDate: "2026-01-15",
      contentType: "Methodology",
      description: "Detailed explanation of sampling techniques."
    }
  ],
  versionHistory: [
    { version: "3", releaseDate: "24 October 2025 09:30am", releaseNotes: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, qui nihil optio ab officiis quasi ullam consectetur dolore aut rem? Ratione ab perferendis praesentium dolore molestias fuga blanditiis nisi dicta." },
    { version: "2", releaseDate: "24 October 2025 09:30am", releaseNotes: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, qui nihil optio ab officiis quasi ullam consectetur dolore aut rem? Ratione ab perferendis praesentium dolore molestias fuga blanditiis nisi dicta." },
    { version: "1", releaseDate: "24 October 2025 09:30am", releaseNotes: "Initial release" }
  ],
  contactDetails: {
    name: "Prices & Inflation Team",
    email: "cpi@example.gov.uk",
    telephoneNumber: "Consumer Price Inflation Enquiries: +44 1633 456900. Consumer Price Inflation recorded message (available after 8am on release day): +44 800 0113703"
  }
};