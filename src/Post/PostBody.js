export default function PostBody({ $target }) {
  const $postbody = document.createElement("div");
  $postbody.className = "postbody";
  $target.appendChild($postbody);

  const editPost = () => {
    $postbody.innerHTML = `
        <input class="title" type="text" placeholder="제목 없음" autofocus/>
        <textarea class="body" placeholder="내용을 입력하세요."></textarea>
      `;
  };

  this.render = () => {
    editPost();
  };

  this.render();
}
