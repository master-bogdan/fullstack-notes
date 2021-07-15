import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
// Styles
import {
  Wrapper,
  BtnBlock,
} from './styles';
// Components
import { Typography, Button } from '@material-ui/core';
import Instructions from 'components/Instructions';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <BtnBlock>
        <Link to="/create">
          <Button
            variant="outlined"
            color="primary"
            size="large"
          >
            {t('create_btn')}
          </Button>
        </Link>
        <Link to="/note">
          <Button
            variant="outlined"
            color="primary"
            size="large"
          >
            {t('read_btn')}
          </Button>
        </Link>
      </BtnBlock>
      <Typography
        variant="h4"
        component="h1"
        align="center"
        gutterBottom
      >
        {t('title')}
      </Typography>
      <Typography
        variant="body1"
        align="center"
      >
        Create note, send note link to your friend and your friend can view it.
        After viewing, the note will be deleted (or after 15 minutes after note creation).
      </Typography>
      <Instructions />
    </Wrapper>
  );
};

export default Home;
