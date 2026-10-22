import http from "http";
import serverHandler from "./Routes/route.js";

const server = http.createServer(serverHandler);

const port = process.env.PORT || 8080;
server.listen(port);
