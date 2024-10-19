export type Post = {
    filePath: string;
    frontmatter: {
        layout: string;
        pubDate: string;
        title: string;
        description: string;
        author: string;
        image: {
            url: string;
            alt: string;
        };
        tags?: string[];
    };
    content: string;
}

