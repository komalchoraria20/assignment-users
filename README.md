## Assignment to fetch users data and display

1. Created the project using create-react-app.
2. Time taken: 10 hours approx.

## How to run the project?

1. To install the dependencies.

```
npm install
```

2. To start the application

```
npm start
```

This will start the application in [localhost:3000](localhost:3000)

## Components.

1. **App.js**: It contains two components - Navbar & Content.
   It has different states - users, isFetching and isFetched.
   It has a function fetchUsers which makes the API call using fetch and sets the state.

2. **component/Navbar.js**: It contains a brand name and a "Get Users" button.
   It expects two props - handleGetUsersClick & isFetching.
   On the onclick event of the GetUsers button, handleGetUsersClick is called.
   The button is disabled when the data is being fetched.

3. **component/Content.js**:
   Written conditions to show the status(click on button for data / loading / no data found) with the respective messages.
   It expects three props - users, isFetching, isFetched.
   Running a map function on users and returning the UserCard component for each user.

4. **component/UserCard.js**: It displays user information.
   It expects four props - avatar, first_name, last_name and email.

## CSS

All the styles are in index.css
