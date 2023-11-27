declare module 'inkdrop' {
    const markdownRenderer: Inkdrop.MarkdownRenderer;
}

declare namespace Inkdrop {
    /**
     * https://docs.inkdrop.app/reference/markdown-renderer
     */
    interface MarkdownRenderer {
        remarkOptions: { [index: string]: boolean | undefined };
        remarkPlugins: unknown;
        remarkReactComponents: { [index: string]: typeof React.Component | undefined };
        remarkCodeComponents: { [index: string]: typeof React.Component | undefined };
    }
}
