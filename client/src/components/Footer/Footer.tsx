import React from 'react';
// Components
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  Link,
} from '@material-ui/core';
// Styles
import { useStyles } from './styles';
// Icons
import { ReactComponent as GithubIcon } from 'assets/icons/github-original-wordmark.svg';

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar component="footer" position="fixed" className={classes.appBar}>
      <Toolbar>
        <Grid alignItems="center" justify="center" container>
          <Link href="https://github.com/master-bogdan">
            <Grid alignItems="center" justify="center" container spacing={2}>
              <Grid item>
                <GithubIcon className={classes.githubIcon} />
              </Grid>
              <Grid item>
                <Typography variant="subtitle2" className={classes.typography}>
                  coded by Bogdan Shchavinskyi
                </Typography>
              </Grid>
            </Grid>
          </Link>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
