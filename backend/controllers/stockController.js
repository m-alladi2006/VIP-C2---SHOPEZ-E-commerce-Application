const Stock = require("../models/Stock");

// Create Stock
const createStock = async (req, res) => {

    try {

        const stock = await Stock.create(req.body);

        res.status(201).json(stock);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Get All Stocks
const getStocks = async (req, res) => {

    try {

        const stocks = await Stock.find();

        res.status(200).json(stocks);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Get Single Stock
const getStockById = async (req, res) => {

    try {

        const stock = await Stock.findById(
            req.params.id
        );

        if (!stock) {
            return res.status(404).json({
                message: "Stock not found"
            });
        }

        res.status(200).json(stock);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Update Stock
const updateStock = async (req, res) => {

    try {

        const stock =
            await Stock.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );

        if (!stock) {
            return res.status(404).json({
                message: "Stock not found"
            });
        }

        res.status(200).json(stock);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Delete Stock
const deleteStock = async (req, res) => {

    try {

        const stock =
            await Stock.findByIdAndDelete(
                req.params.id
            );

        if (!stock) {
            return res.status(404).json({
                message: "Stock not found"
            });
        }

        res.status(200).json({
            message: "Stock deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Update Stock Price
const updateStockPrice = async (req, res) => {
    try {
        const { price } = req.body;

        const stock = await Stock.findByIdAndUpdate(
            req.params.id,
            { price },
            { new: true }
        );

        if (!stock) {
            return res.status(404).json({ message: "Stock not found" });
        }

        res.status(200).json(stock);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Exporting all controller functions
module.exports = {
    createStock,
    getStocks,
    getStockById,
    updateStock,
    deleteStock,
    updateStockPrice
};