function expandirCard(card) {
    card.classList.toggle("expandido");
}

function mostrarCodigo(id) {
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.style.display = elemento.style.display === "block" ? "none" : "block";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const codigos = document.querySelectorAll(".codigo-oculto");
    codigos.forEach(el => {
        el.style.display = "none";
    });
});
