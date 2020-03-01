import { css } from "linaria";
import "normalize.css";

const globalStyles = css`
	:global() {
		:root {
			--baseline: 1.5;

			font-size: 1rem;
			font-family: Lato, sans-serif;
			line-height: var(--baseline);
		}
	}
`;
export default globalStyles;
