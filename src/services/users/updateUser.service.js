import { hash } from "bcrypt";
import users from "../../database";

const updateUserService = async (req, res) => {
    const userID = req.params.uuid;
    const { name, email, password } = req.body;
    const user = users.find((elem) => elem.uuid === userID);

    if (!user) {
        return res.status(404).json({ message: "User not found." });
    }

    user.updatedOn = Date.now();
    if (name) {
        user.name = name;
    }

    if (email) {
        user.email = email;
    }

    if (password) {
        const _hash = await hash(password, 10);
        user.password = _hash;
    }

    const dataUser = { ...user };
    if (!user.isAdm) {
        delete dataUser.password;
    }

    return res.json(dataUser);
};

export default updateUserService;
