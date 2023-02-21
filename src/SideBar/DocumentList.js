import AddPageBtn from "/src/SideBar/AddPageBtn.js";
import { deleteDocument } from "../api/api.js";
export default function DocumentList({
  $target,
  initialState,
  addPage,
  deletePage,
}) {
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

  const showDocumentList = (Root_documents, depth) => {
    $documentList.innerHTML = `
        ${Root_documents.map(
          ({ id, title, documents }) =>
            `
          <li data-id="${id}" class="document_li" key=${id} >
          <button class="showSubListsBtn" type="button">
            ${arrowBtn}
          </button>
            <p class="document_name">${title ? title : id}</p>
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
        ).join("")}
    `;
  };

  this.render = () => {
    showDocumentList(this.state.documentList, 0);
  };

  $documentList.addEventListener("click", (e) => {
    const $li = e.target.closest("li");
    const { id } = $li.dataset;
    if ($li) {
      if (e.target.className === "document_delete_button") {
        deletePage(id);
      } else if (e.target.className === "showSubListsBtn") {
        //sublists보여주기
      } else if (e.target.className === "document_add_button") {
        //sublist에 추가하기
        addPage(Number(id));
      } else {
        //document list 클릭
        this.setState({ ...this.state, selected: Number(id) });
        console.log(this.state);
        return;
      }
    }
    /*
    if (target.className === "document_delete_button") {
      const documentId = target.closest("li").id;
      if (!documentId) {
        alert("삭제할 수 없는 문서입니다.");
      } else {
        Delete(documentId);
      }
    }

    const $li = target.closest("li");
    if (!$li) {
      return;
    }
    console.log($li);
    */
  });

  this.render();
}
