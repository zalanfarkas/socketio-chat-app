let socket = io();
socket.on("connect", function() {
    console.log("Connected to server");

    socket.emit("createEmail", {
        to: "z@example.com",
        text: "Hey."
    });

    socket.emit("createMessage", {
        to: "z@example.com",
        text: "Hey." 
    });
});
socket.on("disconnect", function() {
    console.log("Disconnected from server");
});

socket.on("newEmail", function(email) {
    console.log("New email", email);
});

socket.on("newMessage", function(message){
    console.log("New message", message);
});