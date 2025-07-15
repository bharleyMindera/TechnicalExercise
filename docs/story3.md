[Back to Exercise](./exercise.md) | [Previous: Story 2](./story2.md)

# Story 3: User Accounts

## What We're Building

Basic user authentication allowing users to have personal movie watchlists and ratings.

## User Stories

```
As a new user
When I want to save my movie preferences
Then I should be able to create an account

As a returning user  
When I visit the site
Then I should be able to log in and see my personal watchlist

As a logged-in user
When I rate movies or add to watchlist
Then my preferences should be saved to my account
```

## Requirements

Choose your approach based on time and interest:

### Simple Approach (Recommended)

**Frontend-focused auth simulation:**
- Create login/register forms
- Store "logged in" state in React
- Show different UI for logged in vs guest users
- Use localStorage to persist login state and personal movie data

### Full Stack Approach

**Basic auth endpoints:**
- `POST /api/auth/register` - Create new user
- `POST /api/auth/login` - Authenticate user
- Simple password handling (no need for full security)

## Implementation Ideas

**Frontend Only:**
```javascript
const [user, setUser] = useState(null)
const [isLoggedIn, setIsLoggedIn] = useState(false)

// Simple login simulation
const handleLogin = (email, password) => {
  // Basic validation
  setUser({ email: email, watchlist: [], ratings: {} })
  setIsLoggedIn(true)
  localStorage.setItem('user', JSON.stringify({ email, watchlist: [], ratings: {} }))
}
```

**Backend + Frontend:**
- Store users in a JSON file
- Simple password comparison (don't worry about hashing for now)
- Return user data with watchlist on successful login

## Example User Profile

```javascript
function UserProfile({ user, onLogout }) {
  const watchlistCount = user.watchlist?.length || 0
  const ratingsCount = Object.keys(user.ratings || {}).length
  
  return (
    <div className="user-profile">
      <h3>Welcome back, {user.email}!</h3>
      <div className="user-stats">
        <p>📋 Watchlist: {watchlistCount} movies</p>
        <p>⭐ Rated: {ratingsCount} movies</p>
      </div>
      <button onClick={onLogout}>Logout</button>
    </div>
  )
}

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && password) {
      onLogin(email, password)
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input 
        type="password" 
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  )
}
```

## Integration with Movies

**Connect user data with movie features:**
- Save watchlist to user account instead of global state
- Store user ratings per movie
- Show "My Watchlist" and "My Ratings" views
- Display user-specific movie recommendations

## Tips

- Focus on the user experience over security
- A working demo is better than perfect implementation
- Consider how authentication affects your movie features from Story 2
- Don't worry about password hashing, JWT tokens, etc. - keep it simple!
- Think about the user flow: login → see personalized movie data

## Bonus Ideas (If Time Allows)

- Show different navigation for logged in users
- Display user's recently rated movies
- Simple movie recommendation based on user's ratings
- User profile with movie statistics

That's it! You've built a complete movie discovery platform with personal accounts. Great work! 🎉 