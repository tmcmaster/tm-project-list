import {html, LitElement} from 'lit-element';

import '@vaadin/vaadin-text-field/vaadin-text-field';
import 'wired-elements/wired-helper';
import 'wired-elements/wired-card';

class TmProjectCard extends LitElement {

    // noinspection JSUnusedGlobalSymbols
    static get properties() {
        return {
            image: {type: String},
            heading: {type: String},
            subheading: {type: String},
            description: {type: String},
            site: {type: String},
            docs: {type: String},
            src: {type: String},
            npm: {type: String}
        }
    }

    constructor() {
        super();
    }

    // noinspection JSUnusedGlobalSymbols
    render() {
        return html`
            <link rel="stylesheet" href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css">
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
            <style>  
                /*@import "./mdc.card.css";*/
                :host {
                  display: inline-block;
                  box-sizing: border-box;
                  width: 100%;
                }
                h2 {
                    color: gray;
                }
                .demo-card__primary, .demo-card__secondary {
                    padding: 0 16px 0 16px;
                }
                .demo-card__title {
                    margin-bottom: 0;
                }
                .demo-card__subtitle {
                    margin-top: 0;
                }
                .mdc-card__action-icons > label {
                    margin-right: 15px;;
                }
                
                .mdc-card {
                    box-sizing: border-box;
                    //border: solid red 1px;
                    height: 100%;
                }
                
                .demo-card__secondary {
                    display: inline-block;  
                    height: 100px;
                }

            </style>
            
            <div class="mdc-card demo-card">
                <div class="mdc-card__primary-action" tabindex="0">
                    <div class="mdc-card__media mdc-card__media--16-9 demo-card__media" style="background-image: url(${this.image});"></div>
                    <div class="demo-card__primary">
                        <h2 class="demo-card__title mdc-typography mdc-typography--headline6">${this.heading}</h2>
                        <h3 class="demo-card__subtitle mdc-typography mdc-typography--subtitle2">${this.subheading}</h3>
                    </div>
                    <div class="demo-card__secondary mdc-typography mdc-typography--body2">${this.description}</div>
                </div>
                <div class="mdc-card__actions">
                    <div class="mdc-card__action-buttons">
                        <button class="mdc-button mdc-card__action mdc-card__action--button" ?disabled="${this.isInvalid(this.site)}" @click="${(e) => this.openIfValidURL(this.site)}">Site</button>
                        <button class="mdc-button mdc-card__action mdc-card__action--button" ?disabled="${this.isInvalid(this.docs)}" @click="${(e) => this.openIfValidURL(this.docs)}">Docs</button>
                        <button class="mdc-button mdc-card__action mdc-card__action--button" ?disabled="${this.isInvalid(this.src)}" @click="${(e) => this.openIfValidURL(this.src)}">Src</button>
                        <button class="mdc-button mdc-card__action mdc-card__action--button" ?disabled="${this.isInvalid(this.npm)}" @click="${(e) => this.openIfValidURL(this.npm)}">NPM</button>
                    </div>
                </div>    
            </div>
        `;
    }

    openIfValidURL(url) {
        if (!this.isInvalid(url)) {
            window.open(url)
        }
    }

    isInvalid(url) {
        return (url === undefined || url === "undefined" || url === "");
    }
}

window.customElements.define('tm-project-card', TmProjectCard);
