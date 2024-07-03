class MyElement extends HTMLElement {
  constructor() {
    super();
    // 엘리먼트가 생성됨
  }

  connectedCallback() {
    // 엘리먼트가 문서에 추가될 때 브라우저가 이 메서드를 호출합니다.
    // (엘리먼트가 반복적으로 추가/제거되면 여러 번 호출될 수 있음)
    console.log('탄생함');
  }

  disconnectedCallback() {
    // 엘리먼트가 문서에서 제거될 때 브라우저가 이 메서드를 호출합니다.
    // (엘리먼트가 반복적으로 추가/제거되면 여러 번 호출될 수 있음)
    console.log('죽음');
  }

  static get observedAttributes() {
    return [
      /* 변경 사항을 모니터링할 속성 이름의 배열 */
    ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // 위에 나열된 속성 중 하나가 수정될 때 호출됩니다.
    // 바로위 static과 연결됨 위에게 변하면 콜백함수가 호출된다
  }

  adoptedCallback() {
    // 엘리먼트가 새 문서로 이동될 때 호출됩니다.
    // (document.adoptNode에서 사용되며 매우 드물게 사용됨)
  }

  // 다른 엘리먼트 메서드와 속성이 있을 수 있습니다.
}

customElements.define('c-element', MyElement);

const elem = document.createElement('c-element');

const app = document.getElementById('app');

app.appendChild(elem);
