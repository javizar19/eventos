
let name = document.getElementById('name1');
let pw = document.getElementById('pw');


function store() {
    localStorage.setItem('name1', name1.value);
    localStorage.setItem('pw', pw.value);
    alert('Registrado correctamente');
    window.location.assign('login.html');
    alert('Registrado correctamente');
    window.location.assign('login.html');
    alert('Registrado correctamente');

}


function check() {


    let storedName1 = localStorage.getItem('name1');
    let storedPw = localStorage.getItem('pw');


    let userName1 = document.getElementById('userName1');
    let userPw = document.getElementById('userPw');

    if(userName1.value == storedName1 && userPw.value == storedPw) {
        alert('Logueado correctamente');
       window.location.assign('eventos-form.html');
       alert('Logueado correctamente');
      
    }else {
        alert('Usuario no registrado');
        window.location.assign('login.html');
        alert('Usuario no registrado');
    }
}
