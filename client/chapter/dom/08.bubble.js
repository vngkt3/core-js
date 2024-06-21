/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */

/* 버블링 ----------------------------------------------------------------- */

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

section.addEventListener('click', (e) => {
  // console.log( 'target : ' , e.target );
  // console.log( 'currentTarget : ' ,e.currentTarget );
  // console.log( 'this : ' , this );

  console.log('%c section', 'color:orange');
}); // }뒤에 ,true 만 넣으면 캡쳐링임

article.addEventListener('click', (e) => {
  console.log('%c article', 'color:hotpink');
});

p.addEventListener('click', (e) => {
  console.log('%c p', 'color:dodgerblue');
});

/* 캡처링 ----------------------------------------------------------------- */
