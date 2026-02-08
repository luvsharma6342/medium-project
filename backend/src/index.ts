import { Hono } from "hono";
import { decode, sign, verify } from "hono/jwt";

import { PrismaClient } from "@prisma/client/edge";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";
import { cors } from "hono/cors";
// import { withAccelerate } from "@prisma/extension-accelerate";

const app = new Hono();
app.use('/*', cors())
app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

export default app;
