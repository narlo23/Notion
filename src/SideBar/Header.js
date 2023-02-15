export default function Header({ $target, initialState }) {
  const $header = document.createElement("div");
  $header.className = "sidebar_Header";
  $target.appendChild($header);

  this.state = initialState;

  this.render = () => {
    $header.innerHTML = `
            <p>${this.state.userName}</p>
        `;
  };

  this.render();
}
