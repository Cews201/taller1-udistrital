function validarFormulario(){
    let nombre = document.getElementById('nombre').value;
    let direccion = document.getElementById('direccion').value;
    let email = document.getElementById('email').value;
    let ciudad = document.getElementById('ciudad').value;
    let telefono = document.getElementById('telefono').value;

    if(nombre =='' || email =='' || direccion == '' || ciudad == '' || telefono == ''){
        alert('No se han diligenciado todos los campos obligatorios')
    }else{
        alert('Formulario enviado')
    }
}

function buscar() {
    let input = document.getElementById('buscar');
    let filter = input.value.toUpperCase();
    let ul = document.getElementById('breedList');
    let li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
        let a = li[i].textContent.toUpperCase();
        let encontro = a.indexOf(filter);
        console.log("li: " + a + " Encontro "+ encontro);
        if (encontro >= 0) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}
function fetchDogBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        const breeds = Object.keys(data.message); // Obtener todas las razas de perros
        const breedList = document.getElementById('breedList'); // Obtener el elemento de la lista HTML
  
        // Por cada raza de perro, crear un elemento de lista HTML y agregarlo a la lista
        breeds.forEach(breed => {
          const breedItem = document.createElement('li');
          breedItem.textContent = breed;
          breedList.appendChild(breedItem);
        });
      })
      .catch(error => console.error(error)); // Capturar cualquier error que pueda ocurrir
  }
  
const fetchButton = document.getElementById('fetchButton');
fetchButton.addEventListener('click', fetchDogBreeds);

function watchDog(){
    let input = document.getElementById('buscar').value;
    let output = 'https://dog.ceo/api/breed/'+input+'/images/random';
    console.log (output);
    fetch(output)
        .then(response => response.json())
        .then(data =>{
            const img = document.createElement('img');
            img.src =data.message;
            document.body.appendChild(img);            
        })
        .catch(error => console.error(error));
}
const watchButton = document.getElementById('watchButton');
watchButton.addEventListener('click', watchDog);
