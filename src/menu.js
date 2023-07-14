const flavors = [
  {
    name: 'Citrus Bliss',
    description: 'Experience the vibrant burst of citrus with our orange macaron. Tangy orange-infused shell meets a smooth, refreshing orange cream filling for a delightful treat.',
    image: 'citrus.jpg'
  },
  {
    name: 'Pistachio Dream',
    description: 'A heavenly combination of ground pistachios, folded into the macaron batter, resulting in a subtly nutty and rich flavor. The filling boasts a luscious pistachio ganache for an indulgent experience.',
    image: 'pistachio.jpg'
  },
  {
    name: 'Lemon Lavender Zest', 
    description: 'A delightful marriage of zesty lemon and soothing lavender. The macaron shell is infused with a hint of lavender, and the tangy lemon buttercream center provides a refreshing burst of citrus.',
    image: 'lemon.jpg'
  },
  {
    name: 'Salted Caramel Crunch',
    description: 'A perfect balance of sweet and salty. The macaron shell is studded with caramelized sugar for a satisfying crunch, while the luxurious salted caramel filling adds a delightful creamy finish.',
    image: 'caramel.jpg'
  },
  {
    name: 'Chocolate Mint',
    description: 'A classic combination that never disappoints. The macaron shell is infused with a touch of peppermint, and the decadent chocolate ganache filling brings a rich and refreshing twist to this timeless flavor.',
    image: 'chocolate.jpg'
  }
]

function render() {
  const content = document.getElementById('content');

  const contentContainer = document.createElement('div');
  contentContainer.setAttribute('id', 'content-container-menu');

  const menuHeadline = document.createElement('div');
  menuHeadline.setAttribute('id', 'menu-headline');

  const headline = document.createTextNode('Flavors');

  menuHeadline.appendChild(headline);

  const menuText = document.createElement('div');
  menuText.setAttribute('id', 'menu-text');

  flavors.forEach(function (flavor) {
    const card = document.createElement('div');
    card.setAttribute('class', 'flavor-card');

    const flavorImageContainer = document.createElement('div');
    flavorImageContainer.setAttribute('class', 'flavor-image-container');

    const flavorImage = document.createElement('img');
    flavorImage.setAttribute('src', `./img/${flavor['image']}`)
    flavorImage.setAttribute('class', 'flavor-image')
  
    const flavorName = document.createElement('div');
    flavorName.setAttribute('class', 'flavor-title');
    flavorName.innerText = flavor['name'];
  
    const flavorDescription = document.createElement('div');
    flavorDescription.setAttribute('class', 'flavor-description');
    flavorDescription.innerText = flavor['description'];
  
    flavorImageContainer.appendChild(flavorImage);

    card.appendChild(flavorImageContainer);
    card.appendChild(flavorName);
    card.appendChild(flavorDescription);

    menuText.appendChild(card);
  })

  contentContainer.appendChild(menuHeadline);
  contentContainer.appendChild(menuText);

  content.appendChild(contentContainer);
}

export { render as renderMenu };