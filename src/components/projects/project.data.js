import { buildImageUrl } from 'cloudinary-build-url';

const cloud = {
  cloudName: 'dakiep',
};
const transformations = {
  quality: '50',
};
const transformations30 = {
  quality: '30',
};

const gallery1Url = buildImageUrl('sections/gallery/1', { cloud, transformations: transformations30 });
const gallery2Url = buildImageUrl('sections/gallery/2', { cloud, transformations });
const gallery3Url = buildImageUrl('sections/gallery/3', { cloud, transformations });

// const slide1Url = buildImageUrl('projects/proj_1/slide', { cloud });
// const slide2Url = buildImageUrl('projects/proj_2/slide', { cloud });
// const slide3Url = buildImageUrl('projects/proj_3/slide', { cloud });

const proj1BannerUrl = buildImageUrl('projects/proj_1/banner-img', { cloud, transformations: transformations30 });
const proj2BannerUrl = buildImageUrl('projects/proj_2/banner-img', { cloud, transformations: transformations30 });
const proj3BannerUrl = buildImageUrl('projects/proj_3/banner-img', { cloud, transformations: transformations30 });

export default [
  {
    id: '1',
    bannerImg: proj1BannerUrl,
    homeImage: gallery1Url,
    imgSrc: gallery1Url,
    altText: 'Marketing',
    date: 'April 10, 2020',
    client: 'Nestlé ',
    location: 'Bük ',
    year: '2020',
  },
  {
    id: '2',
    bannerImg: proj2BannerUrl,
    homeImage: gallery2Url,
    imgSrc: gallery2Url,
    altText: 'Marketing',
    date: 'Jan 10, 2021',
    client: 'Zalaegerszeg Önkormányzata',
    location: 'Zalaegerszeg',
    year: '2021',
  },
  {
    id: '3',
    bannerImg: proj3BannerUrl,
    homeImage: gallery3Url,
    imgSrc: gallery3Url,
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
