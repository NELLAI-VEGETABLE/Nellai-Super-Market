# replit.md

## Overview

This is a full-stack e-commerce web application for "Nellai Vegetable Shop" built with React, Express.js, PostgreSQL, and Drizzle ORM. The application provides a complete online shopping experience with product catalog, shopping cart, checkout process, order management, and user authentication.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom green color theme for vegetable shop branding
- **State Management**: React Query (TanStack Query) for server state and React hooks for local state
- **Routing**: Wouter for client-side routing
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Authentication**: Replit Auth (OIDC) with Passport.js integration
- **Session Management**: Express sessions stored in PostgreSQL
- **API Design**: RESTful API with JSON responses

### Database Schema
- **Users**: Store user profiles with Replit Auth integration
- **Products**: Catalog with categories (vegetables, fruits, leafy-greens, root-vegetables, specialty)
- **Cart Items**: Shopping cart functionality with product references
- **Orders**: Order management with status tracking
- **Order Items**: Line items for each order
- **Payment Details**: Payment method and transaction information
- **Sessions**: Server-side session storage

## Key Components

### Authentication System
- Replit Auth integration for user authentication
- Protected routes with middleware
- Session persistence across requests
- User profile management

### Product Management
- Categorized product catalog
- Search and filtering capabilities
- Featured products section
- Product image support with fallback defaults
- Stock management (in-stock/out-of-stock)
- Pricing with optional discount display

### Shopping Cart
- Add/remove products with quantity management
- Cart persistence across sessions
- Real-time updates with optimistic UI
- Cart sidebar for quick access
- Automatic total calculations including delivery fees

### Order Processing
- Multi-step checkout process
- Customer information collection
- Payment method selection (COD and online payments)
- Order confirmation and tracking
- Order history for users

### UI/UX Features
- Responsive design with mobile-first approach
- Green color theme reflecting vegetable shop branding
- Loading states and error handling
- Toast notifications for user feedback
- Modern card-based layout

## Data Flow

1. **User Authentication**: Users authenticate via Replit Auth, sessions stored in PostgreSQL
2. **Product Browsing**: Products fetched from database with optional filtering/search
3. **Cart Operations**: Cart items stored per user, real-time updates via React Query
4. **Checkout Process**: Multi-step form validation, order creation with line items
5. **Order Management**: Orders tracked with status updates, accessible in user profile

## External Dependencies

### Database
- **PostgreSQL**: Primary database using Neon serverless PostgreSQL
- **Drizzle ORM**: Type-safe database operations with schema-first approach
- **Connection Pooling**: Neon serverless connection pooling

### Authentication
- **Replit Auth**: OIDC authentication provider
- **Passport.js**: Authentication middleware for Express
- **Sessions**: PostgreSQL-backed session storage

### Frontend Libraries
- **React Query**: Server state management and caching
- **Radix UI**: Headless UI components for accessibility
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **React Hook Form**: Form handling with validation

### Development Tools
- **Vite**: Fast development server and build tool
- **TypeScript**: Type safety across the entire stack
- **ESBuild**: Fast bundling for production builds

## Deployment Strategy

### Development
- **Dev Server**: Vite dev server for frontend, tsx for backend hot reload
- **Database**: Neon PostgreSQL with development connection string
- **Environment**: NODE_ENV=development for development-specific features

### Production Build
- **Frontend**: Vite builds to `dist/public` directory
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Static Files**: Express serves built frontend from `dist/public`
- **Database Migrations**: Drizzle Kit for schema management

### Environment Variables Required
- `DATABASE_URL`: PostgreSQL connection string
- `SESSION_SECRET`: Session encryption key
- `REPL_ID`: Replit environment identifier
- `ISSUER_URL`: OIDC issuer URL (defaults to Replit)

The application is designed for deployment on Replit with automatic builds and PostgreSQL provisioning, but can be adapted for other platforms with minimal configuration changes.