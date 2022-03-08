let urlfeliz = "https://thumbs.dreamstime.com/b/emoticon-con-la-cara-feliz-75511442.jpg" 
let urltriste = "https://i.pinimg.com/originals/c3/88/11/c38811fd35dd552cbf457b54b5fb85f4.jpg"
let imgHtml = document.querySelector ("#imagencara")
let nota1

do{
   nota1 = Number(prompt ("Ingrese su primera nota"))
}while(isNaN(nota1) || nota1> 10 || nota1< 0);

do{
   nota2 = Number(prompt ("Ingrese su primera nota"))
}while(isNaN(nota2) || nota2> 10 || nota2< 0);

do{
   nota3 = Number(prompt ("Ingrese su primera nota"))
}while(isNaN(nota3) || nota3> 10 || nota3< 0);

let p = (parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))/3;
alert("Su promedio es: " +p)
if(p >= "6"){
   imgHtml.src = urlfeliz 
}else{
   imgHtml.src = urltriste
}
