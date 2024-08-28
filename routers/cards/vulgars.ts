import { Router, Request, Response } from 'express';
import Vulgars from '../../schema/cards/vulgars';

const router = Router();

router.get('/cards/vulgars', async (req: Request, res: Response) => {
  try {
    const vulgarsCards = await Vulgars.find({})
    .select({ _id: 0, __v: 0 })
    .sort("id")


    res.json({
      data: vulgarsCards,
    });
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при получении данных' });
  }
});

export default router;