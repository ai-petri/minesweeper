class Digit extends HTMLElement
{
    constructor()
    {
        super();
    }
    connectedCallback()
    {
        let shadow = this.attachShadow({mode:"open"});
        shadow.innerHTML = `
        <svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25px" height="40px" viewBox="0 0 50 100"  >
            <polygon points="8,5 41,5 42,7 40,10 9,10 7,7 "/>
            <polygon points="6,8 8,11 8,47 6,49 4,47 4,10 "/>
            <polygon points="43,8 41,11 41,46 43,49 45,47 45,10 "/>
            <polygon points="9,47 40,47 42,50 40,53 9,53 7,50 "/>
            <polygon points="6,92 8,89 8,54 6,51 4,53 4,89 "/>
            <polygon points="43,92 41,88 41,54 43,51 45,53 45,89 "/>
            <polygon points="8,95 41,95 42,93 40,89 9,89 6,93 "/>
        </svg>
        `
        let parts = shadow.querySelectorAll("polygon");
        let update = _=>
        {
            switch(Number(this.innerHTML))
            {
                case 0:
                parts[0].style.display = "block";
                parts[1].style.display = "block";
                parts[2].style.display = "block";
                parts[3].style.display = "none";
                parts[4].style.display = "block";
                parts[5].style.display = "block";
                parts[6].style.display = "block";
                    break;
                case 1:
                parts[0].style.display = "none";
                parts[1].style.display = "none";
                parts[2].style.display = "block";
                parts[3].style.display = "none";
                parts[4].style.display = "none";
                parts[5].style.display = "block";
                parts[6].style.display = "none";
                    break;
                case 2:
                parts[0].style.display = "block";
                parts[1].style.display = "none";
                parts[2].style.display = "block";
                parts[3].style.display = "block";
                parts[4].style.display = "block";
                parts[5].style.display = "none";
                parts[6].style.display = "block";
                    break;
                case 3:
                parts[0].style.display = "block";
                parts[1].style.display = "none";
                parts[2].style.display = "block";
                parts[3].style.display = "block";
                parts[4].style.display = "none";
                parts[5].style.display = "block";
                parts[6].style.display = "block";
                    break;
                case 4:
                parts[0].style.display = "none";
                parts[1].style.display = "block";
                parts[2].style.display = "block";
                parts[3].style.display = "block";
                parts[4].style.display = "none";
                parts[5].style.display = "block";
                parts[6].style.display = "none";
                    break;
                case 5:
                parts[0].style.display = "block";
                parts[1].style.display = "block";
                parts[2].style.display = "none";
                parts[3].style.display = "block";
                parts[4].style.display = "none";
                parts[5].style.display = "block";
                parts[6].style.display = "block";
                    break;
                case 6:
                parts[0].style.display = "block";
                parts[1].style.display = "block";
                parts[2].style.display = "none";
                parts[3].style.display = "block";
                parts[4].style.display = "block";
                parts[5].style.display = "block";
                parts[6].style.display = "block";
                    break;
                case 7:
                parts[0].style.display = "block";
                parts[1].style.display = "none";
                parts[2].style.display = "block";
                parts[3].style.display = "none";
                parts[4].style.display = "none";
                parts[5].style.display = "block";
                parts[6].style.display = "none";
                    break;
                case 8:
                parts[0].style.display = "block";
                parts[1].style.display = "block";
                parts[2].style.display = "block";
                parts[3].style.display = "block";
                parts[4].style.display = "block";
                parts[5].style.display = "block";
                parts[6].style.display = "block";
                    break;
                case 9:
                parts[0].style.display = "block";
                parts[1].style.display = "block";
                parts[2].style.display = "block";
                parts[3].style.display = "block";
                parts[4].style.display = "none";
                parts[5].style.display = "block";
                parts[6].style.display = "block";
                    break;
            }
        }
        

        let observer = new MutationObserver(update);
        observer.observe(this,  {childList: true});
        update();
    }
}
customElements.define("lcd-digit", Digit);