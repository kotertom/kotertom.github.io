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
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/prefer-interface": "off",
        "@typescript-eslint/explicit-member-accessibility": "off",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "react/prop-types": "off",
        "react/display-name": "off",
        "no-console": ["error", { allow: ["warn", "error", "assert"] }],
        "no-var": "off",
        "max-params": ["error", { max: 4 }],
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
