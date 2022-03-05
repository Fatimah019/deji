import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Users from "../pages/users";
import SingleUser from "../pages/singleUser";
import Posts from "../pages/posts";
import Albums from "../pages/albums";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<SingleUser />} />
        <Route path="/users/:id/posts" element={<Posts />} />
        <Route path="/users/:id/albums" element={<Albums />} />
        <Route path="/" element={<Navigate replace to="/users" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
