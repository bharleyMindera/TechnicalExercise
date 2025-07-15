[Back to Exercise](./exercise.md)

# Story 1: Product Catalog

## What We're Building

A simple product catalog where customers can view and search through available products.

## User Stories

```
As a customer  
When I visit the Mindera Store homepage
Then I should see a list of available products

As a customer
When I want to find specific products  
Then I should be able to search by product name
```

## Requirements

### Backend (API)

**Product API Endpoint:**
Create a simple endpoint to serve product data:

- `GET /api/products` - Return all products from the JSON file
- `GET /api/products?search=towel` - Filter products by name (optional)

**Response format:**
```json
{
  "products": [
    {
      "sku": "30124565",
      "name": "Silver Egyptian Cotton Towel",
      "description": "Our Soft & Absorbent Towel...",
      "category": "Towels",
      "color": "Silver",
      "price": 15.99,
      "inStock": true
    }
  ]
}
```

### Frontend

**Product Display:**
- Show products in a simple list or grid
- Display: name, price, category, and stock status
- Basic styling (doesn't need to be fancy)

**Search (Optional):**
- Add a search input box
- Filter products by name as you type
- Show "No products found" when search has no results

## Implementation Tips

**For Backend:**
- Use the existing `products.json` file as your data source
- Start with a simple endpoint that returns all products
- Add search functionality if you have time

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
app.get('/api/products', (req, res) => {
  // Read products.json
  // Filter by search if provided
  // Return products
})
```

**Simple Frontend (React):**
```javascript
function ProductList() {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    // Fetch from /api/products
    // Update state
  }, [])
  
  return (
    // Map over products and display them
  )
}
```

Ready for more? Check out [Story 2: Shopping Cart](./story2.md)
