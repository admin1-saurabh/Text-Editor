import express from 'express'
import { Server } from "socket.io";

const PORT = 5000
const io = new Server(PORT , {
    cors :{
        origin : "http://localhost:5173",
        methods : ["GET","POST"]
    }
});

const userSocketMap = {};

const getAllConntectedClients = (roomId) => {
    return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map((socketId) => {
        const name = userSocketMap[socketId];
        io.to(socketId).emit("user-connected", name);

        return {
            socketId,
            name
        }
    })
}

io.on("connection", (socket) => {
    socket.on("join", ({Id, name}) => {
        
        userSocketMap[socket.id] = name; 
        socket.join(Id);   
        const clients = getAllConntectedClients ( Id );
       
        clients.forEach(({socketId}) => {
            io.to(socketId).emit("joined", {
                clients,
                name,
                socketId : socket.id
            });
        })
    })

    socket.on("send-changes", ({roomId, delta}) => {
        io.to(roomId).emit("receive-changes", {delta})
    })

    socket.on("disconnecting", ({Id, name, message}) => {
        const rooms = Array.from(socket.rooms);
        rooms.forEach((roomId) => {
            socket.in(roomId).emit("disconnected", {
                socketId : socket.id,
                name : userSocketMap[socket.id],
            })
        })
        delete userSocketMap[socket.id] ;
        socket.leave();
    })
})
