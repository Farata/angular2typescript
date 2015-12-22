var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(config) {
        _super.call(this, config);
        this.config = config;
    }
    return Employee;
})(Person);
