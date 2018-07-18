import * as React from 'react';
import * as style from './App.css';

import {push} from 'connected-react-router';
import {connect} from 'react-redux';
import {Redirect, Route, Switch} from 'react-router';
import {Dispatch} from 'redux';
import githubMark from './GitHub-Mark-120px-plus.png';
import gitlabLogo from './gitlab-logo-square.png';

enum RouteURL {
  about = "/about",
  projects = "/projects",
  root = "/"
}

const goRouteCb = (dispatch : Dispatch, route : RouteURL) => () => dispatch(push(route));

const App = ({dispatch} : {
  dispatch: Dispatch
}) => (
  <div className={style.box}>
    <Navbar/>
    <Switch>
      <Route exact={true} path={RouteURL.projects} component={Projects}/>
      <Route exact={true} path={RouteURL.about} component={About}/>
      <Route exact={true} path={RouteURL.root}>
        <Redirect to={RouteURL.about}/>
      </Route>
    </Switch>
  </div>
);
export default connect(undefined, dispatch => ({dispatch}))(App);

const Navbar = connect(undefined, dispatch => ({
  goHome: goRouteCb(dispatch, RouteURL.about),
  goProjects: goRouteCb(dispatch, RouteURL.projects)
}))(({goHome, goProjects}) => (

  <nav className={style.navbar}>
    <div className={style.navbarTabgroup}>
      <button className={style.navbarTab} onClick={goHome}>about</button>
      <button className={style.navbarTab} onClick={goProjects}>
        projects
      </button>
    </div>
    <button onClick={goHome} className={style.navbarHome}>@kotertom</button >

  </nav>
));

const About = () => (
  <div className={style.aboutContent}>
    <div className={style.aboutSocialLinks}>
      <a href="https://www.github.com/kotertom " className={style.navbarSocialLink}>
        < img src={githubMark} className={style.navbarImg}/>
      </a>
      < a href="https://www.gitlab.com/kotertom" className={style.navbarSocialLink}>
        <img src={gitlabLogo} className={style.navbarImg}/>
      </a>
    </div>
  </div>
);

const Projects = () => (<div/>);