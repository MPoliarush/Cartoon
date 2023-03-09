import React, {useState,useEffect} from 'react'

import img from '../images/first.png'
import Cards from './Cards';
import SingleCard from './SingleCard';


function Homepage(props) {

  const [fetchedData, setFetchedData]=useState([])
  const [filtered, setFiltered] =useState([])

  const [inputData,setInputData] = useState('')

  const [isCardclicked, setCardClicked] = useState('false')
  const [isDataFiltered, setDataFiltered]= useState('empty')



  const inputHandler = (event)=>{
    setInputData(event.target.value)
    let filteredNames = filtered.filter(item=>{
            return item.name.includes(event.target.value)
    })

    if(event.target.value==0){
      localStorage.setItem('local', 'empty')
      localStorage.setItem('name', 'empty')
    } else {
      console.log('decresae')
      localStorage.setItem('local', JSON.stringify(filteredNames))
      localStorage.setItem('name', event.target.value)
    }

    if(filteredNames){
      setDataFiltered(filteredNames)
      setFetchedData(filteredNames)
    }
     
  }


  useEffect(()=>{
    if (localStorage.getItem('name')!=='empty'){
      setInputData(localStorage.getItem('name'))
    } 
    console.log('first')
    if (localStorage.getItem('local')=='empty' || localStorage.getItem('local')==undefined || localStorage.getItem('local')==[] ){
      getItems()
    } else if ( localStorage.getItem('local')!=='empty' ){
      const data = JSON.parse(localStorage.getItem('local'))
      setFetchedData(data)
    }

  },[localStorage.getItem('local')])

  


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
  
  

  // useEffect(()=>{
  //   console.log("second")
  //   if(localStorage.getItem('local')!=='empty'){
  //     let filteredNames;
  //     filteredNames = filtered.filter(item=>{
  //       return item.name.includes(inputData)
  //     })
      
  //     setFetchedData(filteredNames)
  //   }
       
  // },[setFetchedData])



  let clickedId;

  function cardHandler(id){
    setCardClicked(false)
    clickedId = fetchedData.filter(item=>{
        return item.id == id
      })


    props.trans(...clickedId)

  }

 

  return (
    
        <div className="App">
          {isCardclicked ? <main>
            <img className='mainIMG' src={img} />
            <input onChange={inputHandler} placeholder='Filter by name...' value={inputData}/>
            <Cards list={fetchedData} onClick={cardHandler} />
          </main>:<SingleCard ></SingleCard>
          }
        </div>

  );
}

export default Homepage;
