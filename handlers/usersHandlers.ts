import Users from "../schema/users";

export const postDataUser = async (req: any, res: any) => {
  try {
    const { male, female } = req.body;
    const lastUser = await Users.findOne().sort({ _id: -1 });
    const user = new Users({
      id: lastUser ? lastUser.id + 1 : 1,
      female,
      male,
      date: new Date(),
    });
    await user.save();
    return res.json({ message: "Пользователь успешно зарегистрирован" });
  } catch (error) {
    res.status(500).json(error);
  }
};
