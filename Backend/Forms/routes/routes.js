const express = require("express");
const passport = require("passport");
const createForm = require("../controller/createFormController");
const deleteFormController = require("../controller/deleteFormController");
const getFormController = require("../controller/getFormController");
const viewFormsController = require("../controller/viewFormsController");

const formsRouter = express.Router();

formsRouter.get("/view-forms", passport.authenticate('bearer', {session: false}), viewFormsController);
formsRouter.get("/get-form", passport.authenticate('bearer', {session: false}), getFormController);
formsRouter.post("/create-form", passport.authenticate('bearer', {session: false}), createForm);
formsRouter.delete("/delete-form", passport.authenticate('bearer', {session: false}), deleteFormController);

module.exports = formsRouter;
