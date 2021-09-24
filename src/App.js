import {useState} from 'react'
import Header from "./Header";
import SearchBar from "./SearchBar";
import CakeContainer from "./CakeContainer"
import CakeDetail from "./CakeDetail"
import cakeData from "./data";
import Form from "./Form"



function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [selectedCake, setSelectedCake] = useState(null);
  const [cakeList, setCakeList] = useState(cakeData)

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
  return (
    <>
      <Header/>
      <Form handleAddCake={handleAddCake} />
      {isVisible? <SearchBar/> : null}
      <button onClick={() => isVisible? setIsVisible(false) : setIsVisible(true)}>{isVisible? 'Hide' : 'Show'} Search Bar</button>
      {selectedCake? <CakeDetail cake={selectedCake} resetCakeDetail={resetCakeDetail}  /> : null}
      <CakeContainer cakeList={cakeList} handleRemove={handleRemove} setSelectedCake={setSelectedCake} />
    </>
  );
}

export default App;
