// jshint esversion:6
const dbMongoHelpers = require('../db-mongo/query/dbHelpers');

const controllers = {
    getAll: (req, res) => {
        dbMongoHelpers.getAll((err, results) => {
            if (err) {
                res.status(404).send(err);
            } else {
                res.status(200).send(results);
            }
        });
    },
    getOne: (req, res) => {
        dbMongoHelpers.getOne(req.params.id, (err, results) => {
            if (err) {
                res.status(404).send(err);
            } else {
                res.status(200).send(results);
            }
        });
    },
    postOne: (req, res) => {
        dbMongoHelpers.postOne(req.body, (err, results) => {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(201).send(results);
            }
        });
    },
    updateOne: (req, res) => {
        dbMongoHelpers.updateOne(req.params.id, req.body, (err, results) => {
            if (err) {
                res.status(404).send(err);
            } else {
                res.status(200).send(results);
            }
        });
    },
    deleteOne: (req, res) => {
        dbMongoHelpers.deleteOne(req.params.id, (err, results) => {
            if (err) {
                res.status(404).send(err);
            } else {
                res.status(200).send(results);
            }
        });
    }
};

module.exports = controllers;
