// src/mocks/datasetMock.ts
import type { DatasetLayoutProps } from "../types/dataset";

export const mockDatasetProps: DatasetLayoutProps = {
  datasetTitle: "Consumer Price Inflation Basket",
  description: "Monthly price indices and inflation measures for goods and services.",
  editionTitle: "2026 Q1",
  metadata: {
    releaseDate: "18 August 2026",
    nextRelease: "18 September 2026",
    contact: "Prices & Inflation Team",
    version: "1",
    accreditationStatus: "Accredited Official Statistics",
  },
  dataFiles: [
    {
      fileName: "cpi_data_2026.csv",
      fileType: "CSV",
      fileDescription: "Full raw dataset containing item price indices.",
      fileSize: "2.4 MB",
      fileUrl: "#"
    }
  ],
  importantNotesAndUsageInformation: "Data adjusted using modern weightings introduced in 2026.",
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
    { version: "1.0.0", releaseDate: "2026-02-01", releaseNotes: "Initial release" }
  ],
  contactDetails: {
    name: "Prices & Inflation Team",
    email: "cpi@example.gov.uk",
    telephoneNumber: "+44 20 7123 4567"
  }
};