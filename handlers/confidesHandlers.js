import Confides from "../Schema/confides.js";

export const getAllConfides = async (req, res) => {
  try {
    const confidesCards = await Confides.find();
    res.json(confidesCards);
  } catch (error) {
    res.status(500).json(error);
  }
};
