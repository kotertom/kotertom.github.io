/* eslint-disable @typescript-eslint/camelcase */
/*eslint-env node*/

/**
 * @type {import("gatsby").GatsbyConfig}
 */
module.exports = {
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "content",
                path: `${__dirname}/src/content`,
            },
        },
        "gatsby-transformer-sharp",
        "gatsby-transformer-yaml",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "kotertom.com",
                short_name: "starter",
                start_url: "/",
                background_color: "#663399",
                theme_color: "#663399",
                display: "minimal-ui",
            },
        },
        {
            resolve: "gatsby-plugin-extract-schema",
            options: {
                dest: `${__dirname}/gql-schema.json`,
            },
        },
        "gatsby-plugin-eslint",
        "gatsby-plugin-typescript",
        "gatsby-plugin-typescript-checker",
        "gatsby-plugin-react-axe",
        "gatsby-plugin-linaria",
    ],
};
