const domain = "https://jsonplaceholder.typicode.com";
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const columnUser = document.getElementById("col-1");
const columnPost = document.getElementById("col-2");
const containerArticle = document.querySelector(".rows");
const columns = document.querySelectorAll(".column")



// ******* Función que realiza la llamada a la API, recurso user ********
function instructionColumnUser() {
    userId = input.value
    if (userId <= 0 || userId >= 11) {
        alert("ingresa un numero entre 1 y 10")
    } else {
        fetch(`${domain}/users/${userId}`)
            .then(response => response.json())
            .then((user) => {

                let p = document.createElement("p");
                p.textContent = `- Name: ${user.name}\n\n- User Name: ${user.username}\n\n- Email: ${user.email} `;
                columnUser.appendChild(p);
                p.appendChild(btnDelete(p))

            });


    }
}

// ********* Función que realiza la llamada a la API, recurso post *********
function instructionColumnPost() {
    userId = input.value;
    if (userId <= 0 || userId >= 11) {
        alert("ingresa un numero entre 1 y 10")
    } else {
        fetch(`${domain}/posts/${userId}`)
            .then(response => response.json())
            .then((post) => {

                let p = document.createElement("p");
                p.textContent = `- Post title: ${post.title}\n\n- Body post: ${post.body} `;
                columnPost.appendChild(p)
                p.appendChild(btnDelete(p))


            })

    }
}
// ****** Función para limpiar el input ******
function clearInput() {
    input.value = ""
}

// ******** Función para crear un botón y darle instrucciones de eliminar contenido ***********
function btnDelete(item) {
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "X";
    botonEliminar.setAttribute('style', 'margin-left: 2rem;')

    botonEliminar.addEventListener('click', () => {
        const elemento = item
        if (elemento) {
            elemento.remove();
        }
    });
    return botonEliminar;
}




// ********* Evento en botón enviar *********
btn.addEventListener("click", () => {
    instructionColumnUser()
    instructionColumnPost()
})

// ********* Funcion tecla enter ********
document.addEventListener("DOMContentLoaded", () => {
    function handleKeyPress(event) {

        if (event.key === 'Enter') {
            instructionColumnUser()
            instructionColumnPost()
            clearInput()
        }
    }
    document.addEventListener('keydown', handleKeyPress);

});



