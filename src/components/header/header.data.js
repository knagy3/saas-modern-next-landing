import useTranslation from "hooks/useTranslation";

const { t } = useTranslation();

export default [
  {
    path: 'home',
    label: t('header', 'h0'),
  },
  {
    path: 'service',
    label: 'Rólunk',
  },
  {
    path: 'gallery',
    label: 'Projektjeink',
  },
  {
    path: 'career',
    label: 'Karrier',
  },
  // {
  //   path: 'faq',
  //   label: 'Q&A',
  // },
  {
    path: 'contact',
    label: 'Kapcsolat',
  },
];
