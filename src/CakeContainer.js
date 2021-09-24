import CakeCard from "./cakeCard";


function CakeContainer({ cakeList, handleRemove, setSelectedCake }){
    return (
        <>
            {cakeList.map(cake => {
                return <CakeCard handleRemove={handleRemove} setSelectedCake={setSelectedCake} key={cake.flavor} cake={cake}/>
            })}
        </>
    );
}

export default CakeContainer