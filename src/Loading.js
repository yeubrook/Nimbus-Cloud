export function loadScreen(){
    const loading = document.querySelector(".loading-screen");
    loading.classList.add("visible");
}

export function hideLoadScreen(){
    const loading = document.querySelector(".loading-screen");
    loading.classList.remove("visible");
}