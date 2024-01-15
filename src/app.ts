import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

//parser
app.use(express.json());
app.use(cors());

//api's
app.get("/", (req, res) => {
    res.send("NSHL!");
});

export default app;
