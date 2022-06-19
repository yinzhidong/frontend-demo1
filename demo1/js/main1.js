
// 
class EchoDiv extends HTMLElement{

    constructor(){
        super();

        this.attachShadow({
            mode: 'open'
        });

        // this.shadowRoot.innerHTML = `
        // <div style="background-color: pink; width:100px; height: 100px;color:#fff;">
        //     <slot></slot>
        // </div>
        // `;


        this.shadowRoot.innerHTML = `
        <style>
            div {
                background-color: pink;
                width: 100px;
                height: 100px;
                color: #fff;
            }
        </style>
        <div>
            <slot></slot>
        </div>
        `

    }

};


class EchoBtn extends HTMLElement {

    static get observedAttributes() {
        console.log('observedAttributes...')
        return ['count'];
    }

    get count() {
        return this.getAttribute('count') ? this.getAttribute('count') : 0 ;
    }

    set count(count) {
        this.setAttribute('count', count);
    }


    constructor() {
        console.log('constructor...')
        super();

        this.attachShadow({
            mode: 'open'
        });

        this.shadowRoot.innerHTML = `
            <div>
                <button>${this.count}</button>
            </div>
        `;

        // 添加事件
        this.btn = this.shadowRoot.querySelector('button');
        this.btn.addEventListener('click', () => {
            console.log('click...')
            this.count++;
        }, false);
    }


    // 属性改变的通知事件
    attributeChangedCallback(attr, oldVal, newVal) {
        console.log('attributeChangedCallback...attr=', attr,' oldVal=', oldVal, ' newVal=', newVal);

        if('count' === attr && oldVal !== newVal) {
            this.btn.textContent = newVal;
        }
    }
}



customElements.define("echo-div", EchoDiv);
customElements.define("echo-btn", EchoBtn);