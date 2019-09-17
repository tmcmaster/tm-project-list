import {html, render} from 'lit-html';

import '../src/index.js';

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
        demo: "https://tmcmaster.github.io/tm-amazing-sitemap",
        source: "https://github.com/tmcmaster/tm-amazing-sitemap",
        documentation: "https://github.com/tmcmaster/tm-amazing-sitemap/blob/master/README.md"
    },
    {
        image: "images/wired-elements.png",
        heading: "Wired Elements",
        subheading: "wired-elements",
        description: "Collection of functional web components, that have been styled to look hand drawn.",
        demo: "https://wonkytech.net/apps/wired-elements/demo",
        source: "https://github.com/tmcmaster/wired-elements",
        documentation: "https://github.com/tmcmaster/wired-elements/blob/master/README.md"
    },
    {
        image: "images/tm-project-list.png",
        heading: "Project List",
        subheading: "tm-project-list",
        description: "Web component for listing projects, as a set of cards.",
        demo: "https://tmcmaster.github.io/tm-project-list",
        source: "https://github.com/tmcmaster/tm-project-list",
        documentation: "https://github.com/tmcmaster/tm-project-list/blob/release/README.md"
    }
]);