"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $Blob = (function () {
    function $Blob(blob) {
        this.blob = blob;
    }
    $Blob.prototype.encode = function () {
        var reader = new FileReader();
        reader.readAsDataURL(this.blob);
        return new Promise(function (resolve) {
            reader.onloadend = function () {
                resolve(reader.result);
            };
        });
    };
    $Blob.prototype.getURL = function () {
        if (this._url) {
            return this._url;
        }
        this._url = URL.createObjectURL(this.blob);
        return this._url;
    };
    $Blob.prototype.remove = function () {
        return URL.revokeObjectURL(this.getURL());
    };
    $Blob.fromString = function (str) {
        return new $Blob(new Blob([str]));
    };
    $Blob.fromBlob = function (blob) {
        return new $Blob(blob);
    };
    return $Blob;
}());
exports.$Blob = $Blob;
