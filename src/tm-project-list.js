import {html, LitElement} from 'lit-element';

import './tm-project-card.js';

class TmProjectList extends LitElement {

    // noinspection JSUnusedGlobalSymbols
    static get properties() {
        return {
            heading: {type: String},
            projects: {type: Array}
        }
    }

    constructor() {
        super();
        this.heading = 'List of Project';
        this.projects = [];
    }

    setProjects(projects) {
        this.projects = projects;
    }

    // noinspection JSUnusedGlobalSymbols
    render() {
        return html`
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
            <style>
                :host {
                    box-sizing: border-box;
                    display: inline-block;
                    box-sizing: border-box;
                    width: 100%;
                }
                h2 {
                    color: gray;
                }
                
                tm-project-card {
                    box-sizing: border-box;
                }

                .container {
                    box-sizing: border-box;
                    //border: solid green 1px;
                    max-width: 1000px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .card {
                    display: inline-block;
                    box-sizing: border-box;
                    //border: solid blue 1px;
                    padding: 3px;
                }
                
                @media only screen and (max-width: 900px) { .container { width: 100%; } } 
                
                @media only screen and (min-width: 300px) { .card { width: 100%; } } 
                @media only screen and (min-width: 600px) { .card { width: 49%; } } 
                @media only screen and (min-width: 900px) { .card { width: 33.33%; } } 
                
                h2 {
                    text-align: center;
                }
            </style>
            <div class="container">
                <h2>${this.heading}</h2>
                ${this.projects.map(project => html`<div class="card">
                        <tm-project-card
                        image="${project.image}"
                        heading="${project.heading}"
                        subheading="${project.subheading}"
                        description="${project.description}"
                        site="${project.site}"
                        src="${project.src}"
                        npm="${project.npm}"
                        docs="${project.docs}"></tm-project-card>
                    </div>`)}
            </div>
        `;
    }


}

window.customElements.define('tm-project-list', TmProjectList);
