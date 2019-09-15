import {html, LitElement} from 'lit-element';

class TmProjectList extends LitElement {

    // noinspection JSUnusedGlobalSymbols
    static get properties() {
        return {
            heading: {type: String}
        }
    }

    constructor() {
        super();
        this.heading = 'List of Project';
    }

    // noinspection JSUnusedGlobalSymbols
    render() {
        return html`
      <style>
        :host {
          display: inline-block;
        }
        h2 {
            color: gray;
        }
      </style>
      <h2>${this.heading}</h2>
    `;
    }


}

window.customElements.define('tm-project-list', TmProjectList);
