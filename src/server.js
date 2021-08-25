const app = require('./app')
require("./db/mongoose")

//define port for server
const port = process.env.PORT || 3000;

//catch uncaught exception error and shutting down server
process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("Unhandeled Exception error 💥 shutting down server....💥");
  process.exit(1);
});

//start server
app.listen(port, () => {
  console.log("app is listening on port ", port);
});

//catch unhandled rejection error and shuting down server
process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("Unhandeled Rejection 💥 shutting down server....💥");
  server.close(() => {
    process.exit(1);
  });
});