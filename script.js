
/* Hearts */
function createHearts() {
    const heartsContainer = document.querySelector(".hearts");
    for(let i=0; i<10; i++){ // menos corazones para suavizar
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random()*100 + "vw";
        heart.style.animationDuration = (6 + Math.random()*4) + "s"; // 6-10s
        heart.style.animationDelay = Math.random()*10 + "s";
        heartsContainer.appendChild(heart);

        setTimeout(() => heart.remove(), 10000); // eliminarlos después de caer
    }
}

setInterval(createHearts, 800); // crear cada 0.8s