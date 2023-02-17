import AddPageBtn from "/src/SideBar/AddPageBtn.js";
export default function DocumentList({ $target, initialState, addPage }) {
  const $documentList = document.createElement("div");
  $documentList.className = "documentList";
  $target.appendChild($documentList);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  let showSubLists = false;

  const arrowBtn = `<img class="arrow-right" src="/src/assets/arrow.png" />`;

  const showDocumentList = (documents, depth) => {
    $documentList.innerHTML = `
        ${documents
          .map(
            ({ id, title, documents }) =>
              `
          <li class="document_li" key=${id}>
          <button class="showSubListsBtn" type="button">
            ${arrowBtn}
          </button>
            <p class="document_name">${title ? title : "제목 없음"}</p>
            <button class="document_delete_button" type="button">
              <img class="delete" src="/src/assets/delete.png" />
            </button>
            <button class="document_add_button" type="button">+</button>
          </li>
          ${
            showSubLists && documents.length
              ? showDocumentList(documents, depth + 1)
              : `<li class="sub_nothing" style="padding-left: ${
                  (depth + 1) * 20
                }px;
                display: ${
                  showSubLists ? "block" : "none"
                }">하위 페이지 없음</li>`
          }
          `
          )
          .join("")}
    `;
  };

  this.render = () => {
    console.log(this.state);
    showDocumentList(this.state, 0);
  };

  $documentList.addEventListener("click", (e) => {
    const { target } = e;
    const $li = target.closest("li");
    if (!$li) {
      return;
    }
    console.log($li);
  });

  this.render();
}
