import React, {useState,useEffect} from 'react'

import img from '../images/first.png'
import Cards from './Cards';
import SingleCard from './SingleCard';


function Homepage(props) {

  const [fetchedData, setFetchedData]=useState([])
  const [filtered, setFiltered] =useState([])

  const [inputData,setInputData] = useState(' ')

  const [isCardclicked, setCardClicked] = useState('false')
  const [clickedData, setClickedData] = useState()



  const inputHandler = (event)=>{
    setInputData(event.target.value)
  }


  async function getItems(){
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const items = await response.json()
    
    let characters = items.results.map(charactersData=>{
      return {
        id:charactersData.id,
        img:charactersData.image,
        name:charactersData.name,
        gender:charactersData.gender,
        status:charactersData.status,
        species:charactersData.species,
        origin:charactersData.origin.name,
        type:charactersData.type,
      }
    })
    characters = characters.sort((a,b)=>(a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))

    setFetchedData(characters)
    setFiltered(characters)
  }




  useEffect(()=>{
    getItems()
  },[])



  useEffect(()=>{
      let filteredNames;
      filteredNames = filtered.filter(item=>{
        return item.name.includes(inputData)
      })
      
      setFetchedData(filteredNames)
      
  },[inputData])



  let clickedId;

  function cardHandler(id){
    setCardClicked(false)
    clickedId = fetchedData.filter(item=>{
        return item.id == id
      })

    setClickedData(...clickedId)
 
    props.trans(...clickedId)
  }

 

  return (
        <div className="App">
          {isCardclicked ? <main>
            <img className='mainIMG' src={img} />
            <input onChange={inputHandler} placeholder='Filter by name...' />
            <Cards list={fetchedData} onClick={cardHandler} />
          </main>:<SingleCard ></SingleCard>
          }
        </div>
  );
}

export default Homepage;
