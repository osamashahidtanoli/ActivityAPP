# Activity App README

## Overview

Welcome to the Activity App! This application allows users to create activities that others can attend and engage in discussions through comments. The backend is built using .NET Core with a clean architecture, utilizing Mediator for the CQRS pattern. Identity Core and Entity Framework Core are integral components for user authentication and data storage.

## Technologies Used

### Backend
- **.NET Core:** Provides a robust and cross-platform framework for building scalable and high-performance applications.
- **Clean Architecture:** Organizes code into layers for separation of concerns, maintainability, and testability.
- **Mediator for CQRS Pattern:** Implements Command Query Responsibility Segregation for efficient and scalable operations.
- **Identity Core:** Manages user authentication, registration, and authorization.
- **Entity Framework Core:** Acts as the Object-Relational Mapper (ORM) for seamless database interactions.

### Frontend
- **React:** A declarative and efficient JavaScript library for building user interfaces.
- **React Redux Toolkit:** Facilitates state management in React applications with a focus on simplicity and maintainability.
- **React Query:** A library for managing, caching, and synchronizing asynchronous data in React applications.
- **Material-UI:** A popular React UI framework that provides pre-designed components for a consistent and aesthetic user interface.

## Getting Started

1. **Backend Setup:**
   - Ensure you have [.NET Core](https://dotnet.microsoft.com/download) installed.
   - Navigate to the `API` directory.
   - Run `dotnet restore` to install project dependencies.
   - Configure your database connection in `appsettings.json`.
   - Run `dotnet ef database update` to apply migrations.
   - Execute `dotnet watch --no-hot-reload` to start the backend server.

2. **Frontend Setup:**
   - Ensure you have [Node.js](https://nodejs.org/) installed.
   - Navigate to the `client-app` directory.
   - Run `npm install` to install frontend dependencies.
   - Execute `npm run dev` to launch the React development server.

3. **Access the App:**
   - Open your web browser and visit `http://localhost:3000` to interact with the Activity App.

## Features

- **Create Activities:** Users can create new activities with details and invite others to attend.
- **Comments:** Engage in discussions by adding comments to activities.
- **User Authentication:** Secure user registration and login using Identity Core.
- **CQRS Pattern:** Efficiently separate command and query responsibilities for improved performance.

## Key Concepts

### Clean Architecture

Clean Architecture is a software design philosophy that emphasizes the separation of concerns and maintainability by organizing code into distinct layers. These layers include:

- **Entities:** Represent the core business logic and data entities.
- **Use Cases (Interactors or Application Business Rules):** Contain application-specific business rules.
- **Interfaces (Adapters):** Define the boundaries between the application and external elements, such as databases or frameworks.
- **Frameworks and Drivers:** External elements and tools like databases, web frameworks, etc.

This separation allows for flexibility, testability, and ease of maintenance. It ensures that the core business logic is not tightly coupled to external dependencies, making the codebase more modular and adaptable.


