import AdminLogin from "./components/AdminLogin";
import AdminProjects from "./components/AdminProjects";
import useAuth from "./hooks/useAuth";

function AdminLayout() {
  const { auth } = useAuth();

  return auth?.isLoggedIn ? (
    <div>
      <AdminProjects />
    </div>
  ) : (
    <div>
      <AdminLogin />
    </div>
  );
}

export default AdminLayout;
