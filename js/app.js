
var myModal = new bootstrap.Modal(document.getElementById('modal-edicion'), {
    keyboard: false
  });
    	

function init() {
    // Inicialment mostram totes les figures
    getFigures("all");

    let buttonsList = document.querySelectorAll('.btn-check');
    for (const button of buttonsList) {
        button.addEventListener("click", function () {
            getFigures(this.value);
        });
    }
}

function getFigures(pType) {
    // Petició asíncrona
    fetch('./data/figures.json')
        .then(response => response.json())
        .then((collection) => {
            console.log("name", collection.nameCollection);
            pintarListaFiguras(collection.figures, pType);

        });
}

const pintarListaFiguras = (listaFiguras, pType) => {
    const container = document.getElementById("card-container");
    container.innerHTML = "";
    for (let figure of listaFiguras) {
        if (pType == figure.type || pType=="all") {
            container.innerHTML += `
                <div class="card mb-3" style="width: 290px; height: 500px  background: rgb(170,170,170);
                background: -moz-linear-gradient(0deg, rgba(170,170,170,1) 0%, rgba(139,139,139,0) 100%);
                background: -webkit-linear-gradient(0deg, rgba(170,170,170,1) 0%, rgba(139,139,139,0) 100%);
                background: linear-gradient(0deg, rgba(170,170,170,1) 0%, rgba(139,139,139,0) 100%);
                filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#aaaaaa",endColorstr="#8b8b8b",GradientType=1); ">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="img/${figure.img}" width="100%" alt="tanos image">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h2 class="card-title">${figure.name}</h2>
                                <p class="card-text">Estado: ${figure.description}</p>
                                <p class="card-text">Precio:  ${figure.price} €</p>
                                <a href="#" class="btn btn-warning">Comprar ahora</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    }
};

init();