import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
  @property() name = 'Somebody';

  render() {
    return html`Hello, ${this.name}!`;
  }
}