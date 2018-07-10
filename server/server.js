const path = require("path");
const http = require("http");
const express = require("express");
const socketIO = require("socket.io");

const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on("connection", (socket) => {
    console.log("New user connected");

    socket.emit("newEmail", {
        from: "z@example.com",
        text: "What's up?",
        createdAt: 123
    });

    socket.emit("newMessage", {
        from: "z@example.com",
        text: "What's up?",
        createdAt: 123
    });

    socket.on("createEmail", (newEmail) => {
        console.log("createEmai", newEmail);
    });

    socket.on("createMessage", (message) => {
        console.log("createMessage", message);
    });

    socket.on("disconnect", () => {
        console.log("User was disconnected");
    });
});

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
