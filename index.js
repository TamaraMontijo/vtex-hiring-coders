let slideIndex = 0;

let slider = document.getElementById("slider");

let slides = slider.getElementsByClassName("slide");

let slideControl = document.getElementById("slide-control");

let slideControlItems =
  slideControl.getElementsByClassName("slide-control-item");

slider.style.marginTop = "-" + slideIndex + "00vh";

// DISPLAY CONTENT EFFECT

setTimeout(() => {
  slideControlItems[slideIndex].classList.add("active");
  slides[slideIndex].classList.add("active");
}, 500);

//MODALS
var discountButton = document.getElementById("discount-button");

let modal = document.getElementById("modal");
let subscribeModal = document.getElementById("subscribe-modal");

let closeBtn = document.getElementById("modal-close");
let subscribeCloseBtn = document.getElementById("subscribe-modal-close");

discountButton.onclick = function () {
  subscribeModal.style.display = "block";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

subscribeCloseBtn.onclick = () => {
  subscribeModal.style.display = "none";
};

// DISPLAY MORE IMAGES

let moreImages = document.getElementsByClassName("more-images-item");

let previewImages = document.getElementsByClassName("img-preview");

Array.from(moreImages).forEach((el) => {
  el.onclick = () => {
    let imgItems = el.parentNode.getElementsByTagName("img");

    Array.from(imgItems).forEach((item, index) => {
      previewImages[index].src = item.src;
    });

    let img = el.querySelector("img");
    modal.style.display = "block";

    let modalContent = modal.querySelector(".modal-content");
    modalContent.src = img.src;

    let temp = modalContent.cloneNode(true);
    modalContent.parentNode.replaceChild(temp, modalContent);
  };
});

// FORM

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let nome = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let data = {
    nome,
    email,
  };
  let convertData = JSON.stringify(data);

  localStorage.setItem("lead", convertData);

  let subscribeButton = document.getElementById("subscribe-button");

  subscribeButton.onclick = () => {
    document.getElementById(
      "content"
    ).innerHTML = `<div class="subscribed"><p>Cadastro realizado!</p></div>`;
  };
});
