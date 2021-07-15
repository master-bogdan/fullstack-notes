import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
// Styles
import {
  Wrapper,
} from './styles';
// Components
import { TextField, Button, Box } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
// Utils
import { API } from 'utils/api';

interface INote {
  createdAt: string;
  noteText: string;
  updatedAt: string;
}

const Note: React.FC = () => {
  const { id } = useParams<{id: string}>();
  const { t } = useTranslation();
  const [noteUrl, setNoteUrl] = useState<string>('');
  const [note, setNote] = useState<INote | null>(null);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNoteUrl(event.target.value);
  };

  const readNoteFromUrl = async () => {
    try {
      const { data }: {data: INote} = await API.get(`/note/${id}`);
      setNote(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const readNoteFromInput = async () => {
    try {
      const noteId = noteUrl.split('/');
      const { data }: {data: INote} = await API.get(`/note/${noteId[noteId.length - 1]}`);
      setNote(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (typeof id !== 'undefined') {
      readNoteFromUrl();
    }
  }, [id]);

  if (note) {
    return (
      <Wrapper>
        <Alert
          style={{ width: '100%' }}
          severity="info"
          variant="filled"
        >
          <p>
            {note.noteText}
          </p>
        </Alert>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <TextField
        placeholder="Enter note URL"
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
        onClick={readNoteFromInput}
      >
        {t('read_btn')}
      </Button>
    </Wrapper>
  );
};

export default Note;
