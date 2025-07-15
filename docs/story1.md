[Back to Exercise](./exercise.md)

# Story 1: Movie Catalog

## What We're Building

A simple movie catalog where users can browse and search through available movies.

## User Stories

```
As a user  
When I visit the Mindera Cinema homepage
Then I should see a list of movies

As a user
When I want to find specific movies  
Then I should be able to search by title or filter by genre
```

## Requirements

### Backend (API)

**Movie API Endpoint:**
Create a simple endpoint to serve movie data:

- `GET /api/movies` - Return all movies from the JSON file
- `GET /api/movies?search=inception` - Filter movies by title (optional)
- `GET /api/movies?genre=action` - Filter by genre (optional)

**Response format:**
```json
{
  "movies": [
    {
      "id": "movie-001",
      "title": "Inception",
      "director": "Christopher Nolan",
      "year": 2010,
      "genre": "Sci-Fi",
      "rating": 8.8,
      "duration": 148,
      "description": "A thief who steals corporate secrets through dream-sharing technology...",
      "poster": "/images/inception.jpg"
    }
  ]
}
```

### Frontend

**Movie Display:**
- Show movies in a simple grid or list layout
- Display: title, director, year, genre, and rating
- Basic styling (doesn't need to be fancy)

**Search & Filter (Optional):**
- Add a search input box to filter by movie title
- Filter dropdown for genre (all, action, comedy, drama, etc.)
- Show "No movies found" when filters have no results

## Implementation Tips

**For Backend:**
- Use the existing `movies.json` file as your data source
- Start with a simple endpoint that returns all movies
- Add search/filtering functionality if you have time

**For Frontend:**
- Replace the current "Hello World" component
- Use basic React hooks (useState, useEffect) 
- Focus on functionality over styling

## Getting Started

1. **Backend first approach:** Create the API endpoint, test it, then build the frontend
2. **Frontend first approach:** Mock the API response, build the UI, then connect to real API
3. **Choose whatever feels most natural to you!**

## Example Implementation Ideas

**Simple API (Express):**
```javascript
app.get('/api/movies', (req, res) => {
  // Read movies.json
  // Filter by search or genre if provided
  // Return movies
})
```

**Simple Frontend (React):**
```javascript
function MovieList() {
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    // Fetch from /api/movies
    // Update state
  }, [])
  
  return (
    // Map over movies and display them
  )
}
```

Ready for more? Check out [Story 2: Movie Management](./story2.md)
