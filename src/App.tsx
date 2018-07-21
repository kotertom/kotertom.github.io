import * as classNames from 'classnames';
import * as R from 'ramda';
import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { Link } from 'react-scroll';
import { Dispatch } from 'redux';

import * as style from './App.css';
import { bio, projects, sections, socialMediaDefs } from './content';
import { IrregularBox } from './IrregularBox';
import { Markdown, Props as MarkdownProps } from './Markdown';

type DivProps = React.DetailedHTMLProps < React.HTMLAttributes < HTMLDivElement >,
HTMLDivElement >;

const join = (items : Array < JSX.Element | string >, connector : JSX.Element | string) => [
  R.head(items),
  ...R.flatten(R.map(item => [
    connector, item
  ], items))
];

const App = ({dispatch} : {
  dispatch: Dispatch
}) => (
  <div className={style.root}>
    <div className={style.header}>
      tom koter
    </div>
    <div className={style.bio}>
      {/* short bio */}
      {join(bio, < b > | </b>
      )}
    </div>
    <div className={classNames(style.buttonGroup, style.socialMedia)}>
      {/* social media links */}
      {socialMediaDefs.map((props, i) => <SocialMediaButton {...props} key={i}/>)}
    </div>
    <div className={classNames(style.buttonGroup, style.sections)}>
      {/* sections */}
      {sections.map((props, i) => <SectionButton key={i} {...props}/>)}
    </div>
    <div className={style.currentSection} id="current-section">
      {/* current section */}
      <Switch>
        {/* currently only one section -- projects */}
        <Route path="/" component={Projects}/>
      </Switch>
    </div>
  </div>

);
export default connect(undefined, dispatch => ({dispatch}))(App);
interface ISocialMediaButtonProps {
  image : any;
  link : string;
}
const SocialMediaButton = (props : ISocialMediaButtonProps) => (
  <a href={props.link} className={style.socialMediaButton}>
    <img src={props.image} className={style.socialMediaButton}/>
  </a>
);

interface ISectionButtonProps {
  text : string;
}
const SectionButton = (props : ISectionButtonProps) => (
  <Link to="current-section" smooth={true}>
    <button className={style.sectionsButton}>{props.text}</button>
  </Link>
);
const Projects = () => (
  <div className={style.projects}>
    <div
      className={style.vdots}
      style={{
      height: '10vh',
      marginBottom: '3vh',
      marginTop: '3vh'
    }}/> {projects.map((proj, i) => (
      <IrregularBox
        irregularityHeight="50px"
        key={i}
        className={style.projectShowcase}><ProjectShowcase {...proj}/></IrregularBox>
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

interface PromoMediaProps {
  media : PromoMediaType;
  markdown
    ?
    : MarkdownProps;
}
const PromoMedia = ({
  media,
  markdown = {}
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

const ProjectShowcase = (props : ProjectShowcaseProps) => (
  <div className={style.projectShowcaseContentBox}>
    <div className={style.projectShowcaseContent}>
      {/* title + repo link + description */}
      <h1 className={style.cProjectShowcaseTitle}>{props.title}</h1>
      <a className={style.cProjectShowcaseLink} href={props.link}>{props.link}</a>
      <p className={style.cProjectShowcaseSeparator}>***</p>
      <Markdown
        className={style.cProjectShowcaseDescription}
        source={props.description}/>
    </div>
    <div className={style.projectShowcaseContent}>
      {/* image / video */}
      <PromoMedia media={props.media}/>
    </div>
  </div>
);