import React from 'react';
import Cards from './Cards';



function CardList({ Robots}) {
    return(
        <div >
        {
            Robots.map((user, i)=>{
                return(
                    < Cards
                    key={i}
                    id={Robots[i].id} 
                    name={Robots[i].name} 
                    email={Robots[i].email} 
                  />
                ) 
            })
        }
        </div>
    );   
}

export default CardList;