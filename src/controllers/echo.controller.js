module.exports = (req, res, next) => {
  res.statusCode = 200
  res.data = req.body.message
  next()
}