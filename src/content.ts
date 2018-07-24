import githubMark from './GitHub-Mark-120px-plus.png';
import gitlabLogo from './gitlab-logo-square.png';

export const socialMediaDefs = [
    {
        image: githubMark,
        link: 'https://www.github.com/kotertom'
    }, {
        image: gitlabLogo,
        link: 'https://www.gitlab.com/kotertom'
    }
];

export const bio = ["computer science graduate", "rustacean", "small, focused CLI tool enthusiast", "haskeller", "computer graphics <3"];

export const sections = [
    {
        text: "projects"
    }
];

interface YouTube {
    type : 'youtube';
    id : string;
}

interface Image {
    type : 'image';
    src : string;
    altText : string;
}

type PromoMediaType = YouTube | Image;

interface ProjectDescription {
    title : string;
    link : string;
    description : string;
    media : PromoMediaType;
}
export const projects : ProjectDescription[] = [
    {
        description: `VR app exploring different methods of data visualization.`,
        link: 'github.com/kotertom',
        media: {
            id: 'ao1eHQNOcF0',
            type: 'youtube'
        },
        title: 'Vis VR'
    }, {
        description: `VR app exploring different methods of data visualization.`,
        link: 'github.com/kotertom',
        media: {
            id: 'ao1eHQNOcF0',
            type: 'youtube'
        },
        title: 'Vis VR'
    }
];