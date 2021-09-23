import {useState} from 'react'
import Header from "./Header";
import SearchBar from "./SearchBar";
import CakeContainer from "./CakeContainer"
import CakeDetail from "./CakeDetail"



function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [selectedCake, setSelectedCake] = useState(null);
  return (
    <>
      <Header/>
      {isVisible? <SearchBar/> : null}
      
      <button onClick={() => isVisible? setIsVisible(false) : setIsVisible(true)}>{isVisible? 'Hide' : 'Show'} Search Bar</button>
      {selectedCake? <CakeDetail cake={selectedCake}  /> : null}
      <CakeContainer setSelectedCake={setSelectedCake} />
    </>
  );
}

export default App;
