class TituloDinamico extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});

        //base do component
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute("titulo");

        //estilizar o component
        const   style = document.createElement("style");
        style.textContent = `
            h1{
                color: #A52A2A;
                background: linear-gradient(to bottom, #87CEFA, #8A2BE2);
                margin: 0;
                padding: 0;
                font-family: 'Poppins', sans-serif;
            }
        `

        //enviar para a shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define("titulo-dinamico" , TituloDinamico)