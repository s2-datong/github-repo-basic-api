"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const DefaultController_1 = require("./DefaultController");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const server = (0, routing_controllers_1.createExpressServer)({
            controllers: [DefaultController_1.DefaultController],
            routePrefix: '/v1',
            cors: true
        });
        const port = process.env.PORT || 3001;
        server.listen(port, () => { console.log(`listening on ${port}`); });
    });
}
run()
    .catch(e => {
    console.error(e);
    process.exit();
});
