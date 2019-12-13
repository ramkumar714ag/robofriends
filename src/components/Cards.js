import React from 'react';


function Cards ({name, email, id}) {
    
        return (
            <div className='tc bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5'>
                <img alt='robotes' src={`https://robohash.org/${id}?200x200`} />   
                <div>
                    <h1> {name} </h1>
                    <p>{email}</p>
                </div>
            </div>
         );     
}

export default Cards;