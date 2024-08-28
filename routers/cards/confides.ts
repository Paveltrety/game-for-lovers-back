import { Router, Request, Response } from 'express';
import Confides from '../../schema/cards/confides';

const router = Router();

router.get('/cards/confides', async (req: Request, res: Response) => {
  try {
    const confidesCards = await Confides.find({})
      .select({ _id: 0, __v: 0 })
      .sort("id")

    res.json({
      data: confidesCards,

    });
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при получении данных' });
  }
});

export default router;