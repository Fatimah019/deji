/**
 * @description Import needed libraries to display data on user page
 * @author By Deji Adebayo
 */
//Begin Import statement
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Users from "../pages/users";
import SingleUser from "../pages/singleUser";
import Posts from "../pages/posts";
import Albums from "../pages/albums";

/**Begin route
 * @description this page manages the routing of the entire application
 * @returns Routes
 */
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
/** End Route */

export default AppRoutes;
