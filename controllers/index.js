let Model = require('../models/model');

class TaskController {

    displayAllArticles() {
        return Model.displayAllArticles();
    }

    displayArticleById(id) {
        return Model.displayArticleById(id);
    }

    addArticle(body) {
        return Model.addArticle(body);
    }

    deleteArticle(id) {
        return Model.deleteArticle(id);
    }

    displayAllNewspaper() {
        return Model.displayAllNewspaper();
    }

    displayNewspaperById(id) {
        return Model.displayNewspaperById(id);
    }

    addNewspaper(body) {
        return Model.addNewspaper(body);
    }

    deleteNewspaper(id) {
        return Model.deleteNewspaper(id);
    }

    displayAllEditors() {
        return Model.displayAllEditors();
    }

    displayEditorById(id) {
        return Model.displayEditorById(id);
    }

    displayAllJornalists() {
        return Model.displayAllJornalists();
    }

    displayJornalistById(id) {
        return Model.displayJornalistById(id);
    }

    displayAllPostmans() {
        return Model.displayAllPostmans();
    }

    displayPostmanById(id) {
        return Model.displayPostmanById(id);
    }

    displayJornalistByIdArticle(id) {
        return Model.displayJornalistByIdArticle(id);
    }

    displayPostmanByNewspaper(id) {
        return Model.displayPostmanByNewspaper(id);
    }

    displayEditorByNewspaper(id) {
        return Model.displayEditorByNewspaper(id);
    }

    displayArticleByNewspaper(id) {
        return Model.displayArticleByNewspaper(id);
    }
}

module.exports = new TaskController();