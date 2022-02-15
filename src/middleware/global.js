const globalMiddleware = function (req, res, next) {
  console.log("0. Global Middleware Called");
  next();
};

export default globalMiddleware;
