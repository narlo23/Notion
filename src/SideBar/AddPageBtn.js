export default function AddPageBtn({ $target, onClick }) {
  const $addPageDiv = document.createElement("div");
  $addPageDiv.className = "addPageDiv";
  $target.appendChild($addPageDiv);

  const addPage = () => {
    $addPageDiv.innerHTML = `
        <p class="newPageParagraph">+ 새 페이지</p>
      `;
  };

  this.render = () => {
    addPage();
  };

  $addPageDiv.addEventListener("click", () => {
    onClick();
  });

  this.render();
}
