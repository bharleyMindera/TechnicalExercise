# Mindera Fullstack Developer Exercise

This repository contains a hands-on coding exercise where you'll work on building features for **Mindera Store** - a simple e-commerce platform. This is designed to be a collaborative session where you can demonstrate your approach to fullstack development.

## 🎯 What You'll Be Building

You'll be enhancing an existing codebase by adding e-commerce functionality, demonstrating skills in:

- **Backend Development**: API design and data handling
- **Frontend Development**: React components and user interfaces
- **Integration**: Connecting frontend and backend together

### Architecture

The application uses a simple 3-tier architecture:

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│                 │    │                 │    │                 │
│   React App     │────│   GraphQL       │────│   Express API   │
│   (Frontend)    │    │   Aggregator    │    │   (Backend)     │
│   Port 3000     │    │   Port 3001     │    │   Port 3002     │
│                 │    │                 │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

**Note**: The GraphQL aggregator is optional - you can call the Express API directly if preferred.

## 🚀 Quick Start

### Prerequisites

- **Node.js 20+** (use [nvm](https://github.com/nvm-sh/nvm) for version management)
- **Git**
- Your favorite code editor

### Setup Instructions

1. **Clone and setup the repository:**
   ```bash
   git clone <repository-url>
   cd TechnicalExercise
   npm install
   ```

2. **Create your feature branch:**
   ```bash
   git checkout -b your-name/exercise
   ```

3. **Start the development environment:**
   ```bash
   npm start
   ```
   This runs all services concurrently:
   - Frontend: http://localhost:3000
   - GraphQL: http://localhost:3000/graphql  
   - API: http://localhost:3000/api

4. **Verify the setup:**
   - Visit http://localhost:3000 - you should see the current "Hello World" app
   - Check http://localhost:3000/api - you should see a JSON response

### Development Commands

```bash
# Run all services in development mode
npm start

# Run tests across all packages  
npm test

# Run tests in watch mode (in specific package)
cd packages/app && npm run test:watch

# Build all packages for production
npm run build

# Format code with Prettier
npm run format

# Type check all packages
npm run type-check
```

## 📚 Exercise Structure

### Available Stories


1. **[Product Catalog](docs/story1.md)** *(Starting point)*
   - Build an API to serve product data
   - Create a frontend to display products
   - Add basic search functionality

2. **[Shopping Cart](docs/story2.md)**
   - Add cart functionality to store selected items
   - Calculate totals and manage cart state
   - Basic add/remove operations

3. **[User Authentication](docs/story3.md)**
   - Implement user registration and login
   - Show different UI for logged in users
   - Simple state management for auth

## 🎯 Getting Started

1. **Read the [Exercise Overview](docs/exercise.md)** - Understand the context and approach
2. **Start with [Story 1](docs/story1.md)** - Product catalog is a great foundation
3. **Work at your own pace** - There's no pressure to complete everything
4. **Ask questions** - We're here to help and clarify anything

## 💡 Approach

### Choose Your Path
- **Backend-focused?** Start with API endpoints and data handling
- **Frontend-focused?** Begin with React components and user interface
- **Full-stack?** Work on both and connect them together

### What We're Interested In
- Your problem-solving approach
- How you structure and organize code
- Your decision-making process
- How you handle challenges or unknowns

### Time Management
- **40-45 minutes total** - work at a comfortable pace
- Aim for working functionality over perfect polish
- Focus on demonstrating your skills and approach
- It's completely fine if you don't finish everything

## 🔧 Technical Notes

### Package Structure
- `packages/api/` - Express.js backend service
- `packages/aggregator/` - GraphQL middleware (optional)
- `packages/app/` - React frontend application

### Data Storage
- Use JSON files to simulate database storage
- Product data is provided in `packages/api/products.json`
- You can create additional data files as needed

### Environment Variables
Services run on predefined ports:
- API: PORT=3002
- Aggregator: PORT=3001  
- App: PORT=3000

## 📋 Wrapping Up

When you're ready to finish:

1. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Add e-commerce features"
   git push origin your-name/exercise
   ```

2. **Be ready to discuss:**
   - What you built and how it works
   - Decisions you made along the way
   - What you might do differently with more time
   - Any challenges you encountered

## 🤔 Need Help?

- **Technical Questions**: Ask during the session - we're here to help!
- **Unclear Requirements**: Don't hesitate to ask for clarification
- **Stuck on Something**: Talk through your thought process - that's valuable too

## 📖 Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://reactjs.org/)
- [Apollo GraphQL](https://www.apollographql.com/docs/)
- [Jest Testing Framework](https://jestjs.io/)

---

**Remember**: This is about demonstrating your development approach and problem-solving skills. Focus on building something that works and be ready to discuss your decisions!

Good luck! 🚀
