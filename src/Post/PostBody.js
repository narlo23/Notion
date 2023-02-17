export default function PostBody({ $target }) {
  const $postbody = document.createElement("div");
  $postbody.className = "postbody";
  $target.appendChild($postbody);

  $postbody.innerHTML = `
    <h1 class="postbody_title">메인페이지</h1>
    <p class="postbody_body">효진의 Notion에 오신 것을 환영합니다.</p>
    <div class="notion_img_section">
      <img src="/src/assets/Notion-logo.svg.png" alt="notion" class="notion_logo"/>
    </div>

  `;

  this.render = () => {};

  this.render();
}
