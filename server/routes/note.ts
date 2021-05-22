import { Router, Request, Response } from 'express';
import { INoteSchema, NoteModel } from '../models/noteModel';
import { encrypt, decrypt } from '../utils/cryptography';

const note = Router();

note.get('/note', async (req: Request, res: Response) => {
  const { noteId } = req.body;
  try {
    await NoteModel.findById(noteId, (error: string, note: INoteSchema) => {
      if (error) {
        console.log(error);
        return res.status(404).json({ message: 'note exist' });
      }

      note.noteText = decrypt(note.noteText)

      return res.status(201).json({ note });
    })
  } catch (error) {
    console.log(error);
  }
})

note.post('/note', async (req: Request, res: Response) => {
  const { noteText } = req.body;
  
  try {
    const encryptedText = await encrypt(noteText);

    await NoteModel.create({ noteText: encryptedText }, (error, note) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'note not added, please try again' })
      }

      return res.status(201).json({ noteUrl: `${process.env.APP_URL}/${note._id}` })
    });
  } catch (error) {
    console.log(error);
  }
})

export default note;