export default function DocumentList({ $target, initialState, onClick }) {
  const $documentList = document.createElement("div");
  $documentList.className = "documentList";
  $target.appendChild($documentList);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = { ...this.state, nextState };
    this.render();
  };

  const showDocumentList = (documents) => {
    $documentList.innerHTML = `
        ${documents
          .map(
            (document) =>
              `
          <li class="document_li">
            <svg viewBox="0 0 15 15" class="chevronDownRoundedThick">
              <path d="M6.02734 8.80274C6.27148 8.80274 6.47168 8.71484 6.66211 8.51465L10.2803 4.82324C10.4268 4.67676 10.5 4.49609 10.5 4.28125C10.5 3.85156 10.1484 3.5 9.72363 3.5C9.50879 3.5 9.30859 3.58789 9.15234 3.74902L6.03223 6.9668L2.90722 3.74902C2.74609 3.58789 2.55078 3.5 2.33105 3.5C1.90137 3.5 1.55469 3.85156 1.55469 4.28125C1.55469 4.49609 1.62793 4.67676 1.77441 4.82324L5.39258 8.51465C5.58789 8.71973 5.78808 8.80274 6.02734 8.80274Z" />
            </svg>
            <p class="document_name">${document}</p>
            <button class="document_add_button" type="button">
              +
            </button>
          </li>
          `
          )
          .join("")}
    `;
  };

  this.render = () => {
    showDocumentList(this.state.documents);
  };
  this.render();
}
