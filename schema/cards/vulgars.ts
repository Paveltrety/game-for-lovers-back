import { Schema, model } from 'mongoose';
import { ICommonCardsSchema } from './commonCardsSchema';


const vulgarsSchema = new Schema<ICommonCardsSchema>({
  id: { type: Number, required: true },
  text: { type: String, required: true },
});

const Vulgars = model<ICommonCardsSchema>('Vulgars', vulgarsSchema);

export default Vulgars;