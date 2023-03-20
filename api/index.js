import dataBase from "./src/config/db.js";
import serverHttp from "./src/config/server.js";
import dotenv from "dotenv";
// importamos la info de la api
//import apiInfo from "./src/helpers/apiInfo.js"

dotenv.config();
//s
const index = async () => {
  await dataBase.sync({ force: true })
  //   await apiInfo()
  serverHttp.listen(3001, () => {
    console.log('Listening on port 3001')
  })
};

index();