const React = require('react');

function Index(props) {
  const reviews = Array.isArray(props.reviews) ? props.reviews : [];

  return (
    <div>
      <header>
        <link rel='stylesheet' href='/css/indexRest.css' />
      </header>
      <div className='top-bar'>
        <a href={`/reviews/new?token=${props.token}`} className='New'>Add Review</a>
        <a href={`/restaurant?token=${props.token}`}>Back to Home page</a>
      </div>
      <div className='Container'>
        {reviews.map((review, i) => {
          if (!review || !review._id) return null; 
          return (
            <div className='rest-card' key={review._id}>
              <p className='name'>Name: {review.name}</p>
              <p className='name'>Restaurant: {review.restaurant}</p>
              <p className='name'>Review: {review.review}</p>
              <a href={`/reviews/${review._id}/edit?token=${props.token}`}>Edit</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

module.exports = Index;
