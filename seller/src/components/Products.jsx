import  { useState,useEffect } from 'react'

const Products = (props) => {
  const [electronicsItems,setElectronicsItems] = useState([])
  const [foodItems,setFoodItems] = useState([])
  const [skinCare,setSkinCare] = useState([])
  useEffect(() => {
    props.product.productId?localStorage.setItem(props.product.productId, JSON.stringify(props.product)):"";
    if (props.product.productCategory === 'electronics') {
      setElectronicsItems((prev) => [...prev, props.product]);
    } else if (props.product.productCategory === 'skin-Care') {
      setSkinCare((prev) => [...prev, props.product]);
    } else if (props.product.productCategory === 'food-Items') {
      setFoodItems((prev) => [...prev, props.product]);
    }
  }, [props.product]);

  const deleteHandler = (id,category) =>{
    const updatedItems = category.filter((item) => item.productId !== id);
    localStorage.removeItem(id.toString());
    if (category === electronicsItems) {
      setElectronicsItems(updatedItems);
    } else if (category === foodItems) {
      setFoodItems(updatedItems);
    } else if (category === skinCare) {
      setSkinCare(updatedItems);
    }
  }
  return (
    <>
    <h1>Products:</h1>
    <h2>Electronics Items</h2>
    {
      electronicsItems.map((item,idx)=>(
        <ul key={idx}>
          <li>
            <span>{item.productPrice} {item.productCategory} {item.productName}</span>
            <button onClick={()=>deleteHandler(item.productId,electronicsItems)}>Delete</button>
          </li>
        </ul>
      ))
    }
    <h2>Food Items</h2>
    {
      foodItems.map((item,idx)=>(
        <ul key={idx}>
          <li>
            <span>{item.productPrice} {item.productCategory} {item.productName}</span>
            <button onClick={()=>deleteHandler(item.productId,foodItems)}>Delete</button>
          </li>
        </ul>
      ))
    }
    <h2>Skin Care</h2>
    {
      skinCare.map((item,idx)=>(
        <ul key={idx}>
          <li>
            <span>{item.productPrice} - {item.productCategory} - {item.productName}
            <button onClick={()=>deleteHandler(item.productId,skinCare)}>Delete</button>
          </span></li>
        </ul>
      ))
    }
    </>
  )
}

export default Products