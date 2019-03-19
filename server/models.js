const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cakedb', { useNewUrlParser: true })
    .catch(err => console.log(err));

const RateSchema = new mongoose.Schema({
    star:{type:Number,required:true},
    comment:{type:String,default:""}
}, { versionKey: false }, { timestamps: true });

const CakeSchema = new mongoose.Schema({
    baker: { type: String, required: true },
    url: { type: String, required: true },
    rates:[RateSchema]
}, { versionKey: false }, { timestamps: true });

var Rate = mongoose.model('Rate',RateSchema);
var Cake = mongoose.model("Cake",CakeSchema);

module.exports ={Rate:Rate,Cake:Cake};