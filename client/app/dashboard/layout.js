import { AuthProvider } from "../context/AuthContext";
import { NotificationProvider } from "../context/NotificationContext";
import Header from "./dashboardcomponent/Header";
import Layout from "./dashboardcomponent/Layout";

export const metadata = {
  title: "coderina/Admin/Dashboard",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="h-full scroll-smooth">
      <AuthProvider>
        <NotificationProvider>
          <Layout>
            <main className="p-6 bg-white">{children}</main>
          </Layout>
        </NotificationProvider>
      </AuthProvider>
    </div>
  );
}
