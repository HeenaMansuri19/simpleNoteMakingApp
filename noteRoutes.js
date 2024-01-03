const express = require('express');
const routes = express.Router();
const noteControllers = require("../controllers/noteController");
// const authentication = require('.')


routes.post("/", noteControllers.createNote);
routes.get("/", noteControllers.getAllNotes);
routes.get("/:noteId", noteControllers.getNoteById);
routes.put("/:noteId", noteControllers.updateNote);
routes.delete("/:noteId", noteControllers.deleteNote);

module.exports = routes;
