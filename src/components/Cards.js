import React, {useState} from 'react'
import img from '../images/im.jpeg'
import {Link} from 'react-router-dom'

const Cards = (props)=>{


const clickHandler = (e)=>{
    props.onClick(e.currentTarget.id)
}

    return (
            <div className='cardsWrapper'>
                {props.list.map(item=>{
                    return (
                        <div className="card_container" key={Math.random()} id={item.id} onClick={clickHandler}>
                            <Link to={'Cartoon/card/'+item.id}>
                                <img src={item.img}/>
                                <p>{item.name}</p>
                                <p>{item.species}</p>
                            </Link> 
                        </div>
                        )
                })}
            </div>
    )
}
export default Cards