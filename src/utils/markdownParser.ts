import type {MarkdownInstance} from "astro";
import type {Post} from "../types/Post.ts";

export function parseMarkdownToPost(markdown: MarkdownInstance<any>): Post {
    return {
        filePath: markdown.file,
        frontmatter: {
            layout: markdown.frontmatter.layout,
            title: markdown.frontmatter.title,
            pubDate: markdown.frontmatter.pubDate,
            description: markdown.frontmatter.description,
            author: markdown.frontmatter.author,
            image: markdown.frontmatter.image,
            tags: markdown.frontmatter.tags,
        },
        content: markdown.compiledContent()
    };
}