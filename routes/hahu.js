var express = require('express');
var router = express.Router();

var Hirdetes = require('../models/hirdetes');
const kategoria = require('../models/kategoria');

router.post('/', function(req, res, next) {
  const _id = req.body._id;
  const kategoria = req.body.kategoria;
  const cim = req.body.cim;
  const leiras = req.body.leiras;
  const hirdetesDatuma = req.body.hirdetesDatuma;
  const serulesmentes = req.body.serulesmentes;
  const arFt = req.body.arFt;
  const kepUrl = req.body.kepUrl;

  const hirdetes = new Hirdetes({_id, kategoria, cim, leiras, hirdetesDatuma, serulesmentes, arFt, kepUrl});
  if(hirdetes.arFt % 1000 != 0) {
    res.send({"error": "arFt: Az ár nem osztható 1000-el!"});
    return;
  }

  hirdetes.save().then(response => {
    res.send({"message": "A rekord rögzítése sikeres!"});
  }).catch(error => {
    res.status(400);
    res.send({"error": "Hiba a rögzítés folyamán."});
  })
});

router.get('/:mezo', (req,res,next) => {
  const mezo = req.params.mezo;
  Hirdetes.find({}, {__v: 0}, {sort: {[mezo]: 1}}).populate('kategoria', {_id : 0}).then(response => {
    res.send(response);
  })
})


router.delete('/:id', (req,res,next) => {
  const _id = req.params.id;
  Hirdetes.findByIdAndRemove({_id}).then(response => {
    if(response) {
      res.send({"message": "A hirdetés " + _id + " azonosítóval törölve!"});
    } else {
      res.send({"error": "A hirdetés " + _id + " azonosítóval nem létezik!"})
    }
  }).catch(() => {
    res.send({"error": "Váratlan hiba!"})
  })
})

module.exports = router;
