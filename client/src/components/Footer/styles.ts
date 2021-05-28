import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => createStyles({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  githubIcon: {
    width: '30px',
    height: '30px',
  },
  typography: {
    color: '#fff',
  },
}));
