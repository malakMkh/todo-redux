Redux Toolkit
I started using Redux Toolkit in this project to make it easier to manage my state. Redux Toolkit provides a number of helpful features, such as creating actions and reducers, and managing the store.

To use Redux Toolkit, I first installed the @reduxjs/toolkit and react-redux packages. Then, I created a Redux state slice for my theme. The state slice contains the current theme, as well as a function to change the theme.

I also created a Redux store and provided it to React. Finally, I used the Redux state and actions in my React components.

I found Redux Toolkit to be very easy to use. It made it much easier to manage my state, and it helped me to write cleaner code.

Example
Here is an example of how I used Redux Toolkit in this project:

import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
name: 'theme',
initialState: {
currentTheme: 'light',
},
reducers: {
changeTheme(state, action) {
state.currentTheme = action.payload;
},
},
});

export default themeSlice.reducer;

This code creates a Redux state slice for the theme. The slice contains the current theme, as well as a function to change the theme.

I hope this helps!
