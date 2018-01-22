const Promise = require('bluebird');

const db = require('./server/db');
const { Sites, Photos } = require('./server/db/models');

const sites = [
    {name: 'Charging Bull and Fearless Girl', description: 'Two Statues', latitude: 40.705591, longitude: -74.013427},
    {name: 'Melbourne', description: 'In Australia', latitude: -37.8136, longitude: 144.9631},
    {name: 'Greenwood Cemetary', description: 'dead people', latitude: 40.658976, longitude: -73.995607},
    {name: 'Charging Bull and Fearless Girl', description: 'Two Statues', latitude: 40.705591, longitude: -74.013427},
    {name: 'Alexander Hamilton U.S. Custom House', description: 'The Alexander Hamilton U.S. Custom House is a building in New York City built in 1902–07 by the federal government to house the duty collection operations for the Port of New York. It is located at 1 Bowling Green, near the southern tip of Manhattan, roughly on the same spot as Fort Amsterdam, the original center of the settlement of New Amsterdam, and Government House, the mansion built as an official residence for the President of the United States, but which was never occupied. The Custom House was named to commemorate Alexander Hamilton, one of the Founding Fathers of the United States and its first Secretary of the Treasury.', latitude: 40.704294, longitude: -74.013773},
    {name: 'Trinity Church', description: 'Trinity Church is a historic, well-endowed[4] parish church in the Episcopal Diocese of New York. It is located near the intersection of Wall Street and Broadway in the lower Manhattan section of New York City, New York. The Trinity Church has been significant to New York City’s history for over 300 years. In 1696, Governor Benjamin Fletcher approved the purchase of land in Lower Manhattan by the Church of England community for construction of a new church. The parish received its charter from King William III on May 6, 1697. Its land grant specified an annual rent of 60 bushels of wheat.[5] The first rector was William Vesey (for whom nearby Vesey Street is named), a protege of Increase Mather, who served for 49 years until his death in 1746.Trinity, a traditional High church, is an active parish centered around the Episcopal Church and the worldwide Anglican Communion in missionary, outreach, and fellowship.', latitude: 40.708056, longitude: -74.012222},
    {name: 'Fullstack test 1', description: 'test 1!', latitude: 40.705284, longitude: -74.00905},
    {name: 'Prospect Park', description: 'The original impetus to build Prospect Park stemmed from an April 18, 1859 act of the New York State Legislature, empowering a twelve-member commission to recommend sites for parks in the City of Brooklyn. This was due to Brooklyn becoming the world\'s first commuter suburb, which eventually became the third largest city in the country after New York and Philadelphia. During this time, concepts concerning public parks gained popularity. In 1858 Frederick Law Olmsted and Calvert Vaux created Central Park in Manhattan. It became the first landscaped park in the United States. James Stranahan believed that a park in Brooklyn "would become a favorite resort for all classes of our community, enabling thousands to enjoy pure air, with healthful exercise, at all seasons of the year..." He also believed that a public park would attract wealthy residents.', latitude: 40.652573, longitude: -73.9727117},
    {name: 'Bedford Stuyvesant Three Mile House', description: 'From City Hall Brooklyn use to have mile houses.  This is the Three mile house that was located on Fulton Street between New York Ave and Brooklyn Ave where Restoration stands today.  This building was built before 1856.', latitude: 40.680155, longitude: -73.945309},
    {name: 'Home', description: 'Home sweet home', latitude: 40.653126, longitude: -73.9755}
];

const photos = [
  {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Alexander_Hamilton_U-S_Custom_House_001-002_combined.JPG/1920px-Alexander_Hamilton_U-S_Custom_House_001-002_combined.JPG', SiteId: 4},
  {url: 'https://news.artnet.com/app/news-upload/2014/12/arturo-di-modica-charging-bull-e1418745625614.jpg', SiteId: 1},
  {url: 'http://www.slate.com/content/dam/slate/blogs/xx_factor/2017/03/07/170307_DX_Wall-Street-Bull-Girl.jpg.CROP.promo-xlarge2.jpg', SiteId: 1},
  {url: 'http://image.minyanville.com/assets/FCK_Jan2011/Image/Lila/bullunderwear.jpg', SiteId: 1},
  {url: 'https://en.wikipedia.org/wiki/Alexander_Hamilton_U.S._Custom_House#/media/File:US_Customs_House_New_York_of_to-day._(1912)_(14782617492).jpg', SiteId: 4},
  {url: 'https://i.ytimg.com/vi/7INAXiLfLiw/maxresdefault.jpg', SiteId: 5},
  {url: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Trinity_Church_Bird%27s_Eye_View_New_York_City_1846.jpg', SiteId: 5},
  {url: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Trinity_church_cemetery.jpg', SiteId: 5},
  {url: 'http://2.bp.blogspot.com/-ht8i9wvTNRc/UMN9UCxfbwI/AAAAAAAAAhA/fHDnYxROMrQ/s1600/3MileHousefultonbtwbkandny1909.jpeg', SiteId: 8},
  {url: 'http://cdn.brownstoner.com/wp-content/uploads/2015/05/3-Mile-House-BE-1894-1.jpg', SiteId: 8},
  {url: 'http://assets.nydailynews.com/polopoly_fs/1.1786597.1399674043!/img/httpImage/image.jpg_gen/derivatives/article_750/mohawk11k-1-web.jpg', SiteId: 10},
  {url: 'http://media.halstead.com/pictures/2352284-1_d.jpg', SiteId: 10},
  {url: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/39000/39723/prospectpark_ali_2001255.jpg', SiteId: 9},
  {url: 'https://media.nbcnewyork.com/images/652*367/prospect+park.jpg', SiteId: 9}
];

function addSites(sites){
  sites.forEach((site) => Sites.create(site));
}

function addPhotos(photos){
  photos.forEach((photo) => Photos.create(photo));
}

function seed (sites, photos) {
  return Promise.all([addSites(sites), addPhotos(photos)]);
};

console.log('Syncing database');

db.sync({force: true})
  .then(() => {
    console.log('Seeding database');
    return seed(sites, photos);
  })
  .then(() => console.log('Seeding successful'))
  .catch(err => {
    console.error('Error while seeding');
    console.error(err.stack);
  })
  .finally(() => {
    db.close();
    return null;
  });
