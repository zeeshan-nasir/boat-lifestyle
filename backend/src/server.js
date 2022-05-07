// Creating express server on port 5000

const app = require("./index");
const connect = require("./configs/db");
require("dotenv").config();

app.listen(process.env.PORT || 5000, async () => {
   try {
      await connect();
      console.log("Connection established on port 5000!");
   } catch (err) {
      console.log("Error connecting!", err);
   }
});
