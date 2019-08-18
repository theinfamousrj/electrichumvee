/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.storeData = (req, res) => {
  console.dir(req.body);
  let message = req.query.message || req.body.message || "Data stored.";
  res.status(200).send(req.body);
};
