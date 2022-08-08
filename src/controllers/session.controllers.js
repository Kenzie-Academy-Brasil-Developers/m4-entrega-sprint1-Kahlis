import { response } from "express";
import createSessionService from "../services/sessions/createSession.service";

const createSessionController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await createSessionService({ email, password });
        return res.json({ token });
    } catch (err) {
        return res.status(401).json({ message: err.message });
    }
};

export { createSessionController };
