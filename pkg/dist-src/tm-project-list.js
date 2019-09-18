import { html, LitElement } from 'lit-element';
import './tm-project-card.js';

class TmProjectList extends LitElement {
  // noinspection JSUnusedGlobalSymbols
  static get properties() {
    return {
      heading: {
        type: String
      },
      projects: {
        type: Array
      }
    };
  }

  constructor() {
    super();
    this.heading = 'List of Project';
    this.projects = [];
  }

  setProjects(projects) {
    this.projects = projects;
  } // noinspection JSUnusedGlobalSymbols


  render() {
    return html`
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
            <style>
                :host {
                    display: inline-block;
                }
                h2 {
                    color: gray;
                }
                
                @media only screen and (min-width: 300px) {
                    tm-project-card {
                        //border: solid blue 1px;
                        width: 100%;
                    }
                }
        
                @media only screen and (min-width: 600px) {
                    tm-project-card {
                        //border: solid red 1px;
                        width: 49%;
                    }
                }
        
                @media only screen and (min-width: 900px) {
                    tm-project-card {
                        //border: solid red 1px;
                        width: 33%;
                    }
                }
        
                @media only screen and (min-width: 1200px) {
                    tm-project-card {
                        //border: solid blue 1px;
                        width: 24.6%;
                    }
                }
            </style>
            <h2>${this.heading}</h2>
            ${this.projects.map(project => html`
                <tm-project-card
                image="${project.image}"
                heading="${project.heading}"
                subheading="${project.subheading}"
                description="${project.description}"
                demo="${project.demo}"
                source="${project.source}"
                documentation="${project.documentation}"></tm-project-card>
            `)}
        `;
  }

}

window.customElements.define('tm-project-list', TmProjectList);