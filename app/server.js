const express = require("express");
const app = express();
const hostname = '0.0.0.0';
const PORT = 80;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const favourite_tree = [{
    "name": "Neem",
    "scientific_name": "Azadirachta Indica",
    "family": "Mahogany"
}];
app.get("/", (req, res) => {
    try {
    res.status(200).json({
        favourite_tree
    });
    } catch (error) {
    res.status(500).json({
    message: "Failed to retrieve favourite tree",
    });
    }
   });
app.listen(PORT, hostname, () => {
console.log(`Server running on port ${PORT}`);
});