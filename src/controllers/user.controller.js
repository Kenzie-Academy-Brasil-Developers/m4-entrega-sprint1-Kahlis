import createUserService from "../services/users/createUser.service";
import users from "../database";
import retrieveUserService from "../services/users/retrieveUser.service";
import updateUserService from "../services/users/updateUser.service";
import listUserService from "../services/users/listUser.service";
import deleteUserService from "../services/users/deleteUser.service";

const createUserController = async (req, res) => {
    const user = req.body;

    if (users.find((elem) => user.email.toLowerCase() === elem.email)) {
        return res.status(400).json({
            message: "Email já cadastrado.",
        });
    }

    const newUser = await createUserService(user);
    return res.status(201).json(newUser);
};

const listUserController = (req, res) => {
    listUserService(req, res);
};

const retrieveUserController = async (req, res) => {
    retrieveUserService(req, res);
};

const updateUserController = (req, res) => {
    updateUserService(req, res);
};

const deleteUserController = (req, res) => {
    deleteUserService(req, res);
};

export {
    createUserController,
    listUserController,
    retrieveUserController,
    updateUserController,
    deleteUserController,
};
