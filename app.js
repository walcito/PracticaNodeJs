import http from "http";
import serverHandler from "./Routes/route.js";

const server = http.createServer(serverHandler);

server.listen(8080);
