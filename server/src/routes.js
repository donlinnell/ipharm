module.exports = (app) => {
  app.get('/status', (req, res) => {
    res.send({
      message: 'hello world'
    })
  })
}
