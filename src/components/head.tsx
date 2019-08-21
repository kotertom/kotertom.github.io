import React, { FunctionComponent } from "react";
import Helmet from "react-helmet";
import GlobalStyle from "./global-style";

export type HeadProps = {
    title?: string;
};

const Head: FunctionComponent<HeadProps> = ({ children, title = "" }) => {
    // const data = useStaticQuery(graphql`
    //     query {

    //     }
    // `);
    return (
        <Helmet>
            <title>{}</title>
            <link
                href="https://fonts.googleapis.com/css?family=Lato:300,400&display=swap&subset=latin-ext"
                rel="stylesheet"
            />
            <GlobalStyle />
            {children}
        </Helmet>
    );
};
export default Head;
