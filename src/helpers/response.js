module.exports = {
  successResponse: function ({ data }, code = 200, message = "Success") {
    return {
      status: code,
      message: message,
      error: false,
      data: data,
    };
  },
};
