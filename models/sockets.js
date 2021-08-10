class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents();
  }
  socketEvents() {
    //On Connection
    this.io.on("connection", (socket) => {
      //Listen Event: newMessage
      socket.on("newMessage", (data) => {
        console.log(data);
        this.io.emit("emit-new-message", data);
      });
    });
  }
}

module.exports = Sockets;
