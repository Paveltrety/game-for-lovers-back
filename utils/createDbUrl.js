export const createDbUrl = (login, pass) => {
  return `mongodb+srv://${login}:${pass}@cluster0.um2drtc.mongodb.net/game?retryWrites=true&w=majority`;
};
