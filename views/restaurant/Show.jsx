const React = require('react');

function Show(props) {
    return (
        <div>
            <header>
                <link rel="stylesheet" href='/css/show.css' />
            </header>

            <div className='main-content'>
                
                <div className='image-section'>
                    <h2 className='rest-title'>{props.restaurant.name}</h2>
                    <img 
                        className='restImage' 
                        src={props.restaurant.image} 
                        alt={props.restaurant.name} 
                    />
                </div>
                <div className='container'>
                    <label className='name'>Description: {props.restaurant.description}</label>
                    <label className='name'>Food: {props.restaurant.food}</label>
                    <label className='name'>Location: {props.restaurant.location}</label>

                    <div className='btn-group'>
                        <a href={`/restaurant/${props.restaurant._id}/edit?token=${props.token}`}>✏️ Edit</a>
                        <a href={`/restaurant?token=${props.token}`}>🏠 Home</a>
                        <a href={`/reviews/?token=${props.token}`}>⭐ Reviews</a>
                    </div>
                    <form 
                        action={`/restaurant/${props.restaurant._id}?_method=DELETE&token=${props.token}`} 
                        method='POST'>
                        <button type="submit" className="btn btn-danger">
                            🗑️ Delete {props.restaurant.name}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

module.exports = Show;
