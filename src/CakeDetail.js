function CakeDetail({ cake }){
  console.log(cake)
  return (
    <div>
      <img src={cake.image} style={{width: '200px'}} />
      <ul>
        <li>Flavor: {cake.flavor}</li>
        <li>Size: {cake.size}</li>
        <li>Price: ${cake.price}</li>
        <li>Description: {cake.description}</li>
      </ul>
    </div>
  )
}

export default CakeDetail