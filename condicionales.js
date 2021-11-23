let urlfeliz = "https://thumbs.dreamstime.com/b/emoticon-con-la-cara-feliz-75511442.jpg" 
let urltriste = "https://i.pinimg.com/originals/c3/88/11/c38811fd35dd552cbf457b54b5fb85f4.jpg"
let imgHtml = document.querySelector ("#imagencara")
let nota1 = prompt ("Ingrese su primera nota")
let nota2 = prompt ("Ingrese su segunda nota")
let nota3 = prompt ("Ingrese su tercera nota")
let p = (parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))/3;
alert("Su promedio es: " +p)
if(p >= "6")﹛
   imgHtml.src = urlfeliz 
﹜else﹛
   imgHtml.src = urltriste
   ﹜
