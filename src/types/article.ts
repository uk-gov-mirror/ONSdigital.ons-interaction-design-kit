export interface ArticleMetadata {
    releaseDate: string;
    nextRelease?: string;
    contactName: string;
    contactEmail: string;
}

export interface StatisticalArticleLayoutProps {
    caption: string;
    title: string;
    description: string;
    metadata?: ArticleMetadata;
}