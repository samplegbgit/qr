const btele = document.querySelector(".btn")
const imgele = document.getElementById("qr-img")
const boxele = document.getElementById("img-box")
const inpele = document.getElementById("qr-text")

btele.addEventListener("click", () => {
    if (inpele.value.length > 0) {
        imgele.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inpele.value}`
        boxele.classList.add("show-img")
    }
})