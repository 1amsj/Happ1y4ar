const heartsContainer = document.querySelector(".hearts");

setInterval(() => {
    const heart = document.createElement("span");
    heart.textContent = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (4 + Math.random() * 3) + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
}, 500);
