import { html, LitElement } from 'lit-element'; //import '../web_modules/material-components-web.js';

import '@material/card';

class TmProjectCard extends LitElement {
  // noinspection JSUnusedGlobalSymbols
  static get properties() {
    return {
      image: {
        type: String
      },
      heading: {
        type: String
      },
      subheading: {
        type: String
      },
      description: {
        type: String
      },
      favorite: {
        type: Boolean
      },
      demo: {
        type: String
      },
      documentation: {
        type: String
      },
      source: {
        type: String
      }
    };
  }

  constructor() {
    super();
  } // noinspection JSUnusedGlobalSymbols


  render() {
    return html`
<!--            <link href="material-components-web.css" rel="stylesheet">-->
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
            <style>  
                @import "../node_modules/@material/card/dist/mdc.card.css";
                :host {
                  display: inline-block;
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
                        <button class="mdc-button mdc-card__action mdc-card__action--button" @click="${e => this.openDemo()}">Demo</button>
                        <button class="mdc-button mdc-card__action mdc-card__action--button" @click="${e => this.openDocs()}">Docs</button>
                        <button class="mdc-button mdc-card__action mdc-card__action--button" @click="${e => this.openSrc()}">Source</button>
                    </div>
                    <div class="mdc-card__action-icons">
                        <button id="add-to-favorites" @click="${e => this.toggleFavorite()}"
                           class="mdc-icon-button material-icons"
                           aria-label="Add to favorites"
                           aria-hidden="true"
                           aria-pressed="false">
                           <i id="aaa" class="material-icons mdc-icon-button__icon">${this.getFavoriteString()}</i>
                        </button>
                    </div>
                </div>    
            </div>
        `;
  }

  openDemo() {
    window.open(this.demo);
  }

  openDocs() {
    window.open(this.documentation);
  }

  openSrc() {
    window.open(this.source);
  }

  getFavoriteString() {
    return this.favorite ? 'favorite' : 'favorite_border';
  }

  toggleFavorite() {
    this.favorite = !this.favorite;
  }

}

window.customElements.define('tm-project-card', TmProjectCard);