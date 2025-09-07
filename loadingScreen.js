const loading = document.querySelector(".loading");
const loaded = document.querySelector(".loaded");

window.addEventListener("load", ()=>{
    setTimeout(()=>{
        loaded.classList.add("loadedDone");

        setTimeout(() => {
            loading.classList.add("loadingFinished");
            setTimeout(() => {
                loading.remove();
            }, 300);
        }, 300);

    },1000);    
});