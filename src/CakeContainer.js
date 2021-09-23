import { useState } from 'react'

import CakeCard from "./cakeCard";
import cakeData from "./data"

function CakeContainer({ setSelectedCake }){
    const [cakeList, setCakeList] = useState(cakeData)

    function handleRemove(e){
        const cakeToRemove = (e.target.name)
        const newCakeList = cakeList.filter (cake => cake.flavor !== cakeToRemove )
        setCakeList(newCakeList)
    }
    return (
        <>
            {cakeList.map(cake => {
                return <CakeCard handleRemove={handleRemove} setSelectedCake={setSelectedCake} key={cake.flavor} cake={cake}/>
            })}
        </>
    );
}

export default CakeContainer