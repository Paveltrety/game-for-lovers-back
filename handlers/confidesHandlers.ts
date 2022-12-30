import Confides from "../schema/confides";

export const getAllConfides = async (req: any, res: any) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const confidesCards = await Confides.find({})
      .select({ _id: 0, __v: 0 })
      .skip((page - 1) * limit)
      .sort("id")
      .limit(limit);

    const count = await Confides.count();

    res.json({
      data: confidesCards,
      totalPages: Math.ceil(count / limit),
      currentPage: Number(page),
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
