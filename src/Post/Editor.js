import Breadcrumb from "./Breadcrumb.js";
export default function Editor({ $target }) {
  const $editor = document.createElement("div");
  $editor.className = "editor";

  const editPost = () => {
    $editor.innerHTML = `
          <input class="editor_title" type="text" placeholder="제목 없음" autofocus/>
          <div class="editor_body" contenteditable="true" placeholder="내용을 입력해주세요."></div>
        `;
  };

  this.render = () => {
    $target.appendChild($editor);
    editPost();
  };

  this.render();
}

