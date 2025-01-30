const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const convertToRoman = (num) => {
    
    if (num < 1 || num > 3999) return "Out of range";

    // Simple roman numeral map
    const romanMap = [
        { value: 1000, numeral: "M" },
        { value: 900, numeral: "CM" },
        { value: 500, numeral: "D" },
        { value: 400, numeral: "CD" },
        { value: 100, numeral: "C" },
        { value: 90, numeral: "XC" },
        { value: 50, numeral: "L" },
        { value: 40, numeral: "XL" },
        { value: 10, numeral: "X" },
        { value: 9, numeral: "IX" },
        { value: 5, numeral: "V" },
        { value: 4, numeral: "IV" },
        { value: 1, numeral: "I" },
    ];

    // Efficient roman numeral conversion
    let result = "";
    for (const { value, numeral } of romanMap) {
        while (num >= value) {
            result += numeral;
            num -= value;
        }
    }
    return result;
};

app.get("/romannumeral", (req, res) => {
    const query = req.query.query;
    const number = parseInt(query, 10);

    if (isNaN(number)) {
        return res.status(400).json({ error: "Invalid input" });
    }

    const romanNumeral = convertToRoman(number);
    if (romanNumeral.startsWith("Out of range")) {
        return res.status(400).json({ error: romanNumeral });
    }

    res.json({ input: query, output: romanNumeral });
});

if (require.main === module) {
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  }

module.exports = { app, convertToRoman };