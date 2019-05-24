import ApodController from "./components/apod-controller.js";


class App {
    constructor() {
        this.controllers = {
            apodController: new ApodController()
        }
    }
}

window["app"] = new App();