
const getUsers =(req, res) => {
  res.send('Fetch all users.');
};

const postUser =(req, res) => {
  res.send('Add a new user.');
};

const getUserByID = (req, res) => {
    const userId = req.params.id;
    res.send(`Fetch the details of a specific user with User ID: ${userId}`);
}
module.exports={
    getUsers,
    postUser,
    getUserByID
}