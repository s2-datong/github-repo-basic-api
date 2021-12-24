"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultController = void 0;
const routing_controllers_1 = require("routing-controllers");
const axios_1 = __importDefault(require("axios"));
let DefaultController = class DefaultController {
    GetReadme(username, reponame) {
        return __awaiter(this, void 0, void 0, function* () {
            const rawReadmeUrl = `https://raw.githubusercontent.com/${username}/${reponame}/master/README.md`;
            try {
                const resp = yield axios_1.default.get(rawReadmeUrl);
                const readme = resp.data;
                return readme;
            }
            catch (err) {
                throw new routing_controllers_1.NotFoundError('Readme file was not found');
            }
        });
    }
    hello() {
        return __awaiter(this, void 0, void 0, function* () {
            return 'hello world';
        });
    }
};
__decorate([
    (0, routing_controllers_1.Get)('/repo/:username/:name'),
    __param(0, (0, routing_controllers_1.Param)('username')),
    __param(1, (0, routing_controllers_1.Param)('name'))
], DefaultController.prototype, "GetReadme", null);
__decorate([
    (0, routing_controllers_1.Get)('/hello')
], DefaultController.prototype, "hello", null);
DefaultController = __decorate([
    (0, routing_controllers_1.Controller)()
], DefaultController);
exports.DefaultController = DefaultController;
