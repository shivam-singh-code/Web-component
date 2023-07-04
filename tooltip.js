class Tooltip extends HTMLElement {
    constructor() {
        super();
        console.log('it is wokin');
    }
}

customElements.define('uc-tooltip', Tooltip);