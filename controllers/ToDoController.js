const ToDoModel = require('../models/ToDoModels');

// Fetch all to-do tasks
module.exports.getToDo = async (req, res) => {
  const toDo = await ToDoModel.find({}, 'text description');
  res.send(toDo);
};

// Save a new to-do task
module.exports.saveToDo = async (req, res) => {
  const { text, description } = req.body;

  ToDoModel.create({ text, description })
    .then((data) => {
      console.log('Added Successfully');
      console.log(data);
      res.send(data);
    })
    .catch((err) => console.error(err));
};

// Update an existing to-do task
module.exports.updateToDo = async (req, res) => {
  const { _id, text, description } = req.body;

  ToDoModel.findByIdAndUpdate(_id,  {text, description} )
    .then(() => res.send('Updated Successfully'))
    .catch((err) => console.error(err));
};

// Delete a to-do task
module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;

  ToDoModel.findByIdAndDelete(_id)
    .then(() => res.send('Deleted Successfully'))
    .catch((err) => console.error(err));
};
