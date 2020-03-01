/*eslint-env node*/

const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");

exports.onCreateWebpackConfig = ({ actions }) => {
	const { setWebpackConfig } = actions;

	setWebpackConfig({
		resolve: {
			plugins: [new TsconfigPathsPlugin()],
		},
	});
};
