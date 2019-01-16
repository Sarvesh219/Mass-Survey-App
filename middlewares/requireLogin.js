module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: "You must log in!" });
  }

  next(); /* next is a function called when middleware has finished running */
};
