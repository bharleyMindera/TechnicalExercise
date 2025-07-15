[Back to Exercise](./exercise.md) | [Previous: Story 1](./story1.md)

# Story 2: Shopping Cart

## What We're Building

A simple shopping cart where customers can add products and see their total.

## User Stories

```
As a customer
When I see a product I want to buy  
Then I should be able to add it to my cart

As a customer
When I have items in my cart
Then I should be able to see what I've selected and the total cost
```

## Requirements

### Frontend Focus

**Add to Cart:**
- Add "Add to Cart" buttons to your product list
- Store cart items in React state (useState)
- Simple cart UI showing selected items

**Cart Display:**
- Show cart items with name and price
- Calculate and display total price
- Basic remove item functionality

**Simple Implementation:**
```javascript
// Example cart state
const [cart, setCart] = useState([
  { sku: "30124565", name: "Silver Towel", price: 15.99, quantity: 1 }
])
```

### Backend (Optional)

If you want to practice API design:

**Cart Endpoints:**
- `POST /api/cart/add` - Add item to cart
- `GET /api/cart` - Get current cart
- `DELETE /api/cart/:sku` - Remove item

## Implementation Ideas

**Frontend Only Approach:**
- Use React state to manage cart
- Store cart in localStorage to persist across page refreshes
- Focus on the user experience

**Full Stack Approach:**
- Create cart API endpoints
- Connect frontend to backend
- Handle cart operations with proper error handling

## Tips

- Start simple - cart in React state is perfectly fine
- localStorage persistence is a nice touch if you have time
- Think about user experience - where should the cart be visible?
- Don't worry about complex cart logic (quantities, validation, etc.)

Ready for authentication? Try [Story 3: User Authentication](./story3.md)
