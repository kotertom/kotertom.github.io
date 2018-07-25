import "./_fonts.css";
import "./index.css";

import * as React from "react";
import * as ReactDOM from "react-dom";

import * as es6promise from 'es6-promise';

import { BrowserRouter } from "react-router-dom";
import App from "./App";
import {bio, projects, sections, socialMedia} from "./content";
import registerServiceWorker from "./registerServiceWorker";

es6promise.polyfill();


ReactDOM.render(
  <BrowserRouter>
    <App content={{
      bio,
      projects,
      sections,
      socialMedia
    }}/>
  </BrowserRouter>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
