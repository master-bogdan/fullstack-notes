import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
// Components
import {
  AppBar,
  Toolbar,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from '@material-ui/core';
import { useStyles } from './styles';
// Icons
import { ReactComponent as EnIcon } from 'assets/icons/en.svg';
import { ReactComponent as RuIcon } from 'assets/icons/ru.svg';
import { ReactComponent as UaIcon } from 'assets/icons/uk.svg';

const NavBar: React.FC = () => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState('en');
  const [links, setLinks] = useState<{alias: string, route: string}[]>([]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLang(event.target.value as string);
    i18n.changeLanguage(event.target.value as string);
  };

  useEffect(() => {
    setLinks(t('links', { returnObjects: true }));
  }, [t]);

  return (
    <AppBar position="sticky">
      <Toolbar>
        {links.map((link) => (
          <NavLink exact key={link.alias} to={link.route}>
            <Typography variant="h6">
              {link.alias}
            </Typography>
          </NavLink>
        ))}
        <FormControl className={classes.formControl}>
          <Select
            className={classes.select}
            labelId="select-lang"
            id="select-lang"
            value={lang}
            onChange={handleChange}
            disableUnderline
          >
            <MenuItem className={classes.menuItem} value="en">
              <EnIcon />
              <span>EN</span>
            </MenuItem>
            <MenuItem className={classes.menuItem} value="ru">
              <RuIcon />
              <span>RU</span>
            </MenuItem>
            <MenuItem className={classes.menuItem} value="uk">
              <UaIcon />
              <span>UA</span>
            </MenuItem>
          </Select>
        </FormControl>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
