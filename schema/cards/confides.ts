import { Schema, model } from 'mongoose';
import { ICommonCardsSchema } from './commonCardsSchema';


const confidesSchema = new Schema<ICommonCardsSchema>({
  id: { type: Number, required: true },
  text: { type: String, required: true },
});

const Confides = model<ICommonCardsSchema>('Confides', confidesSchema);

export default Confides;