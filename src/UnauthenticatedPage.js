import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LogInPage";
import SignInPage from "./pages/SignInPage";
import MusicPlayerPage from "./pages/MusicPlayerPage";

export default function UnauthenticatedPage() {
  return (
    <>
      <Routes>
        <Route index element={<MusicPlayerPage to="" />} />
        <Route path="/" element={<MusicPlayerPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </>
  );
}
