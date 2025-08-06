import restaurant from '../../models/restaurant';

const React = require('react');

function Show (props){
    return(
        <div>
            <header>
                <link rel="stylesheet" href='/css/show.css'></link>
            </header>
            <div className='head' key={restaurant._id}>
                <label className='name'>{props.restaurant.name}</label>
                <img className='restImage' src={props.restaurant.image} alt={props.restaurant.name} />
                </div>
            <div className='container'>
                        <label className='name'>Descritption {props.restaurant.description}</label>
                        <label className='name'>Food {props.restaurant.food}</label>
                        <label className='name'>Location {props.restaurant.location}</label>
                        <a href={`/restaurant/${props.restaurant._id}/edit?token=${props.token}`}>Edit</a>
                        <a href={`/restaurant/?token=${props.token}`}>Back to Home page</a>
            </div>
        </div>
    )
}

module.exports = Show;