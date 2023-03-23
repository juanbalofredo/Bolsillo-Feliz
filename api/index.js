import dataBase from "./src/config/db.js";
import serverHttp from "./src/config/server.js";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 3001
// importamos la info de la api
//import apiInfo from "./src/helpers/apiInfo.js"

// dotenv.config();
//s
const index = async () => {
  await dataBase.sync({ force: false })
  //   await apiInfo()
  serverHttp.listen(port, () => {
    console.log(`Listening on port ${port}`)
  })
};

index();
