import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => createStyles({
  formControl: {
    marginLeft: 'auto',
  },
  select: {
    color: '#fff',
    display: 'flex',
    alignItems: 'center',

    '& .MuiInputBase-input': {
      display: 'flex',
      alignItems: 'center',
      padding: '6px 25px 6px 10px',
      '& svg': {
        marginRight: '5px',
      },
    },
    '& .MuiSelect-icon': {
      color: '#fff',
    },
  },
  menuItem: {
    '&.MuiListItem-root': {
      paddingLeft: '14px',
      paddingRight: '14px',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    '&.MuiMenuItem-root': {
      fontSize: '0.8rem',
    },
  },
}));
