import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
// Styles
import {
  Wrapper,
  BtnBlock,
  InstructionsBlock,
} from './styles';
// Components
import { Typography, Button } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();

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
        style={{ marginBottom: '40px' }}
      >
        Create note, send note link to your friend and your friend can view it.
        After viewing, the note will be deleted (or after 15 minutes after note creation).
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
      >
        How create encrypted note ?
      </Typography>
      <InstructionsBlock>
        <li>
          <CheckCircleOutlineIcon />
          <span>
            Click on this{' '}
            <Link
              to="/create"
            >
              link
            </Link>
          </span>
        </li>
        <li>
          <CheckCircleOutlineIcon />
          <span>
            Enter text and click Create
          </span>
        </li>
        <li>
          <CheckCircleOutlineIcon />
          <span>
            Copy link after creating and send it to your friend
          </span>
        </li>
      </InstructionsBlock>
      <Typography
        variant="h6"
        gutterBottom
      >
        How read encrypted note ?
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
      >
        Open received link or paste in browser address
      </Typography>
    </Wrapper>
  );
};

export default Home;
