const cardImages = {
  spiderMan: {
    card1:
      "https://static.platzi.com/media/public/uploads/spider-man_db8af43d-b692-4986-a385-e645d286e142.png",
    card2:
      "https://static.platzi.com/media/public/uploads/spider-man-2_b24c96b3-6d59-496f-815d-32b25eba0141.png",
    card3:
      "https://static.platzi.com/media/public/uploads/spider-man-3_19f5c510-8059-4477-abf8-42249a5445b7.png",
  },
  robin: {
    card1: "./assets/robin1.png",
    card2: "./assets/robin2.png",
    card3: "./assets/robin3.png",
  },
  batman: {
    card1: "./assets/batman1.png",
    card2: "./assets/batman2.png",
    card3: "./assets/batman3.png",
  },
};

const loadModalImage = (nameHero) => {
    const cardImage1 = document.querySelector('#card-image-1');
    const cardImage2 = document.querySelector('#card-image-2');
    const cardImage3 = document.querySelector('#card-image-3');   
    cardImage1.src = cardImages[nameHero]['card1'];
    cardImage2.src = cardImages[nameHero]['card2'];
    cardImage3.src = cardImages[nameHero]['card3'];
}

const openModal = (nameHero) => {
    modal.classList.remove("hidden");
    modal.classList.add("visible");
    loadModalImage(nameHero);
}

const modal = document.querySelector(".modal");
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const closeButton = document.querySelector(".modal__content--close");

button1.addEventListener('click', () => openModal("spiderMan"));
button2.addEventListener('click', () => openModal("robin"));
button3.addEventListener('click', () => openModal("batman"));

closeButton.addEventListener("click", () => {
  modal.classList.add("hidden");
  modal.classList.remove("visible");
});



