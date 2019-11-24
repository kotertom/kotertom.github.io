import { css } from "linaria";
import "normalize.css";

const globalStyles = css`
    :global() {
        :root {
            font-family: Lato, sans-serif;
        }
    }
`;
export default globalStyles;
