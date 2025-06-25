import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { House } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
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

    // Check for admin login
    if (email === "admin@speekly.com" && password === "admin123") {
      setTimeout(() => {
        toast({
          title: "Success",
          description: "Admin login successful! Redirecting to admin panel...",
        });
        navigate("/admin");
        setIsLoading(false);
      }, 1000);
      return;
    }

    setTimeout(() => {
      toast({
        title: "Success",
        description: "Login successful! Redirecting to dashboard...",
      });
      navigate("/dashboard");
      setIsLoading(false);
    }, 1000);
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
            
            <Button className="bg-green-700 hover:bg-green-800 text-white font-medium" disabled>
              Sign In
            </Button>
          </div>
        </nav>
      </header>

      <div className="flex items-center justify-center p-4">
        <div className="w-full max-w-lg">
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl text-gray-800">Welcome Back</CardTitle>
                <Link to="/" className="text-2xl hover:text-gray-700 transition-colors">
                  <House className="w-6 h-6" />
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-green-700 hover:bg-green-800"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-green-600 hover:text-green-700 font-medium">
                    Sign up
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

export default Login;
