import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (el) =>
      `<li class="gallery__item">
  <a class="gallery__link" href=${el.original}>
    <img class="gallery__image" src=${el.preview} alt=${el.description} title=${el.description}/>
  </a>
</li>`
  )
  .join("");

galleryList.insertAdjacentHTML("beforeend", markup);

galleryList.addEventListener("click", onOpenModalImg);

function onOpenModalImg(e) {
  e.preventDefault();

  var lightbox = new SimpleLightbox(".gallery a", {
    /* options */
    captions: true,
    captionPosition: "bottom",
    captionDelay: 250,
  });
}

console.log(galleryItems);
