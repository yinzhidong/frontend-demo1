import { LitElement, css, html } from 'lit';

class LitBtn extends LitElement {
    // Define scoped styles right with your component, in plain CSS
    static styles = css`
    button {
        color: var(--mycolor);
    }
    `;

    static properties = {
        count: 0
    }

    constructor() {
        super();
        this.count = 0;
    }

    // Render the UI as a function of component state
    render() {
        return html`<button @click=${() => this.count++}>Btn ${this.count}</button>`;
    }
}

customElements.define("lit-btn", LitBtn);