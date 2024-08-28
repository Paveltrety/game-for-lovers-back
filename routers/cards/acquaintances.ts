import { Router, Request, Response } from 'express';
import Acquaintance from '../../schema/cards/acquaintances';

const router = Router();

router.get('/cards/acquaintances', async (_req: Request, res: Response) => {
  try {

    const acquaintanceCards = await Acquaintance.find({})
      .select({ _id: 0, __v: 0 })
      .sort("id")

    res.json({
      data: acquaintanceCards,
    });
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при получении данных' });
  }
});

export default router;