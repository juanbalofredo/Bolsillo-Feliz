import Users from "../models/users.js";
import { getUserById, getUserByEmail, updateUserByTypeAccount, getUserSoloByEmail, getUserSoloByEmailGoogle } from "../helpers/users.helper.js";

export async function getAllUsers(req, res) {
    const allUsers = await Users.findAll()
    if (allUsers.length == 0) return res.status(400).send("There are no users")
    return res.status(200).json(allUsers)
}

export async function getById(req, res) {
    const { id } = req.params;
    try {
        const response = await getUserById(id.toUpperCase());
        if (!response) return res.status(404).send("Not found 404");
        return res.status(200).json(response);
    } catch {
        return res.status(500).json({ err: error.message })
    };
};

export async function getByEmail(req, res) {
    const comparing = req.body;
    try {

        const response = await getUserByEmail(comparing);
        if (!response) return res.status(400).send("this email is not registered");
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({ err: error.message })
    };
};

export async function SoloEmailDev(req, res) {
    const comparing = req.body;
    try {
        const response = await getUserSoloByEmail(comparing);
        if (!response) return res.status(400).send("Error: password wrong");
        return res.status(200).json(response);
    } catch (error) {
        console.log("erorr", error);
        return res.status(400).json({ err: error.message })
    };
};

export async function googleAcces(req, res) {
    const comparing = req.body;

    try {
        const response = await getUserSoloByEmailGoogle(comparing);

        if (!response) return res.status(400).send("Error: password wrong");
        return res.status(200).json(response);
    } catch (error) {
        console.log("erorr", error);
        return res.status(400).json({ err: error.message })
    };
};

export async function deleteUser(req, res) {
    const { id } = req.body;
    try {
        const deleteId = await deleteUserById(id)
        if (deleteId === 0) {
            throw Error("No user found with that ID")
        }
        res.status(200).json("The user has been deleted successfully");
    } catch (error) {
        res.status(500).send({ err: error.message });
    }
};

export async function updateUser(req, res) {
    const dataToUpdate = req.body;

    try {
        let userUpdate = await updateUserByTypeAccount(dataToUpdate)
        res.status(200).json(userUpdate);
    } catch (error) {
        res.status(500).send({ err: error.message });
    }
}