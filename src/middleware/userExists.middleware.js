import users from "../database";

const userExists = (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id === id);

    if (user) {
        req.user = user;
        return res.status(200).json(user);
    }

    return res.status(404).json({
        message: "User not found",
    });
};

export default userExists;
