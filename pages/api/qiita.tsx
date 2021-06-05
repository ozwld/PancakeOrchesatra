export default ({ query: { word: string } }, res) => {
  res.status(200).json({ message: `you requested for ${word} ` });
};
