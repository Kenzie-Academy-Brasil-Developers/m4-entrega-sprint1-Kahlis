import express from "express";
import sessionRoutes from "./routes/session.routes";
import userRoutes from "./routes/user.routes";

const app = express();
app.use(express.json());

app.listen(3000);

app.use("/users", userRoutes);
app.use("/login", sessionRoutes);

export default app;
