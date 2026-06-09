const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
require("dotenv").config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

app.use(cors());
app.use(express.json());


app.use("/api/tasks",       require("./routes/tasks"));
app.use("/api/attendance",  require("./routes/attendance"));
app.use("/api/salary",      require("./routes/salary"));
app.use("/api/inventory",   require("./routes/inventory"));
app.use("/api/reports",     require("./routes/reports"));
app.use("/api/escalations", require("./routes/escalations"));


require("./socket/escalationSocket")(io);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

server.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});
