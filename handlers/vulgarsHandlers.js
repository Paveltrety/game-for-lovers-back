import Vulgars from "../schema/vulgars.js";

export const getAllVulgars = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    const vulgarsCards = await Vulgars.find({})
      .select({ _id: 0, __v: 0 })
      .skip((page - 1) * limit)
      .sort("id")
      .limit(limit);

    const count = await Confides.count();

    res.json({
      data: vulgarsCards,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
