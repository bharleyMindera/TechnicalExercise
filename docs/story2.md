[Back to Exercise](./exercise.md) | [Previous: Story 1](./story1.md)

# Story 2: Movie Management

## What We're Building

Movie management functionality where users can rate movies, add them to watchlists, and track what they've watched.

## User Stories

```
As a user
When I see a movie I'm interested in  
Then I should be able to add it to my watchlist

As a user
When I watch a movie
Then I should be able to mark it as watched and give it a rating

As a user
When I want to organize my movies
Then I should be able to filter by watched/unwatched status
```

## Requirements

### Frontend Focus

**Watchlist Features:**
- "Add to Watchlist" button on each movie
- Simple watchlist display showing saved movies
- Remove from watchlist functionality

**Rating & Status:**
- Mark movies as watched/unwatched
- Star rating system (1-5 stars)
- Filter movies by watched status

**Movie Organization:**
- Filter by status (all, watchlist, watched)
- Sort by rating, year, or title
- User's personal movie collection view

**Simple Implementation:**
```javascript
// Example movie state with user data
const [movies, setMovies] = useState([
  { 
    id: "movie-001", 
    title: "Inception", 
    director: "Christopher Nolan",
    year: 2010,
    genre: "Sci-Fi",
    rating: 8.8,
    userRating: null,
    inWatchlist: false,
    watched: false
  }
])
```

### Backend (Optional)

If you want to practice API design:

**Movie User Data Endpoints:**
- `POST /api/movies/:id/watchlist` - Add/remove from watchlist
- `POST /api/movies/:id/rating` - Rate a movie
- `PATCH /api/movies/:id/watched` - Mark as watched/unwatched
- `GET /api/movies/watchlist` - Get user's watchlist

## Implementation Ideas

**Frontend Only Approach:**
- Use React state to manage user's movie preferences
- Store watchlist and ratings in localStorage
- Focus on the user experience and movie interaction

**Full Stack Approach:**
- Create movie preference API endpoints
- Connect frontend to backend
- Handle user data with proper error handling

## Example Watchlist Component

```javascript
function MovieCard({ movie, onAddToWatchlist, onRateMovie }) {
  const [userRating, setUserRating] = useState(movie.userRating || 0)
  
  const handleRating = (rating) => {
    setUserRating(rating)
    onRateMovie(movie.id, rating)
  }
  
  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <p>{movie.director} • {movie.year}</p>
      <p>Genre: {movie.genre}</p>
      <p>Rating: ⭐ {movie.rating}/10</p>
      
      <div className="user-actions">
        <button 
          onClick={() => onAddToWatchlist(movie.id)}
          className={movie.inWatchlist ? 'in-watchlist' : ''}
        >
          {movie.inWatchlist ? '✓ In Watchlist' : '+ Add to Watchlist'}
        </button>
        
        <div className="rating">
          Your Rating: 
          {[1,2,3,4,5].map(star => (
            <span 
              key={star}
              onClick={() => handleRating(star)}
              className={star <= userRating ? 'filled' : 'empty'}
            >
              ⭐
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
```

## Tips

- Start simple - movie preferences in React state is perfectly fine
- localStorage persistence is a nice touch if you have time
- Think about user experience - how do users discover and track movies?
- Don't worry about complex validation or edge cases
- Focus on the core workflow: browse → add to watchlist → watch → rate

Ready for user accounts? Try [Story 3: User Accounts](./story3.md)
