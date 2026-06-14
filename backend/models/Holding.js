const mongoose = require("mongoose");

const holdingSchema = new mongoose.Schema({

    portfolioId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Portfolio"
    },

    stockId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Stock"
    },

    quantity:Number,

    averagePrice:Number
},
{
    timestamps:true
});

module.exports = mongoose.model("Holding",holdingSchema);