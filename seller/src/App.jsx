import { useState } from "react"
import Input from "./components/Input"
import Products from "./components/Products"


function App() {
  const [data,setData] = useState({
    productId:'',
    productPrice:'',
    productName:'',
    productCategory:'',
  })
  const submitHandler=(id,price,name,category)=>{
      setData({
        productId:id,
        productPrice:price,
        productName:name,
        productCategory:category,
      })
      console.log(data)
  }

  return (
    <>
    <Input dataHandler={submitHandler}/>
    <Products product={data}/>
    </>
  )
}

export default App
