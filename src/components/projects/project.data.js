import { buildImageUrl } from 'cloudinary-build-url';

const cloud = {
  cloudName: 'dakiep'
};

const gallery1Url = buildImageUrl('sections/gallery/1', { cloud });
const gallery2Url = buildImageUrl('sections/gallery/2', { cloud });
const gallery3Url = buildImageUrl('sections/gallery/3', { cloud });

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
    bannerImg: proj1BannerUrl,
    homeImage: gallery1Url,
    imgSrc: slide1Url,
    altText: 'Marketing',
    date: 'April 10, 2020',
    client: 'Nestlé ',
    location: 'Bük ',
    year: '2020',
  },
  {
    id: '2',
    name: 'Startup Product Sales',
    bannerImg: proj2BannerUrl,
    homeImage: gallery2Url,
    imgSrc: slide2Url,
    altText: 'Marketing',
    date: 'Jan 10, 2021',
    client: 'Zalaegerszeg Önkormányzata',
    location: 'Zalaegerszeg',
    year: '2021',
  },
  {
    id: '3',
    name: 'Monopoly Market',
    bannerImg: proj3BannerUrl,
    homeImage: gallery3Url,
    imgSrc: slide3Url,
    altText: 'Marketing',
    date: 'April 10, 2021',
    client: 'SAMSUNG SDI',
    location: 'Göd ',
    year: '2021',
  },
  // {
  //   id: '4',
  //   name: 'Creative Market',
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
