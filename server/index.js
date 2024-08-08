const { app } = require("./app");

const PORT = process.env.PORT || 1500;

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
});
