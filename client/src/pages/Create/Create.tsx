import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CopyToClipboard } from 'react-copy-to-clipboard';
// Styles
import {
  Wrapper,
  StyledSuccessAlert,
  NoteUrl,
  CopiedMessage,
} from './styles';
// Components
import { TextField, Button, Box } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
// Utils
import { API } from 'utils/api';
// Icons
import FileCopyIcon from '@material-ui/icons/FileCopy';

const Create: React.FC = () => {
  const { t } = useTranslation();
  const [note, setNote] = useState<string>('');
  const [noteUrl, setNoteUrl] = useState<string | undefined>(undefined);
  const [copied, setCopied] = useState<boolean>(false);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const createNote = async () => {
    try {
      const { data } = await API.post('/note', { noteText: note });
      setNoteUrl(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (typeof noteUrl !== 'undefined') {
    return (
      <Wrapper>
        <StyledSuccessAlert
          variant="filled"
          severity="info"
        >
          <NoteUrl>
            {noteUrl}
          </NoteUrl>
          <CopyToClipboard
            text={noteUrl}
            onCopy={() => setCopied(true)}
          >
            {copied ? (
              <CopiedMessage>
                Url Copied
              </CopiedMessage>
            ) : (
              <Button
                color="secondary"
                variant="contained"
              >
                Copy link
                <FileCopyIcon
                  fontSize="small"
                  style={{ marginLeft: '5px' }}
                />
              </Button>
            )}
          </CopyToClipboard>
        </StyledSuccessAlert>
        <Alert
          style={{ width: '100%' }}
          severity="warning"
          variant="filled"
        >
          Copy URL and send it to friend. Attention! You can view note only one time!
        </Alert>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <TextField
        placeholder="Create note"
        fullWidth
        multiline
        variant="outlined"
        rows={4}
        onChange={changeHandler}
      />
      <Box m={4} />
      <Button
        variant="outlined"
        color="primary"
        size="large"
        onClick={createNote}
      >
        {t('create_btn')}
      </Button>
    </Wrapper>
  );
};

export default Create;
