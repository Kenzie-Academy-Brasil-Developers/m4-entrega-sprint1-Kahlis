import users from "../../database";

const listUserService = (req, res) => {
    return res.json(users);
};

export default listUserService;
