function render() {
  const content = document.getElementById('content');

  content.innerHTML = '';

  const contentContainer = document.createElement('div');
  contentContainer.setAttribute('id', 'content-container');

  const mainHeadline = document.createElement('div');
  mainHeadline.setAttribute('id', 'main-headline');

  mainHeadline.innerHTML = '<p>Le Macaron Magnifique</p>'

  // const headline = document.createTextNode('Le Macaron Magnifique');

  const mainText = document.createElement('div');
  mainText.setAttribute('id', 'main-text');

  mainText.innerHTML = '<p>Indulge in Parisian perfection at our bakery, where every bite is a journey of bliss. From classic raspberry to innovative lavender-infused macarons, experience a symphony of flavors and colors. Elevate your dessert game with our heavenly treats and discover the artistry of macarons at Le Macaron Magnifique.</p>';

  // const text = document.createTextNode('Indulge in Parisian perfection at our bakery, where every bite is a journey of bliss. From classic raspberry to innovative lavender-infused macarons, experience a symphony of flavors and colors. Elevate your dessert game with our heavenly treats and discover the artistry of macarons at Le Macaron Magnifique.')

  // mainHeadline.appendChild(headline);

  // mainText.appendChild(text);

  contentContainer.appendChild(mainHeadline);
  contentContainer.appendChild(mainText);

  content.appendChild(contentContainer);
}

export { render as renderHome };