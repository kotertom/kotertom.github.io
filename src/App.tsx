import * as classNames from 'classnames';
import * as R from 'ramda';
import * as React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Link} from 'react-scroll';

import * as style from './App.scss';
import { Content, ProjectDescription} from './content';
import {IrregularBox} from './IrregularBox';
import { Markdown } from './Markdown';

type DivProps = React.DetailedHTMLProps < React.HTMLAttributes < HTMLDivElement >,
HTMLDivElement >;


type HTMLProps<TElem extends HTMLElement> = React.DetailedHTMLProps<React.HTMLAttributes<TElem>, TElem>;

// join an array of jsx elements or text using another jsx element or text
// works just like join for strings but for react
const join = (items : Array < JSX.Element | string >, connector : JSX.Element | string) => R.tail(R.flatten(R.map(item => [
  connector, item
], items)));



// non-breaking whitespace character
const nbsp = '\xa0';

// main app component
interface AppProps {content: Content}
const App = ({content} : AppProps) => (
  <div className={style.lRoot}>
    <div className={style.cHeader}>
      tom koter
    </div>
    <div className={style.cBio}>
      {/* short bio */}
      {join(content.bio.map((str,i) => (
        <span key={i} className={style.cBioContent}>{str.replace(/ /g, nbsp)}</span>
      )),
        <b className={style.cBioSeparator}> | </b>
      )}
    </div>
    <div className={classNames(style.cButtonGroup, style.cSocialMedia)}>
      {/* social media links */}
      {content.socialMedia.map((props, i) => <SocialMediaButton {...props} key={i}/>)}
    </div>
    <div className={classNames(style.cButtonGroup, style.cSections)}>
      {/* sections */}
      {content.sections.map((props, i) => <SectionButton key={i} {...props}/>)}
    </div>
    <div className={style.cCurrentSection} id="current-section">
      {/* current section */}
      <Switch>
        {/* currently only one section -- projects */}
        <Route path="/" render={() => <Projects projects={content.projects} />}/>
      </Switch>
    </div>
    <div className={style.cFooter}/>
  </div>
);

export default App;



// button for social media links, e.g. github, gitlab, linkedin
interface ISocialMediaButtonProps {
  image : any;
  link : string;
}
const SocialMediaButton = (props : ISocialMediaButtonProps) => (
  <a href={props.link} className={style.cSocialMediaButton}>
    <img src={props.image} className={style.cSocialMediaButton}/>
  </a>
);


// as soon as there are more things I do, I'm planning to add sections like
// 'code', '3d modelling' etc.
interface ISectionButtonProps {
  text : string;
}
const SectionButton = (props : ISectionButtonProps) => (
  <Link to="current-section" smooth={true} className={style.cSectionsAnchor}>
    <button className={style.cSectionsButton}>{props.text}</button>
  </Link>
);

interface ProjectsProps {projects: ProjectDescription[]}
const Projects = ({projects}: ProjectsProps) => (
  <div className={style.cProjects}>
    <div
      className={style.cVdots}
      style={{
          height: '10vh',
          marginBottom: '3vh',
          marginTop: '3vh'
        }}
      />
      {projects.map((proj, i) => (
      <IrregularBox
        irregularityHeight="50px"
        key={i}
        innerClassName={style.cProjectShowcaseBackground}
        className={style.cProjectShowcase}
        >
          <ProjectShowcase {...proj} />
      </IrregularBox>
    ))}
  </div>
);

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

interface PromoMediaProps extends DivProps {
  media : PromoMediaType;
}
const PromoMedia = ({
  media,
  ...markdown
} : PromoMediaProps) => {
  switch (media.type) {
    case 'youtube':
      return <Markdown {...markdown} source={`@[youtube](${media.id})`}/>;
    case 'image':
      return <Markdown {...markdown} source={`![${media.altText}](${media.src})`}/>;
  }
}

interface ProjectShowcaseProps extends DivProps {
  title : string;
  link : string;
  description : string;
  media : PromoMediaType;
}

const ProjectShowcase =
  (props: ProjectShowcaseProps) => (
  <div className={style.cProjectShowcaseContentBox}>
    <div className={style.cProjectShowcaseContent}>
      {/* title + repo link + description */}
        <h1 className={style.cProjectShowcaseTitle}>
          {props.title}
  <span><a className={style.cProjectShowcaseLink} href={props.link}>{props.link.replace(/^.*:\/\/www\./, '')}</a></span>
        </h1>
      
        <hr className={style.cProjectShowcaseSeparator}/>
        <p className={style.cProjectShowcaseDescription}>{props.description}</p>
        {/* Markdown in description, maybe? */}
      {/* <Markdown
        className={style.cProjectShowcaseDescription}
        source={props.description}/> */}
    </div>
    <div className={style.cProjectShowcaseContent}>
      {/* image / video */}
      <PromoMedia media={props.media} className={style.cProjectShowcaseMedia}/>
      </div>
  </div>
);