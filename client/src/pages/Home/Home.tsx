import React from 'react';
import { useTranslation } from 'react-i18next';
// Components
import { Typography } from '@material-ui/core';

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <Typography variant="h3" component="h1">
        {t('title')}
      </Typography>
    </div>
  );
};

export default Home;
