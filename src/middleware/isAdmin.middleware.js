import jwt from "jsonwebtoken";

const isAdmin = (req, res, next) => {
    let token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({
            message: "Invalid token",
        });
    }

    token = token.split(" ")[1];
    const decoded = jwt.decode(token);

    if (!decoded.isAdm) {
        return res.status(401).json({ message: "Invalid token" });
    }

    next();
};

export default isAdmin;
