import { buildImageUrl } from 'cloudinary-build-url';

const cloud = {
  cloudName: 'dakiep'
};

import PostThumb4 from 'assets/images/blog/4.jpg';

const gallery1Url = buildImageUrl('sections/gallery/1', { cloud });
const gallery2Url = buildImageUrl('sections/gallery/2', { cloud });
const gallery3Url = buildImageUrl('sections/gallery/3', { cloud });
const gallery4Url = buildImageUrl('sections/gallery/4', { cloud });

const slide1Url = buildImageUrl('projects/proj_1/slide', { cloud });
const slide2Url = buildImageUrl('projects/proj_2/slide', { cloud });
const slide3Url = buildImageUrl('projects/proj_3/slide', { cloud });

const proj1BannerUrl = buildImageUrl('projects/proj_1/banner', { cloud });
const proj2BannerUrl = buildImageUrl('projects/proj_2/banner', { cloud });
const proj3BannerUrl = buildImageUrl('projects/proj_3/banner', { cloud });

export default [
  {
    id: '1',
    name: 'Creative Market',
    slogan: 'Helping you and your house become better acquinted',
    bannerImg: proj1BannerUrl,
    homeImage: gallery1Url,
    imgSrc: slide1Url,
    altText: 'Marketing',
    date: 'April 10, 21',
    client: 'KESZ, Hungary',
    project_type: 'Contruction, Brading',
    location: 'Mountain View CA 94043',
    year: '2021',
  },
  {
    id: '2',
    name: 'Startup Product Sales',
    slogan: 'Creating quality urban lifestyles, building stronger communities',
    bannerImg: proj2BannerUrl,
    homeImage: gallery2Url,
    imgSrc: slide2Url,
    altText: 'Marketing',
    date: 'Jan 10, 20',
    client: 'Studio Massimo, Italy',
    project_type: 'Contruction, Spa',
    location: 'Budapest 1149',
    year: '2020',
  },
  {
    id: '3',
    name: 'Monopoly Market',
    slogan: 'Helping you and your house become better acquinted',
    bannerImg: proj3BannerUrl,
    homeImage: gallery3Url,
    imgSrc: slide3Url,
    altText: 'Marketing',
    date: 'April 10, 21',
    client: 'KESZ, Hungary',
    project_type: 'Contruction, Brading',
    location: 'Mountain View CA 94043',
    year: '2021',
  },
  // {
  //   id: '4',
  //   name: 'Creative Market',
  //   slogan: 'Creating quality urban lifestyles, building stronger communities',
  //   bannerImg: proj1BannerUrl,
  //   homeImage: gallery4Url,
  //   imgSrc: PostThumb4,
  //   altText: 'Marketing',
  //   date: 'Jan 10, 20',
  //   client: 'Studio Massimo, Italy',
  //   project_type: 'Contruction, Spa',
  //   location: 'Budapest 1149',
  //   year: '2020',
  // },
];
