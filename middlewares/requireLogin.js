/* this module checks whether a user is logged in or not, before allowing a particular route handler to be executed. */
module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: "You must log in!" });
  }

  next(); /* next is a function called when middleware has finished running */
};
