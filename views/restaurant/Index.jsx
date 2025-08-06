const React = require('react')


function Index(props) {
    const restaurants = props.restaurants || [];
    return (
        <div>
            <header>
                <link rel='stylesheet' href='/css/indexRest.css'></link>
            </header>
            <div className='top-bar'>
                <a href={`/reviews/?token=${props.token}`} className='New'>Reviews</a>
                <div className='title'><h1 className='headR'>Restaruant</h1></div>
                <a href='/users/login' className='logOut'>Log Out ←</a>
                <a href={`/restaurant/New?token=${props.token}`} className='New'>Add Restaurant</a>
            </div>
            <div className='Container'>
                {restaurants.map((restaurant) => (
                    <div className='rest-card' key={restaurant._id}>
                        <a href={`/restaurant/${restaurant._id}?token=${props.token}`}>
                            <img src={restaurant.image} alt={restaurant.name} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

module.exports = Index