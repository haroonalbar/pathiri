import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import * as Tokens from "@pathiri/tokens/dist/json/variables.json";

export class ColorBlocks extends LitElement {
  static properties = {
    name: {},
    list: [],
    all: [],
  };
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      font-family: Avenir, sans-serif;
    }

    .block__title {
      font-size: 1.25rem;
      text-transform: capitalize;
    }
    .brick {
      padding: 0.5rem;
      height: 32px;
      width: 25%;
    }

    .flex {
      display: flex;
    }
    .bk {
      display: inline-block;
    }
    .txt-right {
      text-align: right;
      margin-left: auto;
    }
  `;

  constructor() {
    super();
    // Declare reactive properties
    this.name = "World";

    const allColors = Tokens.colors;
    const allKeys = Object.keys(allColors);
    this.list = allKeys;
    this.all = allColors;
  }

  // Render the UI as a function of component state
  render() {
    return html`
      <h2 class="block__title">List of Colors</h2>
      <div>
        ${this.list.map(
          (item, key) => html`
            <div>
              <h2 class="block__title">${item}</h2>
              <div class="">
                ${Object.keys(this.all[item]).map(
                  (x) =>
                    html`
                      <div
                        class="brick"
                        style="background-color: ${this.all[item][x]["value"]};"
                      ></div>
                      <div class="brick flex">
                        <span  class="bk" style="font-weight: bold;">${x}</span>
                        <span class="bk txt-right"
                          >${this.all[item][x]["value"]}</span
                        >
                      </div>
                      
                    `
                )}
              </div>
              <hr/>
            </div>
          `
        )}
      </div>
    `;
  }
}

customElements.define("aq-colorblocks", ColorBlocks);
