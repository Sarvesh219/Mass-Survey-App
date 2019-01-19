// this module checks whether a user has minimum amount of credits to make a survey.
module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    return res.status(403).send({ error: "Not enough credits!" });
  }

  next(); /* next is a function called when middleware has finished running */
};
