// api fetch
/**
 * fetch(url, optionsObj)
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Response/json
 *
 */

// sintaxis
const getFetch = () => {
    // GET - default

    fetch("https://arturdev-15g-default-rtdb.firebaseio.com/posts/.json")
    .then((res) => {
    return res.json()
    })
    .then((posts) => {
    console.log(posts)
    })

    // DELETE
    let idpost = "-Mr5R9iNmAuGlzOFPOqR"
    fetch(`https://arturdev-15g-default-rtdb.firebaseio.com/posts/${idpost}.json`, {
    method: "DELETE"
    })
}

// POST
let postFetch = () => {

    let objToCreate = {
        "author": "post fetch",
        "resume": "123",
        "timetoread": "12",
        "title": "asfdfg"
    }
    
    fetch(`https://arturdev-15g-default-rtdb.firebaseio.com/posts/.json`, {
        method:'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objToCreate)
    })
      .then((res) => {
        return res.json()
      })
      .then((post) => {
        console.log(post)
      })
}

let patchFetch = () => {
    // PATCH
    let objToUpdate = {
        "author": "test update fetch"
    }
    let idPost = '-Mr5RoWmkleIHp-PyYAW'
    fetch(`https://arturdev-15g-default-rtdb.firebaseio.com/posts/${idPost}.json`, {
        method:'PATCH',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objToUpdate)
    })
      .then((res) => {
        return res.json()
      })
      .then((post) => {
        console.log(post)
      })
}