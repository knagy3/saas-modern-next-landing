import { buildUrl } from 'cloudinary-build-url';
const cloud= {
  cloudName: 'daki'
};
const urlHomeImage1 = buildUrl('projects/home/1_u42oxr', { cloud });

const urlBannerImage1 = buildUrl('projects/project_3/banner_xelhym', { cloud });

import BannerImage2 from 'assets/images/projects/banners/1.jpg';
import BannerImage3 from 'assets/images/projects/banners/2.jpg';

import PostThumb1 from 'assets/images/blog/1.png';
import PostThumb2 from 'assets/images/blog/2.png';
import PostThumb3 from 'assets/images/blog/3.png';
import PostThumb4 from 'assets/images/blog/4.jpg';

import gallery2 from 'assets/images/gallery/2.png';
import gallery3 from 'assets/images/gallery/3.png';
import gallery4 from 'assets/images/gallery/4.png';
import gallery5 from 'assets/images/gallery/5.png';
import gallery6 from 'assets/images/gallery/6.png';


export default [
  {
    id: '0',
    name: 'Creative Market',
    slogan: 'Helping you and your house become better acquinted',
    bannerImg: urlBannerImage1,
    homeImage: urlHomeImage1,
    imgSrc: PostThumb1,
    altText: 'Marketing',
    date: 'April 10, 21',
    client: 'KESZ, Hungary',
    project_type: 'Contruction, Brading',
    location: 'Mountain View CA 94043',
    year: '2021',
  },
  {
    id: '1',
    name: 'Startup Product Sales',
    slogan: 'Creating quality urban lifestyles, building stronger communities',
    bannerImg: BannerImage2,
    homeImage: gallery2,
    imgSrc: PostThumb2,
    altText: 'Marketing',
    date: 'Jan 10, 20',
    client: 'Studio Massimo, Italy',
    project_type: 'Contruction, Spa',
    location: 'Budapest 1149',
    year: '2020',
  },
  {
    id: '2',
    name: 'Monopoly Market',
    slogan: 'Helping you and your house become better acquinted',
    bannerImg: BannerImage3,
    homeImage: gallery3,
    imgSrc: PostThumb3,
    altText: 'Marketing',
    date: 'April 10, 21',
    client: 'KESZ, Hungary',
    project_type: 'Contruction, Brading',
    location: 'Mountain View CA 94043',
    year: '2021',
  },
  {
    id: '3',
    name: 'Creative Market',
    slogan: 'Creating quality urban lifestyles, building stronger communities',
    bannerImg: urlBannerImage1,
    homeImage: gallery4,
    imgSrc: PostThumb4,
    altText: 'Marketing',
    date: 'Jan 10, 20',
    client: 'Studio Massimo, Italy',
    project_type: 'Contruction, Spa',
    location: 'Budapest 1149',
    year: '2020',
  },
  {
    id: '4',
    name: 'Startup Product Sales',
    slogan: 'Helping you and your house become better acquinted',
    bannerImg: BannerImage2,
    homeImage: gallery5,
    imgSrc: PostThumb1,
    altText: 'Marketing',
    date: 'April 10, 21',
    client: 'KESZ, Hungary',
    project_type: 'Contruction, Brading',
    location: 'Mountain View CA 94043',
    year: '2021',
  },
  {
    id: '5',
    name: 'Monopoly Market',
    slogan: 'Creating quality urban lifestyles, building stronger communities',
    bannerImg: BannerImage3,
    homeImage: gallery6,
    imgSrc: PostThumb2,
    altText: 'Marketing',
    date: 'Jan 10, 20',
    client: 'Studio Massimo, Italy',
    project_type: 'Contruction, Spa',
    location: 'Budapest 1149',
    year: '2020',
  },
];
