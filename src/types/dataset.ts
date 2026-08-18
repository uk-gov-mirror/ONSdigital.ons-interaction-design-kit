export interface DataFile {
  fileName: string;
  fileType: string;
  fileDescription?: string;
  fileSize?: string;
  fileUrl: string;
}

export interface RelatedContentItem {
  title: string;
  url: string;
  releaseDate: string;
  contentType: string;
  description?: string;
}

export interface VersionHistoryItem {
  version: string;
  releaseDate: string;
  releaseNotes: string;
}

export interface DatasetLayoutProps {
  datasetTitle: string;
  description: string;
  editionTitle: string;
  metadata?: Record<string, any>;
  dataFiles?: DataFile[];
  importantNotesAndUsageInformation?: string;
  relatedContent?: RelatedContentItem[];
  versionHistory?: VersionHistoryItem[];
  contactDetails: {
    name: string;
    email: string;
    telephoneNumber: string;
  };
}