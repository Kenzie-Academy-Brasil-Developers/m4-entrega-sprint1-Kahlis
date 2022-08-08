import users from "../../database";
import jwt from "jsonwebtoken";
import { compare } from "bcrypt";
import userRoutes from "../../routes/user.routes";

const createSessionService = async ({ email, password }) => {
    const user = users.find((user) => user.email === email);

    if (!user) {
        throw new Error("Invalid email or password");
    }

    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
        throw new Error("Invalid email or password");
    }

    const token = jwt.sign(
        {
            email: user.email,
            isAdm: user.isAdm,
        },
        "1u74EuO$*2Qd",
        {
            expiresIn: "24h",
            subject: user.uuid,
        }
    );

    return token;
};

export default createSessionService;
