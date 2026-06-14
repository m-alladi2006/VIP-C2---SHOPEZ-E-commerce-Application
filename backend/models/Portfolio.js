const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    cashBalance:{
        type:Number,
        default:100000
    },

    investedAmount:{
        type:Number,
        default:0
    }
},
{
    timestamps:true
});

module.exports = mongoose.model("Portfolio",portfolioSchema);