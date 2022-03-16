
//Pego o botao pelo Id e atribuo à variavel
let buttonAdd = document.getElementById("btn_enviar")


//Funcao que cria um novo div de comentario

function Comentar(){
    //criei os elementos do comentario

    let div = document.createElement("div")
    let txtNome = document.createElement("h1")
    let txtNick = document.createElement("h3")
    let txtComentario = document.createElement("p")
    let imagem = document.createElement("img")

    //passei os valores

    txtNome.innerText = document.getElementById("input_nome").value
    txtNick.innerText = document.getElementById("input_nickname").value
    txtComentario.innerText = document.getElementById("input_comentario").value

   
    const objectURL = URL.createObjectURL(document.getElementById("input_img").files[0])
    imagem.src = objectURL

    //setei as classLists
    div.classList.add("div_comentado")
    txtNome.classList.add("txt_nome")
    txtNick.classList.toggle("txt_nickname")
    txtComentario.classList.toggle("txt_comentario")
    imagem.classList.toggle("img_comentario")

    //defini quem é filho de quem

    div.appendChild(imagem)
    div.appendChild(txtNome)
    div.appendChild(txtNick)
    div.appendChild(txtComentario)

    document.querySelector("body").appendChild(div)

    console.log(document.getElementById("input_img").files[0])

}



//criei o evento de click no botao
buttonAdd.addEventListener("click",Comentar)