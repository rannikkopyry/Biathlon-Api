"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
const axios_1 = tslib_1.__importDefault(require("axios"));
require('dotenv').config();
const url_news = process.env.URL_NEWS;
const url_events = process.env.URL_EVENTS;
app.get("/", function (req, res) {
    res.json("This is the Biathlon24 API");
});
app.get("/news", (req, res) => {
    axios_1.default.get(url_news)
        .then(function (response) {
        res.json(JSON.stringify(response.data));
    })
        .catch(function (error) {
        console.log(error);
    });
});
app.get("/events", (req, res) => {
    axios_1.default.get(url_events)
        .then(function (response) {
        res.json(JSON.stringify(response.data));
    })
        .catch(function (error) {
        console.log(error);
    });
});
app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
//# sourceMappingURL=index.js.map