// creates an error if the path is not found
function notFound(req, res, next) {
    res.this.status(404); // sets the status of the response to 404
    const error = new Error(`Not Found - ${req.originalUrl}`); // creates an error
    next(error); // passes the error to the next middleware
}

// creates an error if the server encounters an error
function errorHandler(req, res, next) {
    res.status(res.statusCode || 500); // uses the status code from the response, or sets it to 500
    res.json({
        message: error.message
    });
}

module.exports = {
    notFound,
    errorHandler
}