import { LitElement, html } from '../lit-element.js';

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
      site: {
        type: String
      },
      docs: {
        type: String
      },
      src: {
        type: String
      },
      npm: {
        type: String
      },
      private: {
        type: Boolean
      },
      enabled: {
        type: Object
      }
    };
  }

  constructor() {
    super();
    this.image = "";
    this.heading = "";
    this.subheading = "";
    this.description = "";
    this.site = "";
    this.docs = "";
    this.src = "";
    this.npm = "";
    this.private = false;
    this.enabled = {
      site: true,
      docs: false,
      src: false,
      npm: true
    };
  }

  shouldUpdate(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      switch (propName) {
        case 'site':
          this._siteChanged(this.site);

          break;

        case 'docs':
          this._docsChanged(this.docs);

          break;

        case 'src':
          this._srcChanged(this.src);

          break;

        case 'npm':
          this._npmChanged(this.npm);

          break;

        case 'private':
          this._privateChanged(this.private);

          break;
      } //console.log(`${propName} changed. newValue: ${this[propName]}`);

    });
    return super.shouldUpdate(changedProperties);
  }

  _siteChanged(url) {
    this.enabled.site = this._isValidURL(url) ? true : false; //console.log('Setting SITE enabled: ', this.enabled.site, url);
  }

  _docsChanged(url) {
    this.enabled.docs = this._isValidURL(url) ? this.private : false; //console.log('Setting DOCS enabled: ', this.enabled.docs, url);
  }

  _srcChanged(url) {
    this.enabled.src = this._isValidURL(url) ? this.private : false; //console.log('Setting SRC enabled: ', this.enabled.src, url);
  }

  _npmChanged(url) {
    this.enabled.npm = this._isValidURL(url) ? true : false; //console.log('Setting NPM enabled: ', this.enabled.npm, url);
  }

  _privateChanged(value) {
    this.private = value === true || value === "true" ? true : false;

    if (this._isValidURL(this.docs)) {
      this.enabled.docs = !this.private;
    }

    if (this._isValidURL(this.src)) {
      this.enabled.src = !this.private;
    }
  }

  _isValidURL(url) {
    let invalid = url === undefined || url === "undefined" || url === "" || url === null;
    return !invalid;
  } // noinspection JSUnusedGlobalSymbols


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
                    height: 80px;
                }

                .demo-card__primary {
                    height: 80px;
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
                        <button class="mdc-button mdc-card__action mdc-card__action--button" ?disabled="${!this.enabled.site}" @click="${e => this.openIfValidURL(this.site)}">Site</button>
                        <button class="mdc-button mdc-card__action mdc-card__action--button" ?disabled="${!this.enabled.docs}" @click="${e => this.openIfValidURL(this.docs)}">Docs</button>
                        <button class="mdc-button mdc-card__action mdc-card__action--button" ?disabled="${!this.enabled.src}" @click="${e => this.openIfValidURL(this.src)}">Src</button>
                        <button class="mdc-button mdc-card__action mdc-card__action--button" ?disabled="${!this.enabled.npm}" @click="${e => this.openIfValidURL(this.npm)}">NPM</button>
                    </div>
                </div>    
            </div>
        `;
  }

  openIfValidURL(url) {
    window.open(url);
  }

}

window.customElements.define('tm-project-card', TmProjectCard);

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
    console.log('Setting Project Data: ', projects);
    this.projects = projects.map(project => {
      return {
        image: project.image ? project.image : "",
        heading: project.heading ? project.heading : "",
        subheading: project.subheading ? project.subheading : "",
        description: project.description ? project.description : "",
        site: project.site ? project.site : "",
        src: project.src ? project.src : "",
        docs: project.docs ? project.docs : "",
        npm: project.npm ? project.npm : "",
        private: project.private === undefined ? false : project.private
      };
    });
    console.log('Set Project Data: ', this.projects);
  } // noinspection JSUnusedGlobalSymbols


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
                        docs="${project.docs}"
                        ?private="${project.private}"></tm-project-card>
                    </div>`)}
            </div>
        `;
  }

}

window.customElements.define('tm-project-list', TmProjectList);
