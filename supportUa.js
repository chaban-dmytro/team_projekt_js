const supportList = document.querySelector( '.js-supportList' );

const organizationList = [
  {
    title: 'Save the Children',
    url:
      'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: 'images/support/Save-children.png',
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: 'images/support/Hope.png',
  },
   {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: 'images/support/International-Medical.png',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: 'images/support/Razom.png',
  },
    {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: 'images/support/Action-against.png',
  },
    {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: 'images/support/Prytula.png',
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: 'images/support/United.png',
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: 'images/support/Sans.png',
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: 'images/support/World-vision.png',
  },
];


supportList.insertAdjacentHTML( 'beforeend', createMarkup( organizationList ) );

function createMarkup( array ) {
  return array.map( ( { title, img, url }, index ) =>
  `<li class="home__support-item">
    <span>${String(index + 1).padStart(2, '0')}</span>
    <a class="home__support-link" href="${url}">
      <img class="home__support-img" src="${img}" alt="${title}" />
    </a>
  </li>`).join( '' );
}

