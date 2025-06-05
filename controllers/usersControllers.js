const {sendErrorResponce,sendResponce} = require('../utils/responce');

// Using center error Handling
const getUsers =(req, res) => {
  res.send('Fetch all users.');

  if(!user) {
  return sendErrorResponce(res, { statusCode: 404, message: 'User not found' });
};

return sendResponce(res, { data: user, statusCode: 200 });

};

const postUser =(req, res) => {
  res.send('Add a new user.');


};


//use of try and catch Block

const getUserByID = (req, res) => {
  try{  const userId = req.params.id;
    
    if(userId>10) {
        let err= new Error ('User ID not found');
        err.statusCode = 404;
    }
    res.send(`Fetch the details of a specific user with User ID: ${userId}`);
  } catch (error) {
    return sendErrorResponce(res, err);
  }
}


module.exports={
    getUsers,
    postUser,
    getUserByID
}