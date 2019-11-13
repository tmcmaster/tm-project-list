import {html, css, LitElement} from 'lit-element';

import './tm-project-card.js';

class TmProjectList extends LitElement {

    // noinspection JSUnusedGlobalSymbols
    static get properties() {
        return {
            heading: {type: String},
            subheading: {type: String},
            projects: {type: Array}
        }
    }

    constructor() {
        super();
        this.heading = '';
        this.subheading = '';
        this.projects = [];
    }

    setProjects(projects) {
        console.log('Setting Project Data: ', projects);
        this.projects = projects.map(project => {return {
            image: (project.image ? project.image : ""),
            heading: (project.heading ? project.heading : ""),
            subheading: (project.subheading ? project.subheading : ""),
            description: (project.description ? project.description : ""),
            site: (project.site ? project.site : ""),
            src: (project.src ? project.src : ""),
            docs: (project.docs ? project.docs : ""),
            npm: (project.npm ? project.npm : ""),
            private: (project.private === undefined ? false : project.private)
        }});
        console.log('Set Project Data: ', this.projects);
    }

    static get styles() {
        // language=CSS
        return css`
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
            h4 {
                text-align: center;
                font-style: italic;
                color: grey;
            }
        `;
    }
    // noinspection JSUnusedGlobalSymbols
    render() {
        return html`
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
            
            <div class="container">
                <h2>${this.heading}</h2>
                <h4>${this.subheading}</h4>
                ${this.projects.map(project => html`<div class="card">
                        <tm-project-card
                        image="${project.image}"
                        heading="${project.heading}"
                        subheading="${project.subheading}"
                        description="${project.description}"
                        site="${project.site}"
                        src="${project.src}"
                        npm="${project.npm}"
                        docs="${project.docs}"
                        ?private="${project.private}"></tm-project-card>
                    </div>`)}
            </div>
        `;
    }


}

window.customElements.define('tm-project-list', TmProjectList);
