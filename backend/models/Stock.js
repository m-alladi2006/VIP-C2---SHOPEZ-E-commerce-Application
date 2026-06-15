const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema(
    {
        symbol: {
            type: String,
            required: true,
            unique: true,
            uppercase: true
        },

        companyName: {
            type: String,
            required: true
        },

        currentPrice: {
            type: Number,
            required: true
        },

        openPrice: {
            type: Number,
            default: 0
        },

        highPrice: {
            type: Number,
            default: 0
        },

        lowPrice: {
            type: Number,
            default: 0
        },

        volume: {
            type: Number,
            default: 0
        },

        historicalData: [
            {
                date: Date,

                open: Number,

                high: Number,

                low: Number,

                close: Number,

                volume: Number
            }
        ]
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model(
    "Stock",
    stockSchema
);