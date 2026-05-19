# Urban Harvest - Admin Dashboard

A responsive admin dashboard for a food delivery platform built with React, Redux Toolkit, and React Router.

## Features

- **Login Page** - Email/password authentication with "Remember Me" option
- **Dashboard** - Stats cards (Total Orders, Revenue, Active Users, Pending Deliveries), recent orders table
- **Product Management** - Product grid with search/filter, add product modal, status tags
- **Responsive Design** - Fully responsive layout with collapsible sidebar for mobile
- **Redux State Management** - Centralized state with Redux Toolkit

## Tech Stack

- React 19 (Vite)
- Redux Toolkit
- React Router v7
- Lucide React (icons)
- CSS (no external UI library)

## Setup Instructions

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd urban-harvest

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Folder Structure

```
src/
├── components/
│   ├── Cards/        # Reusable stat card component
│   ├── Layout/       # Sidebar, Header, DashboardLayout
│   └── Table/        # Reusable orders table component
├── data/
│   └── mockData.js   # Mock/dummy data
├── pages/
│   ├── Dashboard/    # Dashboard page
│   ├── Login/        # Login page
│   └── Products/     # Product management page
├── store/
│   ├── slices/       # Redux slices (auth, dashboard, products)
│   └── index.js      # Store configuration
├── App.jsx           # App routes
├── main.jsx          # Entry point with Provider
└── index.css         # Global styles
```

## Login Credentials

Any email/password combination will work (mock authentication).

Email: admin@urbanharvest.com
Password: password123
