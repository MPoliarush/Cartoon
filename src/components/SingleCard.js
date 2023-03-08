import {Link} from 'react-router-dom'

import arr from '../images/arr.png'


const SingleCard=(props)=>{

    console.log(props.data)
    return (
       <div className="single_card_main">
            <Link to='/'><p className='goBack'><span><img src={arr}/></span>GO BACK</p></Link>
            <div className="card_container_single">
                <img className='singleIMG' src={props.data.img}/>
                <h3>{props.data.name}</h3>
                <p>Informations</p>
                <div className='info_block'>
                    <div className='block'>
                        Gender
                        <span className='info'>{props.data.gender}</span>
                    </div>
                    <div className='block'>
                        Status
                        <span className='info'>{props.data.status}</span>
                    </div>
                    <div className='block'>
                        Specie
                        <span className='info'>{props.data.species}</span>
                    </div>
                    <div className='block'>
                        Origin
                        <span className='info'>{props.data.origin}</span>
                    </div>
                    <div className='block'>
                        Type
                        <span className='info'>{props.data.type.length===0 ?'Unknown' : props.data.type}</span>
                    </div>
                </div>
                
        </div>
    </div>            
        
        )
}

export default SingleCard