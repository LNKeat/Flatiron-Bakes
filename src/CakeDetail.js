function CakeDetail({ cake, resetCakeDetail }){
  console.log(cake)
  return (
    <div onClick={resetCakeDetail}>
      <img src={cake.image} style={{width: '200px'}} />
      <ul>
        <li>Flavor: {cake.flavor}</li>
        <li>Size: {cake.size}</li>
        <li>Price: ${cake.price}</li>
        <li>Description: {cake.description}</li>
      </ul>
      <button></button>
    </div>
  )
}

export default CakeDetail