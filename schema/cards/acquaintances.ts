import { Schema, model } from 'mongoose';
import { ICommonCardsSchema } from './commonCardsSchema';


const acquaintanceSchema = new Schema<ICommonCardsSchema>({
  id: { type: Number, required: true },
  text: { type: String, required: true },
});

const Acquaintance = model<ICommonCardsSchema>('Acquaintance', acquaintanceSchema);

export default Acquaintance;