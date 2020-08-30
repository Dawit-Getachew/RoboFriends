import React from 'react';

const Card = ({name, id, email}) => {
    // const {name, id, email} = props; this is used to destructuring and we can also use
    // use in card const card = (props) by saying and ketach degmo props.name, props,id eyalin.
    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?size=200x200`} alt="Robots"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;