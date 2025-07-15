[Back to Exercise](./exercise.md) | [Previous: Story 2](./story2.md)

# Story 3: User Authentication

## What We're Building

Basic user authentication - allowing users to register and log in.

## User Stories

```
As a new customer
When I want to save my cart or place orders
Then I should be able to create an account

As a returning customer  
When I visit the site
Then I should be able to log in to access my account
```

## Requirements

Choose your approach based on time and interest:

### Simple Approach (Recommended)

**Frontend-focused auth simulation:**
- Create login/register forms
- Store "logged in" state in React
- Show different UI for logged in vs guest users
- Use localStorage to persist login state

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
  setUser({ email: email })
  setIsLoggedIn(true)
  localStorage.setItem('user', email)
}
```

**Backend + Frontend:**
- Store users in a JSON file
- Simple password comparison (don't worry about hashing for now)
- Return user data on successful login

## Tips

- Focus on the user experience over security
- A working demo is better than perfect implementation
- Consider how authentication affects your cart from Story 2
- Don't worry about password hashing, JWT tokens, etc. - keep it simple!

## Simple Example

```javascript
function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      onLogin(email)
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
      <button type="submit">Login</button>
    </form>
  )
}
```

## Bonus Ideas (If Time Allows)

- Show different navigation for logged in users
- Associate cart with logged in user
- Simple profile display
- Logout functionality

That's it! You've built the core features of an e-commerce platform. Great work! 🎉 