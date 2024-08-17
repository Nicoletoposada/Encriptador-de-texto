function encriptarTexto() {
    let texto = document.getElementById("inputText").value;
    if (texto.trim() === "") {
        alert("Por favor, ingresa algún texto.");
        return;
    }

    mostrarProgreso();

    setTimeout(() => {
        let textoEncriptado = encriptacionAvanzada(texto);
        document.getElementById("outputText").value = textoEncriptado;
        ocultarProgreso();
    }, 1000);  //Simular tiempo de procesamiento
}

function desencriptarTexto() {
    let texto = document.getElementById("outputText").value;
    if (texto.trim() === "") {
        alert("No hay texto para desencriptar.");
        return;
    }

    mostrarProgreso();

    setTimeout(() => {
        let textoDesencriptado = desencriptacionAvanzada(texto);
        document.getElementById("outputText").value = textoDesencriptado;
        ocultarProgreso();
    }, 1000);
}

function encriptacionAvanzada(texto) {
    return Array.from(texto).map(c => String.fromCharCode(c.charCodeAt(0) + 3)).join("");
}

function desencriptacionAvanzada(texto) {
    return Array.from(texto).map(c => String.fromCharCode(c.charCodeAt(0) - 3)).join("");
}

function copiarTexto() {
    let texto = document.getElementById("outputText");
    texto.select();
    document.execCommand("copy");

    let notification = document.getElementById("notification");
    notification.classList.add("visible");
    setTimeout(() => notification.classList.remove("visible"), 2000);
}

function mostrarProgreso() {
    let progressBar = document.getElementById("progressBar");
    progressBar.classList.remove("hidden");
    progressBar.style.width = "100%";
}

function ocultarProgreso() {
    let progressBar = document.getElementById("progressBar");
    progressBar.classList.add("hidden");
    progressBar.style.width = "0%";
}
