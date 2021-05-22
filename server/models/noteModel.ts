import mongoose, { Schema, Document } from 'mongoose';

export interface INoteSchema extends Document {
  noteText: string
  createdAt: Date
  updatedAt: Date
}

const NoteSchema = new Schema({
  noteText: { type: String, required: true, trim: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
})

export const NoteModel = mongoose.model<INoteSchema>('Note', NoteSchema);