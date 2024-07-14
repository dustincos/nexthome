import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "http://localhost:5173",
  },
});

let onlineUsers = [];

const addUser = (userId, socketId) => {
  const userExists = onlineUsers.find((user) => user.userId === userId);
  if (!userExists) {
    onlineUsers.push({ userId, socketId });
  }
  console.log(`User ${userId} connected.`);
};

const removeUser = (socketId) => {
  const removedUser = onlineUsers.find((user) => user.socketId === socketId);
  if (removedUser) {
    onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
    console.log(`User ${removedUser.userId} disconnected.`);
  }
};

const getUser = (userId) => {
  return onlineUsers.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  console.log(`Socket connected: ${socket.id}`);

  socket.on("newUser", (userId) => {
    addUser(userId, socket.id);
  });

  socket.on("sendMessage", ({ receiverId, data }) => {
    const receiver = getUser(receiverId);
    if (receiver) {
      io.to(receiver.socketId).emit("getMessage", data);
      console.log(`Message sent to ${receiverId}`);
    } else {
      console.log(`User ${receiverId} not found.`);
    }
  });

  socket.on("disconnect", () => {
    removeUser(socket.id);
  });
});

const PORT = 4000;
const server = io.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Handle server reset or error
server.on("error", (err) => {
  console.error(`Server error: ${err}`);
});

process.on("SIGINT", () => {
  console.log("Server shutting down...");
  server.close(() => {
    console.log("Server shut down.");
    process.exit(0);
  });
});
