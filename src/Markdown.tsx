import * as md from 'markdown-it';
import * as React from 'react';

export interface Props extends React.DetailedHTMLProps < React.HTMLAttributes < HTMLDivElement >,
HTMLDivElement > {
    source: string;
}
export const Markdown = (props : Props) => <div
    dangerouslySetInnerHTML={{
    __html: markdownToHtmlString(props.source)
}}
    {...props}/>

const markdownToHtmlString = (markdown : string) => md()
    .use(require('markdown-it-block-embed'))
    .render(markdown);