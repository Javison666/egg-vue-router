'use strict';
class Router {
    constructor(obj,routerObj) {
        this.routes = obj.routes;
        obj.routes.map(ele => {
            routerObj.get(ele.path, ele.component);
        });
    }
}

module.exports = Router;