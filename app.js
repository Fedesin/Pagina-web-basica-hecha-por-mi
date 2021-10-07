var nameUser= "john";
let lastName= "carter";
let names = ["ryan","joe","john"];
function greeting(nombre){
    console.log("Hola "+nombre);
}
console.log(names[2] +" "+ lastName);
for(let i=0; i<names.length;i++){
    console.log(names[i]+" "+ lastName);
    greeting(names[i]);
}