function render() {
  const content = document.getElementById('content');

  content.innerHTML = '';

  const contentContainer = document.createElement('div');
  contentContainer.setAttribute('id', 'content-container');

  const contactHeadline = document.createElement('div');
  contactHeadline.setAttribute('id', 'contact-headline');

  const headline = document.createTextNode('Contact Us');

  const contactText = document.createElement('div');
  contactText.setAttribute('id', 'contact-text');

  const phoneLabel = document.createElement('span');
  phoneLabel.setAttribute('class', 'label');
  phoneLabel.innerText = 'Phone: ';

  const phone = document.createElement('p');
  phone.setAttribute('class', 'contact-info');
  phone.innerText = '555-555-5555';

  const emailLabel = document.createElement('span');
  emailLabel.setAttribute('class', 'label');
  emailLabel.innerText = 'Email: ';

  const email = document.createElement('p');
  email.setAttribute('class', 'contact-info');
  email.innerText = 'hello@leemacaronmagnifique.com';

  const addressLabel = document.createElement('span');
  addressLabel.setAttribute('class', 'label');
  addressLabel.innerText = 'Address: ';

  const address = document.createElement('p');
  email.setAttribute('class', 'contact-info');
  address.innerText = '555 Main Street, Anytown, USA';

  contactHeadline.appendChild(headline);

  contactText.appendChild(phoneLabel);
  contactText.appendChild(phone);
  contactText.appendChild(emailLabel);
  contactText.appendChild(email);
  contactText.appendChild(addressLabel);
  contactText.appendChild(address);  

  contentContainer.appendChild(contactHeadline);
  contentContainer.appendChild(contactText);

  content.appendChild(contentContainer);
}

export { render as renderContact };