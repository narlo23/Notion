export default function AddPageBtn({ $target, initialState, createNewPage }) {
  const $addPageDiv = document.createElement("div");
  $addPageDiv.className = "addPageDiv";
  $target.appendChild($addPageDiv);

  this.state = initialState;

  const addPage = () => {
    $addPageDiv.innerHTML = `
        <button class="document_add_button" type="button">+</button>
        <p class="newPageParagraph">${this.state.text}</p>
      `;
  };

  this.render = () => {
    addPage();
  };

  $addPageDiv.addEventListener("click", () => {
    createNewPage();
  });

  this.render();
}
