module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: ["react-hooks", "graphql"],
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "prettier/react",
        "prettier/@typescript-eslint",
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        "prettier/prettier": "warn",
        "react/prop-types": "off",
        "graphql/template-strings": [
            "error",
            {
                env: "literal",
                schemaJsonFilepath: `${__dirname}/gql-schema.json`,
                tagName: "graphql",
            },
        ],
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    env: {
        "shared-node-browser": true,
        browser: true,
    },
};
