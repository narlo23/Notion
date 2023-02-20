export default function AddPageBtn({ $target, initialState, addPage }) {
  const $addPageDiv = document.createElement("div");
  $addPageDiv.className = "addPageDiv";
  $target.appendChild($addPageDiv);

  this.state = initialState;

  const NewButton = () => {
    $addPageDiv.innerHTML = `
        <button class="document_add_button" type="button">+</button>
        <p class="newPageParagraph">${this.state.text}</p>
      `;
  };

  this.render = () => {
    NewButton();
  };

  $addPageDiv.addEventListener("click", () => {
    addPage();
  });

  this.render();
}
