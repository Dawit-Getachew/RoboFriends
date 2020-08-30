import React from 'react';
import Card from './Card';

const CardList = ({robots} ) => {
    const cardComponents = robots.map((name, i) => {
        return <Card id={robots[i].id}key={i} name={robots[i].name} email={robots[i].email}/>
    })
    return(
        <div>
           {cardComponents}
        </div>
    )
}
export default CardList;