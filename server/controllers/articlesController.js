var Article = require("../models");

module.exports = {
    find: function (req, res) {
        console.log("finding articles");
        Article.find().then(function (doc) {
            res.json(doc);
        }).catch(function (err) {
            res.json(err);
        });
    },
    insert: function (req, res) {
        console.log("article saved");
        console.log("req.body: ", req.body);
        Article.create(req.body).then(function (doc) {
            res.json(doc);
            console.log("doc: ", doc);
        }).catch(function (err) {
            res.json(err);
        });
    },
    delete: function (req, res) {
        console.log("article deleted");
        Article.remove({
            _id: req.params.id
        }).then(function (doc) {
            res.json(doc);
            console.log("doc: ", doc);
        }).catch(function (err) {
            res.json(err);
        });
    }
};
