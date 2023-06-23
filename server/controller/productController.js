const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();
const PRODUCT_URL = process.env.GET_PRODUCT_URL;

const getProduct = async (req, res) => {
  try {
    const response = await axios.get(PRODUCT_URL);
    res.status(200).json({ products: response.data });
  } catch (error) {
    console.log("error occure while calling products api: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getProduct,
};
