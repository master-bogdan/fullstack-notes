import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CopyToClipboard } from 'react-copy-to-clipboard';
// Styles
import {
  Wrapper,
} from './styles';
// Components
import { TextField, Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
// Utils
import { API } from 'utils/api';

const Create: React.FC = () => {
  const { t } = useTranslation();
  const [note, setNote] = useState<string>('');
  const [noteUrl, setNoteUrl] = useState<string | undefined>(undefined);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const createNote = async () => {
    try {
      const { data } = await API.post('/note', { noteText: note });
      console.log(data);
      setNoteUrl(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      {typeof noteUrl !== 'undefined' ? (
        <>
          <Alert
            style={{ width: '100%' }}
            severity="success"
          >
            {noteUrl}
            <CopyToClipboard
              text={noteUrl}
              // onCopy={() => this.setState({copied: true})}
            >
              <Button
                size="small"
                color="secondary"
              >
                Copy to clipboard
              </Button>
            </CopyToClipboard>
          </Alert>
          <Alert
            style={{ width: '100%' }}
            severity="warning"
          >
            Copy URL and send it to friend. Attention! You can view note only one time!
          </Alert>
        </>
      ) : (
        <>
          <TextField
            placeholder="Create note"
            fullWidth
            multiline
            variant="outlined"
            rows={4}
            style={{ marginBottom: '40px' }}
            onChange={changeHandler}
          />
          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={createNote}
          >
            {t('create_btn')}
          </Button>
        </>
      )}
    </Wrapper>
  );
};

export default Create;
