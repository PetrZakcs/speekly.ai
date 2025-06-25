import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Mail, Settings, BarChart3, House } from "lucide-react";

const Admin = () => {
  const [stats] = useState({
    totalUsers: 156,
    waitlistEmails: 89,
    activeUsers: 67,
    completedExercises: 234
  });

  const [recentUsers] = useState([
    { id: 1, email: "john.doe@email.com", registeredAt: "2024-06-18", status: "active" },
    { id: 2, email: "jane.smith@email.com", registeredAt: "2024-06-17", status: "waitlist" },
    { id: 3, email: "peter.brown@email.com", registeredAt: "2024-06-16", status: "active" },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      {/* Header */}
      <header className="bg-white shadow-sm border-b w-full">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/dashboard" className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
                <House className="w-5 h-5" />
                <span>Back to Dashboard</span>
              </Link>
            </div>
            
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/speekly-logo.png" 
                alt="Speekly Logo" 
                className="w-8 h-8"
              />
              <span 
                className="text-xl font-bold"
                style={{
                  background: "linear-gradient(135deg, #4CAF50 0%, #337636 51%, #204921 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                Speekly Admin
              </span>
            </Link>
            
            <Link to="/admin/login">
              <Button variant="outline" className="text-sm">
                Admin Login
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Administration</h1>
            <p className="text-gray-600">Manage users and <span className="font-bold text-green-600">Speekly</span> system</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Users className="w-8 h-8 text-blue-500" />
                  <div>
                    <p className="text-2xl font-bold text-gray-800">{stats.totalUsers}</p>
                    <p className="text-gray-600">Total Users</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Mail className="w-8 h-8 text-green-500" />
                  <div>
                    <p className="text-2xl font-bold text-gray-800">{stats.waitlistEmails}</p>
                    <p className="text-gray-600">Waitlist</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Users className="w-8 h-8 text-purple-500" />
                  <div>
                    <p className="text-2xl font-bold text-gray-800">{stats.activeUsers}</p>
                    <p className="text-gray-600">Active Users</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <BarChart3 className="w-8 h-8 text-orange-500" />
                  <div>
                    <p className="text-2xl font-bold text-gray-800">{stats.completedExercises}</p>
                    <p className="text-gray-600">Completed Exercises</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Users */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentUsers.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">{user.email}</p>
                      <p className="text-sm text-gray-600">Registered: {user.registeredAt}</p>
                    </div>
                    <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                      {user.status === 'active' ? 'Active' : 'Waitlist'}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Admin Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="w-5 h-5" />
                  <span>System Settings</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-green-500 hover:bg-green-600">Manage Settings</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>Email Management</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-green-500 hover:bg-green-600">Export Waitlist</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5" />
                  <span>Analytics</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-green-500 hover:bg-green-600">View Reports</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
