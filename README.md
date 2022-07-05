# Adjustable Timer

## Description

This is a proof-of-concept single-page-app (SPA) made using [Create React App](https://github.com/facebook/create-react-app) and [Redux Toolkit](https://redux-toolkit.js.org/). The app tracks time by using global state to store the current and target time, as well as the duration between the two. Reducers responsible for advancing the time, adding time, and setting the target time are included and connected to various components via the [`connect()` function](https://react-redux.js.org/using-react-redux/connect-mapstate).

### Libraries Used

* [React](https://reactjs.org)
* [Redux Toolkit](https://redux-toolkit.js.org)
* [Material UI](https://mui.com)

## Installation and Usage

To use this app, clone the source code:

```bash
git clone sss
```

In a terminal at the root directory, run `npm start`. This will open a browser at [localhost 3000](https://localhost:3000) where you can see and interact with the app. Using Firefox or Chrome with React DevTools and Redux DevTools is recommended.

For more details, check out the [Create React App README](CRA-README.md) included in the source code.
