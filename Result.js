/**
 * Created by hyl1979 on 06/05/2017.
 */

var Result = function Result(event, method, param) {
    this.success = true;
    this.event = event;
    this.method = method;
    this.param = param;
    this.innerResults = [];
    this.data = {};
    this.error = {
        code: "",
        message: ""
    };
};

Result.prototype.log = function (title, detail) {
    lib_event_dubug(this.event, this.method, title, detail);
};
Result.prototype.consoleLog = function (title, detail) {
    console.log(this.event + "|" + this.method + "," + title, detail);
};
Result.prototype.logError = function (title) {
    lib_event_dubug(this.event, this.method, title, this.error.code + " - " + this.error.message);
};
Result.prototype.consoleLogError = function () {
    console.log(this.event + "|" + this.method, this.error);
};
Result.prototype.update = function (isSuccess, errorCode, errorMessage, data) {
    this.success = isSuccess;
    if (isSuccess) {
        this.data = data;
    } else {
        this.error.code = errorCode;
        this.error.message = errorMessage;
    }
};


module.exports = Result;