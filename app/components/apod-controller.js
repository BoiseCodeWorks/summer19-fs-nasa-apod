import ApodService from "./apod-service.js";

let _apodService = new ApodService();

function _drawApod() {
    // 1. get the information
    let apod = _apodService.Apod
    // 2. render info to the dom
    document.querySelector('#apod-data').innerHTML = apod.Template
    document.querySelector('.apod-bg').style.backgroundImage = `url('${apod.img}')`
}

export default class ApodController {
    constructor() {
        _apodService.addSubscriber('apod', _drawApod)
        _apodService.getApod()
    }

    getNewApod(e) {
        let date = e.target.value
        _apodService.getApod(date)
    }
}