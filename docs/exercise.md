[Back to README](../README.md)

## Fullstack E-Commerce Platform Exercise

### Overview

This is a hands-on coding session where you'll work on building features for **Mindera Store** - a simple e-commerce platform. You'll be enhancing an existing codebase by adding e-commerce functionality. The goal is to demonstrate your approach to fullstack development through practical implementation.

### Before You Begin

- Create a new branch for your work
- Feel free to install any npm dependencies you need
- Ask questions if anything is unclear
- Focus on getting working functionality rather than perfect polish
- There's no expectation to complete everything - work at your own pace

### Technology Stack

- **Backend**: Express.js with TypeScript
- **Frontend**: React with TypeScript  
- **Data Layer**: JSON files (simulating a database)
- **GraphQL Layer**: Apollo Server (optional - you can bypass if preferred)

### Business Context

**Mindera Store** sells home and lifestyle products. The platform needs basic e-commerce functionality for customers to browse and purchase products.

### Stories

Choose which stories to work on based on your interests and strengths. There's no requirement to complete all of them.

**Story 1: Product Catalog** *(Recommended starting point)*
- Build an API to serve product data
- Create a frontend to display products
- Add basic search and filtering

**Story 2: Shopping Cart** *(If time allows)*
- Add cart functionality to store selected items
- Calculate totals including tax
- Persist cart state

**Story 3: User Authentication** *(Advanced)*
- Implement user registration and login
- Protect certain routes
- Associate carts with users

### Getting Started

1. Review the existing product data in `packages/api/products.json` 
2. Start with [Story 1](./story1.md) to build the foundation
3. Progress through stories as time allows
4. Focus on demonstrating your development approach

### Notes

- The existing "Hello World" implementation can be replaced with your solution
- You can choose to use the GraphQL aggregator or call the API directly
- Working functionality is more important than perfect UI/UX
- Document any assumptions or trade-offs you make
- Include a brief README update explaining how to run your solution

### Tips

- Start with backend API design if that's your strength
- Or start with frontend if you prefer UI work
- Don't worry about authentication complexity - simple solutions are fine
- Focus on clean, readable code
- Ask for clarification on anything unclear

Ready to begin? Head to [Story 1](./story1.md) to start building!
