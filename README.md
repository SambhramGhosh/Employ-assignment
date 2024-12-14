Live Demo: https://employ-assignment.vercel.app/login


Front-End Assignment: User Management Application

Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [API Endpoints](#api-endpoints)
7. [Folder Structure](#folder-structure)
8. [Enhancements](#enhancements)
9. [Known Issues](#known-issues)

---

Project Overview

This project is a User Management Application developed as part of the front-end assignment. It demonstrates CRUD operations (Create, Read, Update, Delete) and interacts with the [Reqres API](https://reqres.in/) to fetch, update, and delete user data. The primary goal is to showcase React, state management, API integration, and responsive design skills.

---

Features

1. Login Page:
   - User can log in using pre-defined credentials.
   - Stores authentication token in local storage upon successful login.

2. User List Page:
   - Displays a list of users fetched from the API.
   - Includes pagination or support for loading more users.
   - Allows navigation to edit user details or delete a user.

3. Edit User Page:
   - Enables editing user details.
   - Updates global state and reflects changes on the user list page.

4. Responsive Design:
   - Works seamlessly across devices of various screen sizes.

---

Technologies Used

- React: Front-end library for building the user interface.
- Axios: For making HTTP requests.
- React Router: For navigation between pages.
- Bootstrap: Used for basic layout and styling.
- CSS: Custom styles for components.
- Reqres API: Mock API for user data and authentication.

---

Installation

Follow these steps to run the project locally:

1. Clone the Repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install Dependencies:

   ```bash
   npm install
   ```

3. Start the Application:

   ```bash
   npm start
   ```

   The application will be accessible at `http://localhost:3000`.

---

Usage

1. Navigate to the login page and use the following credentials:
   - Email: `eve.holt@reqres.in`
   - Password: `cityslicka`

2. Upon successful login, you will be redirected to the **User List Page**, where you can:
   - View all users.
   - Click on Edit to update user details.
   - Click on Delete to remove a user.

3. Use the Edit User Page to modify user details. Changes will be reflected in the User List upon saving.

---

 API Endpoints

1. Login:
   - Endpoint: `POST /api/login`
   - Description: Authenticates the user.

2. Get Users:
   - Endpoint: `GET /api/users?page=1&per_page=12`
   - Description: Fetches a list of users.

3. Update User:
   - Endpoint: `PUT /api/users/{id}`
   - Description: Updates user details.

4. Delete User:
   - Endpoint: `DELETE /api/users/{id}`
   - Description: Deletes a user by ID.

---

Folder Structure

```
.
├── public               # Static files
├── src
│   ├── components       # React components
│   │   ├── Login.js     # Login page
│   │   ├── UserList.js  # User List page
│   │   └── EditUser.js  # Edit User page
│   ├── styles           # Custom CSS files
│   ├── App.js           # Main application component
│   └── index.js         # Entry point
├── README.md            # Project documentation
├── package.json         # Project dependencies and scripts
└── ...
```

---

Enhancements


Future Enhancements

- Add form validation for login and edit user pages.
- Improve error handling and display user-friendly error messages.
- Add infinite scroll for the user list.
- Implement search functionality to find users by name or email.
- Include authentication flow with token expiry.

---

Known Issues

1. Edit Page Refresh:
   - Editing a user might require re-fetching the user list to reflect changes immediately.

2. Limited Mock API:
   - The Reqres API returns limited user data and supports basic operations only.

