class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");

        const newImage = document.createElement("img");
        newImage.src =  this.getAttribute("photo") || "./assets/foto-default.png";
        newImage.alt = "foto dath-vader"

        cardRight.appendChild(newImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }
        
        body {
            display: flex;
            padding-left: 5%;
            align-items: center;
            min-height: 100vh;
            background-color: #f5f5f5;
            margin: 0;
          }
        
        .card{
            width: 80%;
            max-width: 800px;
            background-color: #eee7e7;
            border-radius: 10px;
            overflow: hidden;
            display: flex;
            -webkit-box-shadow: 5px 5px 10px 1px rgba(77,61,77,0.75);
            -moz-box-shadow: 5px 5px 10px 1px rgba(77,61,77,0.75);
            box-shadow: 5px 5px 10px 1px rgba(77,61,77,0.75);
            transition: transform 0.3s ease-in-out;
            flex-direction: row;
            justify-content: space-between;
        }
        
        .card:hover {
            transform: scale(1.02);
          }
        
        
        .card_left{
            display: flex;
            flex-direction:column ;
            justify-content: center;
            padding-left: 10px;
        }
        
        
        .card_left > span {
            font-weight: 400;
            color: #555;
        }
        
        .card_left > a {
            margin-top: 15px;
            font-size: 1.5rem;
            color: #2c3e50;
            text-decoration: none;
            font-weight: 400;
            transition: color 0.3s ease-in-out;
        }
        
        .card_left > a:hover {
            color: #e74c3c;
          }
        
        .card_left > p {
            color: #707070;
            line-height: 1.5;
            margin-top: 10px;
        }
        
        .card_right {
            
            overflow: hidden;
        }
        
        
        
        img {
            max-width: 100%;  
            max-height: 100%;
            padding: 7px 7px 0 0;
            height: auto;  
            object-fit: cover;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            transition: transform 0.3s ease-in-out;
          }
        
          .card:hover img {
            transform: scale(1.1);
          }

           @media screen and (max-width: 768px) {
            .card {
                flex-wrap: wrap;
                margin: 0;
            }
        
            .card_left {
                flex: 1 1 100%;
            }
        
            .card_right {
                flex: 1 1 100%;
            }
        }
        
        `;

        return style;
    }
}

customElements.define("card-news", CardNews);
