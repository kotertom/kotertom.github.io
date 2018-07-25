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
    type : "youtube";
    id : string;
}

export interface Image {
    type : "image";
    src : string;
    altText : string;
}

export type PromoMediaType = YouTube | Image;

export interface ProjectDescription {
    title : string;
    link : string;
    description : string;
    media : PromoMediaType;
}
export const projects : ProjectDescription[] = [
    {
        description: `VR app exploring different methods of data visualization.`,
        link: "github.com/kotertom",
        media: {
            id: "ao1eHQNOcF0",
            type: "youtube"
        },
        title: "Vis VR"
    }, {
        description: `VR app exploring different methods of data visualization.`,
        link: "github.com/kotertom",
        media: {
            id: "ao1eHQNOcF0",
            type: "youtube"
        },
        title: "Vis VR"
    }
];

export interface Content {
    projects : ProjectDescription[];
    bio : string[];
    socialMedia : Array < {
        image: string;
        link: string;
    } >;
    sections : Array < {
        text: string;
    } >;
}
