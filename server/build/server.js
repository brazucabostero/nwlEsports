import express from 'express';
const app = express();
app.get("/usuarios", (request, response) => {
    return response.json([
        { id: 1, name: "Matheus" },
        { id: 2, name: "Leticia" },
        { id: 3, name: "Amora" },
        { id: 4, name: "Rodrigo" }
    ]);
});
app.listen(3334);
