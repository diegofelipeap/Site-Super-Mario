
let form = document.querySelector(".send-form")
let mask = document.querySelector(".mask-form")

function clickShow() {
    form.style.left = "765px"
    mask.style.visibility = "visible"
    if (window.innerWidth < 900) {
        form.style.left = "50%";
        form.style.transform = "translateX(-50%)";
        mask.style.visibility = "visible";
    }
}

function goneForm() {
    form.style.left = "-320px"
    mask.style.visibility = "hidden"

}
