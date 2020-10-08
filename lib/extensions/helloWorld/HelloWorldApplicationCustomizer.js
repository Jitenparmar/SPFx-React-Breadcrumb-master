"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("@microsoft/decorators");
var sp_application_base_1 = require("@microsoft/sp-application-base");
var React = require("react");
var ReactDom = require("react-dom");
var HelloWorld_1 = require("./components/HelloWorld");
var LOG_SOURCE = 'HelloWorldApplicationCustomizer';
/** A Custom Action which can be run during execution of a Client Side Application */
var HelloWorldApplicationCustomizer = (function (_super) {
    __extends(HelloWorldApplicationCustomizer, _super);
    function HelloWorldApplicationCustomizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloWorldApplicationCustomizer.prototype.onInit = function () {
        if (!this._topPlaceholder) {
            this._topPlaceholder =
                this.context.placeholderProvider.tryCreateContent(sp_application_base_1.PlaceholderName.Top, { onDispose: this._onDispose });
            // The extension should not assume that the expected placeholder is available.
            if (!this._topPlaceholder) {
                console.error('The expected placeholder (Top) was not found.');
                return;
            }
            var element = React.createElement(HelloWorld_1.default, {
                context: this.context
            });
            ReactDom.render(element, this._topPlaceholder.domElement);
        }
        return Promise.resolve();
    };
    HelloWorldApplicationCustomizer.prototype._onDispose = function () {
        console.log('[HelloWorldApplicationCustomizer._onDispose] Disposed custom nav placeholders.');
    };
    __decorate([
        decorators_1.override
    ], HelloWorldApplicationCustomizer.prototype, "onInit", null);
    return HelloWorldApplicationCustomizer;
}(sp_application_base_1.BaseApplicationCustomizer));
exports.default = HelloWorldApplicationCustomizer;

//# sourceMappingURL=HelloWorldApplicationCustomizer.js.map
