

const dominioAPI = "http://localhost:5000/eventos";

function getLista() {
    fetch(dominioAPI)
        .then(result => result.json())
        .then(data => {
            let content = document.querySelector('#contenido');
            content.innerHTML = "";

            data.forEach( (evento, index)=>{
                content.innerHTML += `
                    <tr>
                        <th scope="row">${(index+1)}</th>
                        <td>${evento.title}</td>
                        <td>${evento.description}</td>
                        <td>
                            <span data-toggle="modal" data-target="#modal-edicion">
                                <button onclick="editarEvento('${evento._id}')" class="btn btn-success btn-sm" role="button" title="Editar"><i class="fas fa-pencil-alt">M</i></button>
                            </span>
                            <button onclick="eliminarEvento('${evento._id}')" class="btn btn-success btn-sm" title="Eliminar"><i class="fas fa-trash" aria-hidden="true">X</i></button>
                        </td>
                    </tr>
                    `;
            });
        });
}

function insertarEvento() {
    let eventoData = {
        "title": document.querySelector("#title").value,
        "description": document.querySelector("#description").value,
    };

    fetch(dominioAPI, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventoData)
    })
        .then(response => {
            response.json();
            getLista();
        })
        .then(response => console.log(response))
        .catch(error => error);

}

function modificaEvento() {
    let eventoData = {
        id: document.querySelector("#id").value,
        title: document.querySelector("#title").value,
        description: document.querySelector("#description").value,
    };
    console.log("Datos a modificar", eventoData);

    fetch(dominioAPI, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventoData)
    })
        .then(response => {
            alert("Evento modificado");
            response.json();
            getLista();
        })
        .catch(error => {
            console.log(error);
        });

}

function editarEvento(id) {
    // Recuperamos datos del evento y configuramos los datos en el formulario
    fetch(`${dominioAPI}/${id}`, { method: 'GET' })
        .then(response => response.json())
        .then(data => {
            document.querySelector("#id").value = data._id;
            document.querySelector("#title").value = data.title;
            document.querySelector("#description").value = data.description;
            myModal.show();
        })
        .catch(error => {
            console.log(error);
        });
}

function eliminarEvento(id) {
    fetch("http://localhost:5000/eventos/" + id, { method: 'DELETE' })
        .then(response => {
            //response.json();
            getLista();
            alert("Evento eliminado con éxito");
        })
        .then(response => console.log(response))
        .catch(error => error);
}

function guardarEvento() {
    const id = document.querySelector("#id").value;
    if (id == "")
        insertarEvento();
    else
        modificaEvento(id);

    myModal.hide();
}

function nuevoEvento() {
    document.querySelector("#id").value = "";
    document.querySelector("#form-data-evento").reset();
    myModal.show();
}