import '../css/components.css'

export const saludar = (nombre) => {
    fetch("another").then(a => {
        console.log(a);
    });
    console.log('creando etiqueta h1 ' + nombre);
    const h1 = document.createElement("h1");
    h1.innerText = `Hola, ${nombre}`
    document.body.append(h1);
}
