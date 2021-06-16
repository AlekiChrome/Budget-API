//Dependencies
const app = require("./app");



require("dotenv").config();
const PORT = process.env.PORT || 3003;




//Listen
app.listen(PORT, () => console.log(`[DEVELOPMENT] Listening on port ${PORT}`));
