import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "./Chat";
import { GlobalStyle } from "./GlobalStyles";
import Home from "./Home";
function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
