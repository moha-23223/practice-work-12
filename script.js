const giftArr = [{
    title: "Подарок при первой покупке в нашем магазине!",
    icon: "./img/download.png",
}];

function showPopup() {
    const randomGift = giftArr[Math.floor(Math.random() * giftArr.length)];

    const popup = document.createElement("div");
    popup.classList.add("popup");

    const icon = document.createElement("img");
    icon.src = randomGift.icon;
    icon.alt = "Gift";

    const title = document.createElement("p");
    title.textContent = randomGift.title;

    const button = document.createElement("button");
    button.textContent = "Отлично!";
    button.addEventListener("click", () => {
        popup.remove();
    });

    popup.appendChild(icon);
    popup.appendChild(title);
    popup.appendChild(button);

    document.body.appendChild(popup);
}

setTimeout(showPopup, 3000);