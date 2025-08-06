const React = require('react');

function Index(props) {
  const restaurants = props.restaurants || [];

  return (
    <div>
      <header>
        <link rel='stylesheet' href='/css/indexRest.css' />
      </header>

      <div className='navbar'>
        <h1 className='navbar-title'>🍴 Restaurant</h1>
        <div className='navbar-actions'>
          <a href={`/reviews/?token=${props.token}`} className='btn'>⭐ Reviews</a>
          <a href={`/restaurant/New?token=${props.token}`} className='btn'>➕ Add Restaurant</a>
          <a href='/users/login' className='btn logout'>🚪 Log Out</a>
        </div>
      </div>

      <div className='Container'>
        {restaurants.map((restaurant) => (
          <div className='rest-card' key={restaurant._id}>
            <a href={`/restaurant/${restaurant._id}?token=${props.token}`}>
              <img src={restaurant.image} alt={restaurant.name} />
            </a>
            <div className="rest-card-name">{restaurant.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

module.exports = Index;
