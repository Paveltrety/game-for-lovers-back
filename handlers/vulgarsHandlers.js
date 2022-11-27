import Vulgars from "../schema/vulgars.js";

export const getAllVulgars = async (req, res) => {
  try {
    const vulgarsCards = await Vulgars.find();
    res.json(vulgarsCards);
  } catch (error) {
    res.status(500).json(error);
  }
};
