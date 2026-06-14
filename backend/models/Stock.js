const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
    symbol:{
        type:String,
        required:true,
        unique:true
    },

    companyName:{
        type:String,
        required:true
    },

    currentPrice:{
        type:Number,
        required:true
    },

    openPrice:Number,
    highPrice:Number,
    lowPrice:Number,
    volume:Number
},
{
    timestamps:true
});

module.exports = mongoose.model("Stock",stockSchema);

