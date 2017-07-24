"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var GitHubService = (function () {
    function GitHubService(_http) {
        this._http = _http;
        this.client_id = 'b0f2b74fdf3c424764d7';
        this.client_secret = '72b1f838dd8c6247434e653b66b886ef59a8209d';
        this.name = "kumardss";
    }
    GitHubService.prototype.getUser = function () {
        return this._http.get('http://api.github.com/users/' + this.name + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret).map(function (res) { return res.json(); });
    };
    GitHubService.prototype.getRepos = function () {
        return this._http.get('http://api.github.com/users/' + this.name + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret).map(function (res) { return res.json(); });
    };
    GitHubService.prototype.updateUser = function (username) {
        this.name = username;
    };
    return GitHubService;
}());
GitHubService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GitHubService);
exports.GitHubService = GitHubService;
//# sourceMappingURL=github.service.js.map