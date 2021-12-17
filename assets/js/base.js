/* // GET
// VERbost http (POST, PUT, PATCH,  GET,DELETE)

// POST
const createUser = (objUser) =>{
    const xhttp = new XMLHttpRequest()
xhttp.open( "POST" , "https://genjs-292ac-default-rtdb.firebaseio.com/posts/.json", true)
xhttp.onload = function(data) {
    if(data.target.status === 200){
        console.log(data)
    }
}
}
const xhttp = new XMLHttpRequest()
xhttp.open( "POST" , "https://genjs-292ac-default-rtdb.firebaseio.com/posts/.json", true)
xhttp.onload = function(data) {
    if(data.target.status === 200){
        console.log(data)
    }
    xhttp.send( JSON.stringify(objNewPost) )
}

let objNewPost =  {
    author: 'Arturo Rios',
    title: 'foo',
    body: 'bar lorem',
}

//createUser()
//xhttp.send( JSON.stringify(objNewPost) )

// PATCH actualizar datos
const updateUser =  (objUpdate, idUser) => {
    const xhttp = new XMLHttpRequest()
    xhttp.open( "PATCH" , `https://genjs-292ac-default-rtdb.firebaseio.com/posts/${idUser}.json`, true)
    xhttp.onload = function(data) {
        if(data.target.status === 200){
            console.log(data)
        }
    }
    xhttp.send( JSON.stringify(objUpdate) )
}

let objUpdatePost =  {
    author: 'Arturo Rios Cueto',
}

//updateUser(objUpdatePost, '-Mr55K9JfDNYwZC-GCsN')
*/
// DELETE Eliminar datos
/* const deleteUser =  (idUser) => {
    const xhttp = new XMLHttpRequest()
    xhttp.open( "DELETE" , `https://genjs-292ac-default-rtdb.firebaseio.com/posts/${idUser}.json`, true)
    xhttp.onload = function(data) {
        if(data.target.status === 200){
            console.log(data)
        }
    }
    xhttp.send()
} */
//deleteUser('-Mr55K9JfDNYwZC-GCsN')
 // let objNewPost =  {
//     author: 'Jorge luis',
//     title: 'foo',
//     body: 'bar lorem',
// }
// ir por los datos del post

/* window.addEventListener('load', () => {

    const xhttp = new XMLHttpRequest()
    let idPost = location.search.slice(8)
    console.log(idPost)
    xhttp.open( "GET" , `https://genjs-292ac-default-rtdb.firebaseio.com/posts/${idPost}.json`, true)
    xhttp.onload = function(data) {
        if(data.target.status === 200) {
            let objResp = JSON.parse(data.target.response)
            console.log(objResp)
            // Llenar el formulario

            document.querySelector('#title').value = objResp.title
            document.querySelector('#author').value = objResp.author
            document.querySelector('#timetoread').value = objResp.timetoread
            document.querySelector('#resume').value = objResp.resume

        }
    }
    xhttp.send()
}) */




// POST crear datos
// POST crear datos
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
  
  xhttp.send( JSON.stringify(objPost) )
};

let send__post = document.querySelector("#send__post");
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
      resume
    }
  
    createUser(objNewPost);
  }
});

