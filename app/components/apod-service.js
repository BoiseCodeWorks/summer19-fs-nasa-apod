import Apod from "../models/APOD.js";


let _api = axios.create({
    baseURL: "https://api.nasa.gov/planetary"
})

const _state = {
    apod: {}
}

const _subscribers = {
    apod: []
}

function _setState(prop, data) {
    _state[prop] = data
    _subscribers[prop].forEach(fn => fn());
}

export default class ApodService {
    constructor() {}

    get Apod() {
        return new Apod(_state.apod)
    }

    addSubscriber(prop, fn) {
        _subscribers[prop].push(fn)
    }

    getApod(date = "") {
        let queryParams = 'apod?api_key=Trq8EGLRbZZWwRVqYUNWkinr4ulR2Ajlgh5qRPoV'
        if (date) {
            queryParams += '&date=' + date
        }
        _api.get(queryParams)
            .then(res => {
                console.log({res})
                let apod = new Apod(res.data)
                _setState('apod', apod)
            })
            .catch(e => console.error(e))
    }
}