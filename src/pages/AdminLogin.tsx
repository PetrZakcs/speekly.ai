import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { House, Shield } from "lucide-react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      setIsLoading(false);
      return;
    }

    // TODO: Replace these credentials with your own
    const ADMIN_EMAIL = "admin@speekly.com";
    const ADMIN_PASSWORD = "admin123";

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setTimeout(() => {
        toast({
          title: "Success",
          description: "Admin access granted! Redirecting to admin panel...",
        });
        navigate("/admin");
        setIsLoading(false);
      }, 1000);
    } else {
      toast({
        title: "Access Denied",
        description: "Invalid admin credentials",
        variant: "destructive"
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full" style={{
      background: "linear-gradient(135deg, #4CAF50 0%, #337636 51%, #204921 100%)"
    }}>
      {/* Header */}
      <header className="w-full px-4 py-6">
        <nav className="flex items-center justify-center">
          <div className="flex items-center space-x-6 px-6 py-3 rounded-full" style={{backgroundColor: '#FAFAF5'}}>
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
            
            <Link to="/blog" className="text-black hover:text-gray-700 transition-colors font-medium">
              Blog
            </Link>
            
            <Link to="/login">
              <Button className="bg-green-500 hover:bg-green-600 text-white font-medium">
                Sign In
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      <div className="flex items-center justify-center p-4">
        <div className="w-full max-w-lg">
          <Card className="bg-white/95 backdrop-blur-sm border-2 border-yellow-400">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Shield className="w-8 h-8 text-yellow-600" />
                  <CardTitle className="text-2xl text-gray-800">Admin Access</CardTitle>
                </div>
                <Link to="/" className="text-2xl hover:text-gray-700 transition-colors">
                  <House className="w-6 h-6" />
                </Link>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Restricted area - Administrator credentials required
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAdminLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Admin Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter admin email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-yellow-300 focus:border-yellow-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Admin Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter admin password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="border-yellow-300 focus:border-yellow-500"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-yellow-600 hover:bg-yellow-700 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? "Verifying..." : "Access Admin Panel"}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  Need regular access?{" "}
                  <Link to="/login" className="text-green-600 hover:text-green-700 font-medium">
                    User Login
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
