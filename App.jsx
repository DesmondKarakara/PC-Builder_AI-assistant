// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext"; // your context file
import Layout from "./components/Layout";
import Configurator from "./pages/Configurator";
import Comparison from "./pages/Comparison";
import BuildReview from "./pages/BuildReview";
import Chat from "./pages/Chat";

export default function App(){
  return (
    <AppProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Configurator />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="/review" element={<BuildReview />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Layout>
    </AppProvider>
  );
}