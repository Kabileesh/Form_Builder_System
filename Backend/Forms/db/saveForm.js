const Form = require("../model/formModel");

const saveForm = async (title, description, fields, id) => {
  const user_id = id;
  const newForm = new Form({
    title: title,
    description: description,
    fields: fields,
    createdBy: user_id,
  });

  await newForm.save();

  return newForm;
};

module.exports = saveForm;
