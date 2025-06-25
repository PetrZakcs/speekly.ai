import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Mic, Target, TrendingUp, Clock, User, LogOut } from "lucide-react";
import EditProfile from "@/components/EditProfile";

const Dashboard = () => {
  const [user] = useState({
    email: "jakub.novak@email.cz",
    name: "Jakub Novák",
    joinDate: "2024-12-15"
  });

  const [progress] = useState({
    totalExercises: 25,
    completedExercises: 8,
    streakDays: 5,
    averageScore: 78
  });

  const [showEditProfile, setShowEditProfile] = useState(false);

  const handleLogout = () => {
    // Simulate logout
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
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
                Speekly
              </span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/blog" className="text-gray-600 hover:text-gray-800 font-medium">
                Blog
              </Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Vítej, {user.name}</span>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleLogout}
                className="flex items-center space-x-2"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Welcome Section */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Tvoje cesta k lepší řeči</h1>
            <p className="text-gray-600">Sleduj svůj pokrok a pokračuj ve zlepšování své plynulosti řeči</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Dokončená cvičení</p>
                    <p className="text-2xl font-bold text-green-600">
                      {progress.completedExercises}/{progress.totalExercises}
                    </p>
                  </div>
                  <Target className="w-8 h-8 text-green-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Aktuální série</p>
                    <p className="text-2xl font-bold text-orange-600">{progress.streakDays} dní</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-orange-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Průměrné skóre</p>
                    <p className="text-2xl font-bold text-blue-600">{progress.averageScore}%</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Celkový čas cvičení</p>
                    <p className="text-2xl font-bold text-purple-600">4.5h</p>
                  </div>
                  <Clock className="w-8 h-8 text-purple-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Progress Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5" />
                <span>Přehled pokroku</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Dokončení cvičení</span>
                    <span>{Math.round((progress.completedExercises / progress.totalExercises) * 100)}%</span>
                  </div>
                  <Progress value={(progress.completedExercises / progress.totalExercises) * 100} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Skóre plynulosti</span>
                    <span>{progress.averageScore}%</span>
                  </div>
                  <Progress value={progress.averageScore} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mic className="w-5 h-5" />
                  <span>Začít cvičení</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Pokračuj v tréninku řeči s interaktivními cvičeními navrženými pro zlepšení plynulosti.
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700" disabled>
                  Cvičení (brzy dostupné)
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>Profil a nastavení</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Člen od:</strong> {new Date(user.joinDate).toLocaleDateString('cs-CZ')}</p>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setShowEditProfile(true)}
                >
                  Upravit profil
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {showEditProfile && (
        <EditProfile 
          user={user}
          onClose={() => setShowEditProfile(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;
