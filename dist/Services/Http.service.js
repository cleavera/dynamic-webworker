"use strict";
var WebWorker_service_1 = require('./WebWorker.service');
var JSONResponse_service_1 = require("./JSONResponse.service");
var Http = (function () {
    function Http() {
    }
    Http.getHttpWorker = function () {
        if (!window.$AnthonyCleaver) {
            window.$AnthonyCleaver = {};
        }
        if (!window.$AnthonyCleaver.PresentationGenerator) {
            window.$AnthonyCleaver.PresentationGenerator = {};
        }
        if (!window.$AnthonyCleaver.PresentationGenerator.HttpWebWorker) {
            window.$AnthonyCleaver.PresentationGenerator.HttpWebWorker = new WebWorker_service_1.$WebWorker($$Http);
        }
        return window.$AnthonyCleaver.PresentationGenerator.HttpWebWorker;
    };
    return Http;
}());
exports.Http = Http;
var $$Http = (function () {
    function $$Http() {
    }
    $$Http.getJSON = function (url) {
        return fetch(new Request(url)).then(function (response) {
            return new JSONResponse_service_1.JSONResponse(response);
        });
    };
    $$Http.options = function (url) {
        return fetch(new Request(url), { method: 'OPTIONS' }).then(function (response) {
            return new JSONResponse_service_1.JSONResponse(response);
        });
    };
    return $$Http;
}());
