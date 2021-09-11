const { Client } = require('pg');
const config = require('./config');

class Model {

    async displayAllArticles() {
        const client = new Client(config);
        client.connect();
        let list = await client.query('SELECT * FROM public.article;');
        return list.rows;
    }

    async displayArticleById(id) {
        const client = new Client(config);
        client.connect();
        let list = await client.query('SELECT * FROM public.article where id=$1', [+id]);
        return list.rows;
    }

    async addArticle(body) {
        const client = new Client(config);
        client.connect();
        client.query('INSERT INTO public.article(title, body, autor, heading, newspaper) VALUES ($1, $2, $3, $4, $5);', [body.title, body.body, +body.autor, body.heading, +body.newspaper]);
    }

    async deleteTask(id) {
        const client = new Client(config);
        client.connect();
        client.query('DELETE FROM public.article WHERE id=$1;', [+id]);
    }

    // newspaper

    async displayAllNewspaper() {
        const client = new Client(config);
        client.connect();
        let list = await client.query('SELECT * FROM public.newspaper;');
        return list.rows;
    }

    async displayNewspaperById(id) {
        const client = new Client(config);
        client.connect();
        let list = await client.query('SELECT * FROM public.newspaper where id=$1', [+id]);
        return list.rows;
    }

    async addNewspaper(body) {
        const client = new Client(config);
        client.connect();
        client.query('INSERT INTO public.newspaper(title, price, regularity) VALUES ($1, $2, $3);', [body.title, +body.price, body.regularity]);
    }

    async deleteNewspaper(id) {
        const client = new Client(config);
        client.connect();
        client.query('DELETE FROM public.newspaper WHERE id=$1;', [+id]);
    }

    async displayArticleByNewspaper(id) {
        const client = new Client(config);
        client.connect();
        let list = await client.query('SELECT * FROM public.article where newspaper = $1', [+id]);
        return list.rows;
    }

    // editor

    async displayAllEditors() {
        const client = new Client(config);
        client.connect();
        let list = await client.query('SELECT * FROM public.editors;');
        return list.rows;
    }

    async displayEditorById(id) {
        const client = new Client(config);
        client.connect();
        let list = await client.query('SELECT * FROM public.editors where id=$1', [+id]);
        return list.rows;
    }

    async displayEditorByNewspaper(id) {
        const client = new Client(config);
        client.connect();
        let list = await client.query('select * from editors right join newspaper on editors.newspaper = newspaper.id where newspaper = $1', [+id]);
        return list.rows;
    }

    // jornalist

    async displayAllJornalists() {
        const client = new Client(config);
        client.connect();
        let list = await client.query('SELECT * FROM public.jurnalist;');
        return list.rows;
    }

    async displayJornalistById(id) {
        const client = new Client(config);
        client.connect();
        let list = await client.query('SELECT * FROM public.jurnalist where id=$1', [+id]);
        return list.rows;
    }

    async displayJornalistByIdArticle(id) {
        const client = new Client(config);
        client.connect();
        let list = await client.query('SELECT * FROM article right join jurnalist on article.id = jurnalist.articles_idwhere jurnalist.articles_id = $1', [+id]);
        return list.rows;
    }

    // postman

    async displayAllPostmans() {
        const client = new Client(config);
        client.connect();
        let list = await client.query('SELECT * FROM public.postman;');
        return list.rows;
    }

    async displayPostmanById(id) {
        const client = new Client(config);
        client.connect();
        let list = await client.query('SELECT * FROM public.postman where id=$1', [+id]);
        return list.rows;
    }

    async displayPostmanByNewspaper(id) {
        const client = new Client(config);
        client.connect();
        let list = await client.query('select * from postman right join newspaper on postman.newspaper_id = newspaper.id where newspaper_id = $1', [+id]);
        return list.rows;
    }

}

const ModelClass = new Model();

module.exports = ModelClass;