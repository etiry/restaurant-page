function render() {
  const footer = document.getElementById('footer');

  const footerContainer = document.createElement('div');
  footerContainer.setAttribute('id', 'footer-container');
  footerContainer.innerHTML = 'Macaron icon by Dicky Prayudawanto from <a href="https://thenounproject.com/browse/icons/term/macaron/" target="_blank" title="Macaron Icons">Noun Project</a> (CC BY 3.0) | Background photo by <a href="https://unsplash.com/pt-br/@sickhews?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Wes Hicks</a> on <a href="https://unsplash.com/photos/r0DusB-OgRM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> | Macaron photos by <a href="https://unsplash.com/@erol?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Erol Ahmed</a> on <a href="https://unsplash.com/photos/q9Vt4pVnGzc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';

  footer.appendChild(footerContainer);
}

export { render as renderFooter };