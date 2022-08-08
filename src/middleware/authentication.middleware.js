import jwt, { decode } from "jsonwebtoken";

const authenticationMiddleware = (req, res, next) => {
    let token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({
            message: "Invalid token",
        });
    }

    token = token.split(" ")[1];

    jwt.verify(token, "1u74EuO$*2Qd", (error, decoded) => {
        if (error) {
            return res.status(401).json({
                message: "Invalid token",
            });
        }

        req.userId = decoded.sub;
        req.userEmail = decoded.email;

        next();
    });
};

export default authenticationMiddleware;
