const asyncErrorHandler = (func) => {
    return (req, res, next) => {
      func(req, res, next).catch(async (err) => {
        return next(err);
      });
    };
  };
  
  module.exports = asyncErrorHandler;