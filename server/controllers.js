var Rate = require('./models').Rate;
var Cake = require('./models').Cake;

module.exports = {
  getAllCake: (req, res) => {
    Cake.find().then(data => res.json(data)).catch(err => res.json(err))
  },

  getOneCake: (req, res) => {
    const ID = req.params.id;
    Cake.findOne({ _id: ID }).then(data => {
      console.log(' get one!')||
      res.json(data)
    }).catch(err => res.json(err))
  },

  createCake: (req, res) => {
    const DATA = req.body;
    Cake.create(DATA).then(data => res.json(data)).catch(err => res.json(err))
  },

  updateCake: (req, res) => {
    const DATA = req.body;
    const ID = req.params.id;
    Cake.findOneAndUpdate({ _id: ID }, DATA, { runValidators: true, new: true }).then(data => res.json(data)).catch(err => res.json(err))
  },

  deletecake: (req, res) => {
    const ID = req.params.id;
    Cake.findOneAndDelete({ _id: ID }).then(data => res.json(data)).catch(err => releaseEvents.json(err))
  },  

  createRate: (req,res) => {
    const DATA = req.body;
    const ID = req.params.id;
    Rate.create(DATA)
      .then(data => {
        console.log("cake id is "+ID)
        Cake.findOneAndUpdate({ _id: ID }, { $push: { rates: data } })
          .then(data => res.json(data))
          .catch(err => res.json(err))
      })
      .catch(err => res.json(err))
  },
    
}