import app from "./src";

const port = process.env.PORT || 3001;
const server = app.listen(port);

console.log("App is listening on port: " + port);
