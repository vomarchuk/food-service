import { addBackToTop } from 'vanilla-back-to-top';
const backToTopOptions = {
  backgroundColor: '#ff9846',
  cornerOffset: 20,
  diameter: 46,
  id: 'back-to-top',
  onClickScrollTo: 0,
  scrollContainer: document.body,
  scrollDuration: 300,
  showWhenScrollTopIs: 100,
  textColor: '#f2f2f2',
  zIndex: 1,
};
(function customBackToTop() {
  addBackToTop(backToTopOptions);
})();
