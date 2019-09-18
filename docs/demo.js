import {html, render} from "./web_modules/lit-html.js";

render(html`
    <style>
    :host {
    }

    body {
      background-color: #ededed;
    }
    
    body > * {
        clear: both;
        float: left;
    }
    
    tm-project-list {
        width: 100%;
    }
  </style>
  
  <tm-project-list></tm-project-list>
  

`, document.querySelector('body'));

document.querySelector('tm-project-list').setProjects([
    {
        image: "images/tm-amazing-sitemap.png",
        heading: "Amazing Sitemap",
        subheading: "tm-amazing-sitemap",
        description: "A geeky retro site map, where the user can walk through a 3D maze, to find website pages.",
        site: "https://tmcmaster.github.io/tm-amazing-sitemap",
        src: "https://github.com/tmcmaster/tm-amazing-sitemap",
        docs: "https://github.com/tmcmaster/tm-amazing-sitemap/blob/master/README.md"
    },
    {
        image: "images/wired-elements.png",
        heading: "Wired Elements",
        subheading: "wired-elements",
        description: "Collection of functional web components, that have been styled to look hand drawn.",
        site: "https://wonkytech.net/apps/wired-elements/demo",
        src: "https://github.com/tmcmaster/wired-elements",
        docs: "https://github.com/tmcmaster/wired-elements/blob/master/README.md"
    },
    {
        image: "images/tm-project-list.png",
        heading: "Project List",
        subheading: "tm-project-list",
        description: "Web component for listing projects, as a set of cards.",
        site: "https://tmcmaster.github.io/tm-project-list",
        src: "https://github.com/tmcmaster/tm-project-list",
        npm: "https://www.npmjs.com/package/@wonkytech/tm-project-list",
        docs: "https://github.com/tmcmaster/tm-project-list/blob/release/README.md"
    },
    {
        image: "images/media-bias-fact-check.png",
        heading: "Media Bias Fact Check",
        subheading: "media-bias-fact-check",
        description: "Visualising bias and fact accuracy of media sources.",
        site: "https://media-bias-fact-check.web.app/",
        src: "https://github.com/tmcmaster/media-bias-fact-check",
        docs: "https://github.com/tmcmaster/media-bias-fact-check/blob/master/README.md"
    }
]);