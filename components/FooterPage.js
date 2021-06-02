class FooterPage extends  HTMLElement{
 
    constructor(){
        super();
    }

    connectedCallback(){
         this.render();
    }

    render(){
        this.innerHTML = `

        <footer class="footer">
        <div class="container py-4">
           <div class="row py-4">
              <div class="col-lg-2 col-md-6 mb-4 mb-lg-0"><img src="img/logo.png" alt="" width="180" class="mb-3">
                 <p class="font-italic text-muted">Nuestras redes sociales</p>
                 <ul class="list-inline mt-4">
                    <li class="list-inline-item"><a href="#" target="_blank" title="twitter"><img
                             src="./img/twitter.jpg" height="40px" width="50px" alt=""></i></i></a></li>
                    <li class="list-inline-item"><a href="#" target="_blank" title="facebook"><img
                             src="./img/facebook.svg" height="40px" width="50px" alt=""></i></i></a></li>
                    <li class="list-inline-item"><a href="#" target="_blank" title="instagram"><img
                             src="./img/instagram.jpg" height="40px" width="50px" alt=""></i></i></a></li>
                    <li class="list-inline-item"><a href="#" target="_blank" title="twitch"><img src="./img/twitch.jpg"
                             height="40px" width="50px" alt=""></i></i></a></li>
                    <li class="list-inline-item"><a href="#" target="_blank" title="vimeo"><img src="./img/vimeo.png"
                             height="40px" width="50px" alt=""></i></i></a></li>
                    <li class="list-inline-item"><a href="#" target="_blank" title="youtube"><img
                             src="./img/youtube.jpg" height="40px" width="50px" alt=""></i></i></a></li>
                 </ul>
              </div>
              <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                 <h6 class="text-uppercase font-weight-bold mb-4"></h6>
                 <ul class="list-unstyled mb-0">
                    <li class="mb-2"><a href="#" class="text-muted">For Women</a></li>
                    <li class="mb-2"><a href="#" class="text-muted">For Men</a></li>
                    <li class="mb-2"><a href="#" class="text-muted">Stores</a></li>
                    <li class="mb-2"><a href="#" class="text-muted">Our Blog</a></li>
                 </ul>
              </div>
              <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                 <h6 class="text-uppercase font-weight-bold mb-4"></h6>
                 <ul class="list-unstyled mb-0">
                    <li class="mb-2"><a href="#" class="text-muted">Login</a></li>
                    <li class="mb-2"><a href="#" class="text-muted">Register</a></li>
                    <li class="mb-2"><a href="#" class="text-muted">Wishlist</a></li>
                    <li class="mb-2"><a href="#" class="text-muted">Our Products</a></li>
                 </ul>
              </div>
              <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                 <h6 class="text-uppercase font-weight-bold mb-4"></h6>
                 <ul class="list-unstyled mb-0">
                    <li class="mb-2"><a href="#" class="text-muted">Login</a></li>
                    <li class="mb-2"><a href="#" class="text-muted">Register</a></li>
                    <li class="mb-2"><a href="#" class="text-muted">Wishlist</a></li>
                    <li class="mb-2"><a href="#" class="text-muted">Our Products</a></li>
                 </ul>
              </div>
              <div class="col-lg-4 col-md-6 mb-lg-0">
                 <h6 class="text-uppercase font-weight-bold mb-4"></h6>
                 <p class="text-muted mb-4">Suscribete para recibir nuestras ofertas</p>
                 <div class="p-1 rounded border">
                    <div class="input-group">
                       <input type="email" placeholder="Introduce tu email aquí" aria-describedby="button-addon1"
                          class="form-control border-0 shadow-0" required>
                       <div>
                          <button class="btn btn-info" type="submit" onclick="sucripcionMail()" style="height: 40px; width: 80px; border: black 2;">Enviar</button>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        <div class="bg-light py-4">
           <div class="container text-center">
              <p class="text-muted mb-0 py-2">© 2021 | Zar&Company | All rights reserved.</p>
           </div>
        </div>
     </footer>

        `;
    }

}

window.customElements.define("footer-page", FooterPage);