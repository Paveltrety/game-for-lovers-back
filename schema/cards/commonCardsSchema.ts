import { Document } from 'mongoose';

export interface ICommonCardsSchema extends Document {
    id: number;
    text: string;
  }