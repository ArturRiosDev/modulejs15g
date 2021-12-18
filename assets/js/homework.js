let currentWindow = window.location.href;

const createUser = (objPost) => {
  const xhttp = new XMLHttpRequest();
  xhttp.open(
    "POST",
    "https://arturdev-15g-default-rtdb.firebaseio.com/posts/.json",
    true
  );
  xhttp.onload = function (data) {
    if (data.target.status === 200) {
      document.querySelector("#title").value = "";
      document.querySelector("#author").value = "";
      document.querySelector("#timetoread").value = "";
      document.querySelector("#resume").value = "";
      let res = JSON.parse(data.target.response);
      let idPost = res.name;
      document.getElementById("post__id").innerText = idPost;
      document.getElementById("alert__response").classList.remove("d-none");
    }
  };

  xhttp.send(JSON.stringify(objPost));
};

//FUNCION PARA OBTENER LOS DATOS DE CADA CARD Y CREARLOS
/* const createCard = (objCreated) =>{ */
  const xhttp1 = new XMLHttpRequest()
  xhttp1.open("GET","https://arturdev-15g-default-rtdb.firebaseio.com/posts/.json", true);

  xhttp1.onload = function (data) {
    if (data.target.status === 200) {
      let objCards =  JSON.parse(data.target.response)
      console.log(objCards)
      let templateCards = ''
      for (const key in objCards) {

        //console.log(objCards[key].author)
        templateCards+=`
        <div class="card bg-light" >
        <div class="card-body">
            <h5 class="card-title">${objCards[key].author}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${objCards[key].resume}</h6>
            <p class="card-text">${objCards[key].title}</p>
        </div>
    </div>
        `
      }
      document.querySelector('.grid__cards').innerHTML = templateCards
    }
  };

  xhttp1.send();
/* } */

//Aqui realiza la validacion si se encuentra en la pagina de las cards
if (currentWindow === "http://127.0.0.1:5500/cards.html") {
  console.log(`no estas en la pagina del formulario`);
  let buttonBack =  document.querySelector('#back__form')
  buttonBack.addEventListener('click',()=>{
  location.replace("http://127.0.0.1:5500/index.html")
  })

} else {
  //aqui se crea la variable para enviar a la pagina de las cards 
  let buttonToCards = document.querySelector('#go__cards')
  buttonToCards.addEventListener('click', ()=>{
      location.replace("http://127.0.0.1:5500/cards.html")
  })

  //Aqui crea la variable para realizar el post 
  let send__post = document.querySelector("#send__post");
  //Aqui realiza la validacion para enviar el formulario
  send__post.addEventListener("click", () => {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let timetoread = document.querySelector("#timetoread").value;
    let resume = document.querySelector("#resume").value;

    if (title === "" || author === "" || timetoread === "" || resume === "") {
      alert("Favor de llenar todos los campos");
    } else {
      // console.log(title, author, timetoread, resume)

      let objNewPost = {
        title,
        author,
        timetoread,
        resume,
      };

      createUser(objNewPost);
    }
  });
}




