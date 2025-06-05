const onSubmitHandler = (event) => {
  event.preventDefault();
  console.log("Form submitted");

  const product = event.target.product.value;
  
const obj ={
    "productName": product
}

axios.post("http://localhost:4000"+"/products", obj)
.then((responce) => {
  console.log(responce.data.value);
  })
  .catch((error) => {
  console.error("Error adding product:", error)})


}