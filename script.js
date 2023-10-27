// Função para alternar entre os modos "Dark" e "Light"
function toggleMode() {
    var body = document.body;
    var modeToggle = document.getElementById("modeToggle");
    
    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        modeToggle.textContent = "Dark Mode";
    } else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        modeToggle.textContent = "Light Mode";
    }
}

// Adicione um ouvinte de evento ao botão de alternância
var modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", toggleMode);






const resizableImage = document.getElementById("resizableImage");

resizableImage.addEventListener("click", () => {
    if (resizableImage.classList.contains("large")) {
        resizableImage.classList.remove("large");
    } else {
        resizableImage.classList.add("large");
    }
});