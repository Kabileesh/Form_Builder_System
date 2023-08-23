const express = require("express");
const passport = require("passport");
const submitForm = require("../controller/submitFormController");
const editResponseController = require("../controller/editResponseController");
const getFormResponsesController = require("../controller/getFormResponsesController");

const submissionRouter = express.Router();

submissionRouter.get("/view-responses", passport.authenticate('bearer', {session : false}), getFormResponsesController);
submissionRouter.post("/submit-response", passport.authenticate('bearer', {session: false}), submitForm);
submissionRouter.patch("/edit-response", passport.authenticate('bearer', {session: false}), editResponseController);

module.exports = submissionRouter;
