export interface PostFrontmatter {
    author: string;
    comments: Boolean;
    created: Date;
    description: string;
    image?: {
        alt?: string;
        url?: string;
    };
    tags?: Array<String>;
    title: string;
}
