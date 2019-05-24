export default class Apod {
    constructor({ url, img, date, media_type, mediaType, title, explanation, copyright }) {
        this.img = url || img
        this.title = title
        this.date = date
        this.mediaType = media_type || mediaType
        this.explanation = explanation
        this.copyright = copyright
    }

    get Template() {
        return `
        <h2>${this.title}</h2>
        <input onchange="app.controllers.apodController.getNewApod(event)" type="date" name="date" max="2019-05-23" value="${this.date}" />
        <p>${this.explanation}</p>
        `
    }
}