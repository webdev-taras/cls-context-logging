module.exports = (req, res, next) => {
  res.statusCode = 200
  res.data = 'Hello!'
  next()
}