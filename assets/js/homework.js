let koders = [
    {
      name: "emilio",
      age: 30,
      city: "Guadalajara",
    },
    {
      name: "Brisset",
      age: 30,
      city: "Lima",
    },
    {
      name: "Erik",
      age: 30,
      city: "Mexico",
    },
    {
      name: "Fabiola",
      age: 35,
      city: "Mexico",
    },
    {
      name: "Alejandro",
      age: 15,
      city: "Aguascalientes",
    },
  ];
  
  //Filter by name
  const filterKoder = () => {
    let selected = document.querySelector("#selection").value, koderSearch = document.querySelector("#name__koder").value
    let kodersFiltered = "" , list = ''
    
    if (selected === "name" || selected === "city") {
      koderSearch = koderSearch.toLowerCase();
      kodersFiltered = koders.filter((koder) => {
        if (koder.name.toLowerCase().includes(koderSearch)) {
          return koder;
        } else if (koder.city.toLowerCase().includes(koderSearch)) {
          return koder;
        }
      });
    } else if (selected === "age") {
      kodersFiltered = koders.filter((koder) => {
        if (koder.age.toString().includes(koderSearch)) {
          return koder;
        }
      });
    }
    
    kodersFiltered.forEach((val) => {
      list += `<li>${val.name}</li>
              <li>${val.age}</li>
              <li>${val.city}</li>`;
    });
    document.querySelector("#listKoders").innerHTML = list;
  };
  
  const multipleValidation = () => {
    filterKoder();
  };
  