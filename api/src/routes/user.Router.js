import { Router } from "express";
import postUser from "../controllers/postUser.js";
import { getById, getAllUsers, getByEmail, deleteUser, updateUser, googleAcces ,SoloEmailDev} from "../controllers/users.controller.js";
import bodyParser from "body-parser";


const users = Router();

users.use(bodyParser.urlencoded({ extended: true }));

users.get("/", getAllUsers);
users.get("/id/:id", getById);
users.post("/email", getByEmail);
users.post("/soloemail", googleAcces);
users.post("/soloemailpo", SoloEmailDev);
users.post("/postUsers", postUser);
users.delete("/deleteUser", deleteUser);
users.put("/update", updateUser);

export default users;