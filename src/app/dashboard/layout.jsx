import Sidebar from "./components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar only */}
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-auto">
        <main className="p-6 flex-1">{children}</main>
      </div>
    </div>
  );
}
