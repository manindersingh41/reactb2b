const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router('./data/db.json');
const middlewares = jsonServer.defaults({
    static: './build',
})


const port = 8000 || 8001;
server.use(middlewares);
// server.use(
//     jsonServer.rwriter({
//         "/api/*": "/$1",
//     })
// )

server.use(router);
server.listen(port, () => {
    console.log(`server is running at ${port}`)
})