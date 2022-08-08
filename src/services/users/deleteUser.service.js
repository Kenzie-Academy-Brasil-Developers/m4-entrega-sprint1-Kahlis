import users from "../../database";
import jwt from "jsonwebtoken";

const deleteUserService = (req, res) => {
    let token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({
            message: "Invalid token",
        });
    }

    token = token.split(" ")[1];
    const decoded = jwt.decode(token);
    const user = users.find((elem) => elem.uuid === req.params.uuid);
    delete users.filter((elem) => elem !== user);

    return res.json({ message: "User deleted with success" });
};

export default deleteUserService;
