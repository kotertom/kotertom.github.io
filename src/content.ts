import githubMark from "./img/GitHub-Mark-120px-plus.png";
import gitlabLogo from "./img/gitlab-logo-square.png";
import linkedinMark from "./img/In-2C-128px-TM.png";

export const socialMedia = [
    {
        image: githubMark,
        link: "https://www.github.com/kotertom"
    }, {
        image: gitlabLogo,
        link: "https://www.gitlab.com/kotertom"
    }, {
        image: linkedinMark,
        link: "https://www.linkedin.com/in/tom-koter-54205813b/"
    }
];

export const bio = ["rustacean", "small, focused CLI tool enthusiast", "haskeller", "computer graphics \u{1F49C}"];

export const sections = [
    {
        text: "projects"
    }
];

export interface YouTube {
    type: "youtube";
    id: string;
}

export interface Image {
    type: "image";
    src: string;
    altText: string;
}

export type PromoMediaType = YouTube | Image;

export interface ProjectDescription {
    title: string;
    link: string;
    description: string;
    media: PromoMediaType;
}
// tslint:disable:object-literal-sort-keys
export const projects: ProjectDescription[] = [
    {
        title: "Vis VR",
        link: "",
        description: `VR app exploring different methods of data visualization. Written in a team of 3 as bachelor's thesis. Made in Unity.`,
        media: {
            id: "ao1eHQNOcF0",
            type: "youtube"
        }
    }, {
        link: "https://www.github.com/kotertom/kotertom.github.io/tree/dev",
        title: "This page \u{2014} kotertom.github.io",
        description: `Made in Typescript, React and SASS.`,
        media: {
            type: "image",
            src: "",
            altText: ""
        }
    }, {
        title: "Cyberracing",
        link: "https://www.github.com/kotertom/cyberracing",
        description: `Simple game engine bundled with a demo written in JS ES5 (no npm, webpack et al.) + WebGL + rudimentary HTML and CSS. Heavily inspired by Unity's component system.`,
        media: {
            type: "youtube",
            id: "3SlY5DmH-xQ"
        }
    }
];

export interface Content {
    projects: ProjectDescription[];
    bio: string[];
    socialMedia: Array < {
        image: string;
        link: string;
    } >;
    sections: Array < {
        text: string;
    } >;
}
