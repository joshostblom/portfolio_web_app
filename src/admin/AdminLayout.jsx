import AdminLogin from "./AdminLogin";
import AdminProjects from "./AdminProjects";
import useAuth from "../hooks/useAuth";

function AdminLayout() {
  const { auth } = useAuth();

  return auth?.user ? (
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
