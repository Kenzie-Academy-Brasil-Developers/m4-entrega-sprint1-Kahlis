import { v4 as uuid4 } from "uuid";
import users from "../../database";
import { hash } from "bcrypt";

const createUserService = async (userData) => {
    const _hash = await hash(userData.password, 10);

    userData.email = userData.email.toLowerCase();
    userData.password = _hash;
    userData.createdOn = Date.now();
    userData.updatedOn = Date.now();
    userData.uuid = uuid4();

    const user = userData;
    users.push({ ...user });

    delete user.password;
    return user;
};

export default createUserService;
