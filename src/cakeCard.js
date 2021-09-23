
function CakeCard({ handleRemove, setSelectedCake, cake }){

    return(
    <>
        <div onClick={() => setSelectedCake(cake)}>
            <h1>Flavor: {cake.flavor}</h1>
            <p>Price: {cake.price}</p>
            <p>Size: {cake.size}</p>
        </div>
        <button name={cake.flavor} onClick={handleRemove}>Remove cake</button>
    </>
    )
}


export default CakeCard