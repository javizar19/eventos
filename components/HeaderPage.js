class HeaderPage extends  HTMLElement{
 
    constructor(){
        super();
    }

    connectedCallback(){
         this.render();
    }

    render(){
        this.innerHTML = `
        <header class="header">
        <nav class="navbar navbar-expand-lg navbar-light">
           <div class="container-fluid">
              <a class="navbar-brand" href="#" id="logo">
                 <img src="./img/seven-network-tv.svg" alt="LOGO" width="150" height="120">
              </a>
              <a class="navbar-brand" href="#" style="font-size:40px;">Via7oyo</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                 aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav" style="font-size:25px;">
                 <!-- Poner cuatro cosas significantes aquí arriba -->
                 <ul class="navbar-nav">
                    <li class="nav-item">
                       <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                       <a class="nav-link" href="./webPages/html/pc.html">PC</a>
                    </li>
                    <li class="nav-item">
                       <a class="nav-link" href="./webPages/html/playStation.html">PlayStation</a>
                    </li>
                    <li class="nav-item">
                       <a class="nav-link" href="./webPages/html/xbox.html">Xbox</a>
                    </li>
                    <li class="nav-item">
                       <a class="nav-link" href="./webPages/html/nintendo.html">Nintendo</a>
                    </li>
                    <li class="nav-item">
                       <a class="nav-link" href="./webPages/html/gaming.html">Gaming</a>
                    </li>
                    <li class="nav-item">
                       <a class="nav-link" href="./webPages/html/nosotrosd.html">Nosotros</a>
                    </li>

                 </ul>

              </div>
           </div>
        </nav>
     </header>
        `;
    }

}

window.customElements.define("header-page", HeaderPage);