import { quotes } from './quotes.js';

export default class Quote {

     constructor(){
        this.elTemplate = document.querySelector('[data-js-quote-template]')
        this.elQuote = document.querySelector('[data-js-quote]')
        this.elBtn = document.querySelector('button')
        this.elBlockQuote = this.elTemplate.querySelector('data-js-blockquote')
        this.init();
    }

    init(){
        this.clickButton();
    }

    clickButton(){
        this.elBtn.addEventListener('click', function(){
            // console.log(this.random().author);
            //this.random().source;
            this.injectQuote();
        }.bind(this));
    }

    injectQuote(){
        const cloneTemplate = this.elTemplate.cloneNode(true);

        cloneTemplate.innerHTML = cloneTemplate.innerHTML.replace('{{quote}}', this.random().quote);

        cloneTemplate.innerHTML = cloneTemplate.innerHTML.replace('{{source}}', this.random().source);

        cloneTemplate.innerHTML = cloneTemplate.innerHTML.replace('{{author}}', this.random().author);
                
        cloneTemplate.innerHTML = cloneTemplate.innerHTML.replace('{{nb}}', this.random().);


        const newTemplate = document.importNode(cloneTemplate.content, true);

        let blockQuote = this.elTemplate.firstElementChild;

        console.log(newTemplate);
        this.elQuote.append(newTemplate);
    }

    random(){
        
        const nbQuotes = quotes.length;

        const random = Math.floor(Math.random() * (nbQuotes - 1));

        return quotes[random];
    } 
};