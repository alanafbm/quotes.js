import { quotes } from './quotes.js';

export default class Quote {

     constructor(){
        this.elTemplate = document.querySelector('[data-js-quote-template]')
        this.elQuote = document.querySelector('[data-js-quote]')
        this.elBtn = document.querySelector('button')
        this.init();
    }

    init(){
        this.clickButton();
        console.log('init');
        console.log(this.elBlockQuote);
    }

    clickButton(){
        this.elBtn.addEventListener('click', function(){
        let elBlockQuote = document.querySelector('[data-js-blockquote]');
            if(!elBlockQuote){
                this.injectQuote();
            }else{
                elBlockQuote.remove();
                this.injectQuote();
            }
        }.bind(this));
    }

    injectQuote(){     

        const cloneTemplate = this.elTemplate.cloneNode(true);
                
        cloneTemplate.innerHTML = cloneTemplate.innerHTML.replace('{{nb}}', this.random().nb);

        const keys = Object.keys(this.random().quotesRandom);

        for (let i = 0; i < keys.length; i++) {
        
            let quotesRandom = this.random().quotesRandom;
            
            for (const prop in quotesRandom){

                let regExp = new RegExp('{{' + prop + '}}', 'g');
                cloneTemplate.innerHTML = cloneTemplate.innerHTML.replace(regExp, quotesRandom[prop])
            }
                   
        }


        const newTemplate = document.importNode(cloneTemplate.content, true);

        this.elQuote.append(newTemplate);

        let elBlockQuote = document.querySelector('[data-js-blockquote]');

        setTimeout(function() {
            if (elBlockQuote.classList.contains('hidden')) {
                elBlockQuote.classList.remove('hidden')
            }
        }, 100);


    }

    random(){
        
        const nbQuotes = quotes.length;

        const random = Math.floor(Math.random() * (nbQuotes - 1));
        
        let nb = random + 1;
        let quotesRandom = quotes[random];
        let newQuotes = {
            quotesRandom,
            nb
        };

        return newQuotes;
    } 
};