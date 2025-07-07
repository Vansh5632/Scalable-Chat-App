import express, { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import Routes from "./routes/index";
import { Server } from "socket.io";
import { createServer } from "http";

const app: Application = express();
const PORT = process.env.PORT || 7000;

const server = createServer(app);
const io = new Server(server, {
  cors:{
    origin:"*",
  }
});

export { io }; 

// * Middleware
app.use(cors({
  origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "Accept"],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  return res.send("It's working 🙌");
});

app.use("/api/v1", Routes);

server.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
