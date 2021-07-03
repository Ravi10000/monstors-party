import React  from 'react'
import './card-list.styles.css'
import {Card} from '../card/card.compenent'

export const CardList =  (props) =>{
    return (
        <div className="card-list">
            {
        props.monstors.map(monstor => (
            <Card key={monstor.id} monstor={monstor}/>
        ))
      }
            </div>
    )
}