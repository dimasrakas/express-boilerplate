const authMiddleware = function (req, res, next) {
  console.log("1. Authentication Middleware Called");
  next();
};

export default authMiddleware;
