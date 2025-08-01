const express = require("express");
const app = express();
app.use(express.json());

app.post("/api/tuya/create-password", (req, res) => {
    console.log("Criando senha na Tuya:", req.body);
    res.status(200).json({ success: true, message: "Senha criada (simulada)." });
});

app.delete("/api/tuya/delete-password", (req, res) => {
    console.log("Deletando senha na Tuya:", req.body);
    res.status(200).json({ success: true, message: "Senha deletada (simulada)." });
});

app.listen(3000, () => {
    console.log("API Tuya rodando na porta 3000");
});
