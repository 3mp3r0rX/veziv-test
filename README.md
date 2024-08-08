# Portfolio Management Application

## Overview

This application is designed to manage a portfolio of works for a digital artist. It includes functionalities for creating, reading, updating, and deleting portfolio items. The application is composed of a backend built with NestJS and a frontend developed using React.

## Project Structure

- **Backend**: NestJS application managing the server-side logic and database operations.
- **Frontend**: React application providing the user interface for interacting with the portfolio.

## Backend (NestJS)

### Features

- **Data Model**:
  - **Work**: Represents a portfolio item with the following attributes:
    - `title`: The title of the work.
    - `description`: A brief description of the work.
    - `imageUrl`: URL of the work's image.
    - `clientLink`: Optional link to the client's website.
    - `status`: Indicates if the work is visible or hidden.

- **Controllers**:
  - **WorkController**: Manages HTTP requests related to portfolio items.
    - `POST /api/works`: Create a new work item.
    - `GET /api/works`: Retrieve all work items.
    - `DELETE /api/works/:id`: Delete a work item by ID.
    - `PUT /api/works/:id`: Update a work item by ID.

- **Services**:
  - **WorkService**: Contains business logic for managing work items.
    - `findAll()`: Fetch all work items from the database.
    - `create(createWorkDto)`: Create a new work item in the database.
    - `remove(id)`: Delete a work item by ID.

### Setup

1. **Install Dependencies**:
   ```bash
   cd backend
   npm install
