import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import {
  InstructionsWrapper,
  InstructionsBlock,
} from './styles';
// Components
import { Typography } from '@material-ui/core';
// Images
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const Instructions: React.FC = () => (
  <InstructionsWrapper>
    <InstructionsBlock>
      <Typography
        variant="h6"
        gutterBottom
      >
        How create encrypted note ?
      </Typography>
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
    <InstructionsBlock>
      <Typography
        variant="h6"
        gutterBottom
      >
        How read encrypted note ?
      </Typography>
      <li>
        <CheckCircleOutlineIcon />
        <span>
          Click on this{' '}
          <Link
            to="/note"
          >
            link
          </Link>
        </span>
      </li>
      <li>
        <CheckCircleOutlineIcon />
        <span>
          Enter link and click Read
        </span>
      </li>
      <li>
        <CheckCircleOutlineIcon />
        <span>
          Copy text after reading, because it will be deleted
        </span>
      </li>
    </InstructionsBlock>
  </InstructionsWrapper>
);

export default Instructions;
