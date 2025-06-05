const sentErrorResponce = (res,err)=> {
  let statusCode = err.statusCode;
  let message = err.message;

  return res.status(statusCode).json({
   message: message,
   status:false
  });

}

const sendResponce = (res, data,stratusCode) => {
  return res.status(statusCode).json({
    data: data,
    status: true
  });
   
}

module.exports = {
    sentErrorResponce,
    sendResponce
};  