import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
// Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const NavBar: React.FC = () => {
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
    <AppBar position="static">
      <Toolbar>
        {links.map((link) => (
          <NavLink key={link.alias} to={link.route}>
            <Typography variant="h6">
              {link.alias}
            </Typography>
          </NavLink>
        ))}
        <FormControl>
          <Select
            labelId="select-lang"
            id="select-lang"
            value={lang}
            onChange={handleChange}
          >
            <MenuItem value="en">EN</MenuItem>
            <MenuItem value="ru">RU</MenuItem>
            <MenuItem value="uk">UA</MenuItem>
          </Select>
        </FormControl>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
