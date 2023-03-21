import { Router } from "express";
// import postUser from "../controllers/postUser.js";
// import { getById, getAllUsers, getByEmail, deleteUser, updateUser, googleAcces } from "../controllers/users.controller.js";
import { getPerfiles } from "../controllers/perfiles.controllers.js"
import bodyParser from "body-parser";


const users = Router();

users.use(bodyParser.urlencoded({ extended: true }));

users.get("/", getPerfiles);

export default users;