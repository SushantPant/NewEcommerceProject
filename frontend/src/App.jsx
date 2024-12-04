import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminLayout from "./components/admin-view/AdminLayout";
import AdminOrders from "./components/admin-view/AdminOrders";
import AdminDashboard from "./components/admin-view/AdminDashboard";
import AdminFeatures from "./components/admin-view/AdminFeatures";
import AdminProducts from "./components/admin-view/AdminProducts";
import ShoppingView from "./components/shopping-view/ShoppingView";
import NotFound from "./pages/auth/NotFound";
import ShoppingHome from "./components/shopping-view/ShoppingHome";
import ShoppingList from "./components/shopping-view/ShoppingList";
import Checkout from "./components/shopping-view/Checkout";
import Account from "./components/shopping-view/Account";
import CheckAuth from "./components/common/check-auth";
import UnAuthPage from "./pages/auth/UnAuthPage";

function App() {
  const isAuthenticated = false;
  const user = {};
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<AuthLogin />}></Route>
          <Route path="register" element={<AuthRegister />}></Route>
        </Route>
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="order" element={<AdminOrders />}></Route>
          <Route path="dashboard" element={<AdminDashboard />}></Route>
          <Route path="features" element={<AdminFeatures />}></Route>
          <Route path="products" element={<AdminProducts />}></Route>
        </Route>
        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingView />
            </CheckAuth>
          }
        >
          <Route path="home" element={<ShoppingHome />}></Route>
          <Route path="list" element={<ShoppingList />}></Route>
          <Route path="checkout" element={<Checkout />}></Route>
          <Route path="account" element={<Account />}></Route>
        </Route>
        <Route path="/unauthorized" element={<UnAuthPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
