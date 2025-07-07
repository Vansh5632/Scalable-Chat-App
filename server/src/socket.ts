import {Server} from 'socket.io';

export function setupSocket(io: Server) {
    io.on("connection",(socket)=>{
        console.log("the socket is connected..",socket.id);

        socket.on("disconnect", () => {
            console.log("the socket is disconnected..", socket.id);
        });
    })
}