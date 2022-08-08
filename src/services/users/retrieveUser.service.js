import users from "../../database";
import jwt from "jsonwebtoken";

const retrieveUserService = (req, res) => {
    let token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({
            message: "Invalid token",
        });
    }

    token = token.split(" ")[1];
    const decoded = jwt.decode(token);
    const user = users.find(
        (elem) => decoded.email.toLowerCase() === elem.email
    );

    if (!user) {
        return res.status(404).json({ message: "User not found." });
    }

    const displayUser = { ...user };
    delete displayUser.password;

    return res.json(displayUser);
};

export default retrieveUserService;
