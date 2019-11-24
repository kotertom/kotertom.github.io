import React, { FunctionComponent } from "react";
import Helmet from "react-helmet";
import "./global-styles";

export type HeadProps = {};

const Head: FunctionComponent<HeadProps> = ({ children }) => {
    // const data = useStaticQuery(graphql`
    //     query {

    //     }
    // `);
    return (
        <Helmet>
            <title>kotertom | web dev</title>
            <link
                href="https://fonts.googleapis.com/css?family=Lato:300,400&display=swap&subset=latin-ext"
                rel="stylesheet"
            />
            {children}
        </Helmet>
    );
};
export default Head;
