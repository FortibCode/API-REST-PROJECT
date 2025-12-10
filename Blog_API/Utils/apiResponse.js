class ApiResponse{
    constructor(success, MessageChannel, data = null, statusCode=200){
        this.success = success;
        this.message = message;
        this.data = data;
        this.statusCode = statusCode;
        this.timestamp = new Data().toISOString();
    }

    // Methode Static

    static success(message, daa = null, statusCode = 200) {
        return new ApiResponse(true, message, data, statusCode);
    }

    static error(message, statusCode = 500, data = null) {
        return new ApiResponse(false, message, data, statusCode);
    }

    send(res) {
        return res.status(this.statusCode).json({
            success: this.success,
            message: this.message,
            data: this.data,
            timestamp: this.timestamp,
        })
    }
}

module.exports = ApiResponse;