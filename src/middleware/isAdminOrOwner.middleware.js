import jwt, { decode } from "jsonwebtoken";
import users from "../database";

const isAdmninOrOwner = async (req, res, next) => {
    const user = users.find((elem) => elem.uuid === req.params.uuid);

    if (!user) {
        return res.status(404).json({
            message: "User not found",
        });
    }

    let token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({
            message: "Invalid token",
        });
    }

    token = token.split(" ")[1];
    const decoded = jwt.decode(token);

    if (decoded.email === user.email || decoded.isAdm) {
        next();
    } else {
        return res.status(401).json({ message: "Invalid token" });
    }
};

export default isAdmninOrOwner;
