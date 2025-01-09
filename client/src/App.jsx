import { BrowserRouter, Routes, Route } from "react-router";
import { Typography } from "@mui/material";
import { Provider } from 'react-redux';

import RecipeOverview from "./pages/RecipeOverview";
import RecipeDetails from "./pages/RecipeDetails";
import { store } from "./redux/store";
import UserFeedback from "./components/UserFeedback";

import './App.css';

function App() {

  return (
    <>
      <Provider store={store}>
        <UserFeedback/>
        <Typography variant="h2">Recipe app</Typography>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RecipeOverview />} />
            <Route path="/details/:id" element={<RecipeDetails />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App;
