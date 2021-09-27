import {useState, useEffect} from 'react'
import Header from "./Header";
import SearchBar from "./SearchBar";
import CakeContainer from "./CakeContainer"
import CakeDetail from "./CakeDetail"
import Form from "./Form"
import Flavor from "./Flavor"



function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [selectedCake, setSelectedCake] = useState(null);
  // const [selectedFlavor, ]
  const [cakeList, setCakeList] = useState([])
  const [flavorList, setFlavorList] = useState([])
  const [fullFlavorList, setFullFlavorList] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/cakes')
    .then(res => res.json())
    .then(cakesData => setCakeList(cakesData))

    fetch('http://localhost:4000/flavor')
    .then(res => res.json())
    .then(flavorData => {
      setFlavorList(flavorData)
      setFullFlavorList(flavorData)
    } )
  }, [])

  function handleRemove(e){
      const cakeToRemove = (e.target.name)
      const newCakeList = cakeList.filter (cake => cake.flavor !== cakeToRemove )
      setCakeList(newCakeList)
  }

  function resetCakeDetail(){
    setSelectedCake(null);
  }

  function handleAddCake(cakeToAdd){
    setCakeList([cakeToAdd, ...cakeList])
  }
  let filteredCakes;

  function handleFlavorSelect(e){
    filteredCakes = cakeList
    const flavor = e.target.innerText

  }

  
  const flavors = fullFlavorList.map(flavor => {
      return <li key={flavor} name={flavor} onClick={handleFlavorSelect} >{flavor}</li>
    });
  


  return (
    <>
      <Header/>
      <Form handleAddCake={handleAddCake} />
      {isVisible? <SearchBar/> : null}
      <button onClick={() => isVisible? setIsVisible(false) : setIsVisible(true)}>{isVisible? 'Hide' : 'Show'} Search Bar</button>
      {selectedCake? <CakeDetail cake={selectedCake} resetCakeDetail={resetCakeDetail}  /> : null}
      <Flavor flavor={flavors}  />
      <CakeContainer cakeList={cakeList} handleRemove={handleRemove} setSelectedCake={setSelectedCake} />
    </>
  );
}

export default App;
