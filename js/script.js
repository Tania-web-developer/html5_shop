document.querySelector(".burger").onclick = () =>{
document.querySelector(".modal-fade").classList.add("modal-fade-open");
}

document.querySelector(".collapse-btn").onclick = () => {
document.querySelector(".modal-fade").classList.remove("modal-fade-open");
}