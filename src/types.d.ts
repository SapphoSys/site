export interface PostFrontmatter {
    author: string;
    comments: Boolean;
    created: Date;
    description: string;
    draft: Boolean;
    image?: {
        alt?: string;
        url?: string;
    };
    tags?: Array<String>;
    title: string;
}
