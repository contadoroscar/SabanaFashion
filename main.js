const form = document.querySelector(".contact-form form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const Telefono = document.getElementById('Telefono').value;
    const Nombre = document.getElementById('Nombre').value;
    const dirección = document.getElementById('dirección').value;
    const ciudad = document.getElementById('ciudad').value;
    const email = document.getElementById('email').value;

    console.log("Telefono:", Telefono);
    console.log("Nombre:", Nombre);
    console.log("direción:", dirección);
    console.log("ciudad:", ciudad);
    console.log("email:", email);

    alert("Hola " + Nombre + ", su email es " + email + " + " , Telefono  + ciudad + dirección);
});

