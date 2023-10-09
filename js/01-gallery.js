import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (el) =>
      `<li class="gallery__item">
  <a class="gallery__link" href=${el.original}>
    <img
      class="gallery__image"
      src=${el.preview}
      data-source=${el.original}
      alt=${el.description}
    />
  </a>
</li>`
  )
  .join("");

galleryList.insertAdjacentHTML("beforeend", markup);

galleryList.addEventListener("click", onOpenModalImg);

function onOpenModalImg(e) {
  e.preventDefault();
  const selectedImg = e.target.dataset.source;
  console.log(selectedImg);

  const instance = basicLightbox.create(
    `
      <img src=${selectedImg}/>
  `,
    {
      /*
       * Prevents the lightbox from closing when clicking its background.
       */
      closable: true,
      /*
       * One or more space separated classes to be added to the basicLightbox element.
       */
      className: "",
      /*
       * Function that gets executed before the lightbox will be shown.
       * Returning false will prevent the lightbox from showing.
       */
      onShow: (instance) => {
        console.log("onShow");
        window.addEventListener("keydown", onEscKeyPress);
      },
      /*
       * Function that gets executed before the lightbox closes.
       * Returning false will prevent the lightbox from closing.
       */
      onClose: (instance) => {
        console.log("onClose");
        window.removeEventListener("keydown", onEscKeyPress);
      },
    }
  );

  instance.show(() => {
    window.addEventListener("keydown", onEscKeyPress);
  });
}

function onEscKeyPress(e) {
  console.log(e.code);
  const ESC_KEY_CODE = "Escape";
  if (e.code === ESC_KEY_CODE) {
    instance.close();
  }
}

console.log(galleryItems);
