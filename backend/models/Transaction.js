const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    stockId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Stock"
    },

    transactionType:{
        type:String,
        enum:["BUY","SELL"]
    },

    quantity:Number,

    price:Number,

    totalAmount:Number
},
{
    timestamps:true
});

module.exports = mongoose.model("Transaction",transactionSchema);