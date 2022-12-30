import Vulgars from "../schema/vulgars";

export const getAllVulgars = async (req: any, res: any) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    const vulgarsCards = await Vulgars.find({})
      .select({ _id: 0, __v: 0 })
      .skip((page - 1) * limit)
      .sort("id")
      .limit(limit);

    const count = await Vulgars.count();

    res.json({
      data: vulgarsCards,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
