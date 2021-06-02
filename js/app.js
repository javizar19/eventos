
var myModal = new bootstrap.Modal(document.getElementById('modal-edicion'), {
    keyboard: false
  });
    	

function init() {
    // Inicialment mostram totes les juegos
    getFigures("all");

    let buttonsList = document.querySelectorAll('.btn-check');
    for (const button of buttonsList) {
        button.addEventListener("click", function () {
            getFigures(this.value);
        });
    }
}

window.calculateSumListener = function calculateSumListener() {
    //Devuelve el valor del input #firstNumber
    var stringA = document.getElementById("firstNumber").value;
    //Devuelve el valor del input #secondNumber
    var stringB = document.getElementById("secondNumber").value;

    let result = parseInt(stringA) + parseInt(stringB);

    document.getElementById("resultNumber").value = result;
};


function getFigures(pType) {
    // Petició asíncrona
    fetch('./data/juegos.json')
        .then(response => response.json())
        .then((collection) => {
            pintarListaFiguras(collection.juegos, pType);

        });
}

const pintarListaFiguras = (listaFiguras, pType) => {
    const container = document.getElementById("card-container");
    container.innerHTML = "";
    for (let figure of listaFiguras) {
        if (pType == figure.type || pType=="all") {
            container.innerHTML += `
                <div class="card mb-3" style="width: 380px; height: 450px  background: rgb(170,170,170);
                background: -moz-linear-gradient(0deg, rgba(170,170,170,1) 0%, rgba(139,139,139,0) 100%);
                background: -webkit-linear-gradient(0deg, rgba(170,170,170,1) 0%, rgba(139,139,139,0) 100%);
                background: linear-gradient(0deg, rgba(170,170,170,1) 0%, rgba(139,139,139,0) 100%);
                filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#aaaaaa",endColorstr="#8b8b8b",GradientType=1); ">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="img/${figure.img}" width="100%" height="100%"  alt="tanos image">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h class="card-title"style="font-size:17px; color: blue">${figure.name}</h5><br><br><br>
                                <p class="card-text">Estado: ${figure.description}</p><br><br>
                                <p class="card-text">Precio:  ${figure.price} €</p><br>
                                <a href="#" class="btn btn-light" onclick="mostrarCompra()">Comprar ahora</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    }
};

  function mostrarCompra() {
    swal({
      position: "center-center",
      icon: "success",
      title: "Juego añadido al carrito",
      text: "¿Desea finalizar su compra?",
      buttons: ['No','Si'],
      timer: 5000,
    });
  }

  function sucripcionMail(){
    swal({
        position: "center-center",
        icon: "info",
        title: "GRACIAS",
        text: "Por suscribirte a nuestra newsletter",
        button: "Salir",
        showConfirmButton: false,
      });
  }

init();