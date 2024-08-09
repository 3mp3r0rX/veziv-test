# Portfolio Management Application

## Overview

This application manages a portfolio of works for a digital artist. It consists of a backend built with NestJS and a frontend developed using React. Users can create, read, update, and delete portfolio items, which include details such as title, description, image, and client link.

## Frontend (React)

### Features

- **Components**:
  - **WorkForm**: Allows users to add or update portfolio items.
  - **WorkList**: Displays portfolio items and provides options to delete or update.

- **Services**:
  - **workService.ts**: Contains functions to interact with the backend API.
    - `fetchWorks()`: Fetches all works from the backend.
    - `addWork(work)`: Adds a new work item to the backend.
    - `deleteWork(id)`: Deletes a work item from the backend.

### Setup

1. **Install Dependencies**:
   Navigate to the frontend directory and install the required packages:
   ```bash
   cd frontend
   npm install
