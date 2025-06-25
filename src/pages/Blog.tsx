import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Youtube, House } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Stuttering: A Comprehensive Guide",
      excerpt: "Learn about different types of stuttering, their causes, and effective management strategies.",
      author: "Dr. Jane Smith",
      date: "2024-06-15",
      category: "Education",
      readTime: "8 min read",
      requiresLogin: false
    },
    {
      id: 2,
      title: "The Role of AI in Speech Therapy",
      excerpt: "Discover how artificial intelligence is revolutionizing speech therapy and helping people improve their communication skills.",
      author: "Tech Team",
      date: "2024-06-10",
      category: "Technology",
      readTime: "6 min read",
      youtubeUrl: "https://www.youtube.com/watch?v=example2",
      requiresLogin: true
    },
    {
      id: 3,
      title: "Building Confidence Through Speech Practice",
      excerpt: "Practical tips and exercises for building confidence while working on speech fluency.",
      author: "Dr. Peter Johnson",
      date: "2024-06-05",
      category: "Tips",
      readTime: "5 min read",
      requiresLogin: true
    },
    {
      id: 4,
      title: "Interview: Living with Stuttering",
      excerpt: "A candid conversation with individuals who have overcome speech challenges and found their voice.",
      author: "Sarah Williams",
      date: "2024-05-28",
      category: "Interview",
      readTime: "12 min read",
      youtubeUrl: "https://www.youtube.com/watch?v=example4",
      requiresLogin: false
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Education": return "bg-blue-100 text-blue-800";
      case "Technology": return "bg-purple-100 text-purple-800";
      case "Tips": return "bg-green-100 text-green-800";
      case "Interview": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  // Simulate logged in state - in real app this would come from context/state
  const isLoggedIn = true; // Change to false for testing

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      {/* Header */}
      <header className="bg-white shadow-sm border-b w-full">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
              <House className="w-5 h-5" />
            </Link>
            
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/speekly-logo.png" 
                alt="Speekly Logo" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-green-600">Speekly</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Header Section */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              <span className="text-green-600 font-extrabold">Speekly</span> Blog
            </h1>
            <p className="text-gray-600 text-lg">Insights, tips, and resources for speech improvement</p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge className={getCategoryColor(post.category)}>
                        {post.category}
                      </Badge>
                      {post.requiresLogin && !isLoggedIn && (
                        <Badge variant="outline" className="text-xs">
                          Login Required
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600 text-sm line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <div className="text-xs text-gray-500">{post.readTime}</div>
                    
                    <div className="space-y-2">
                      <Button 
                        className="w-full" 
                        variant="outline"
                        disabled={post.requiresLogin && !isLoggedIn}
                      >
                        {post.requiresLogin && !isLoggedIn ? "Please log in to read" : "Read Article"}
                      </Button>
                      
                      {post.youtubeUrl && (isLoggedIn || !post.requiresLogin) && (
                        <Button 
                          className="w-full bg-red-600 hover:bg-red-700 text-white"
                          onClick={() => window.open(post.youtubeUrl, '_blank')}
                        >
                          <Youtube className="w-4 h-4 mr-2" />
                          Watch Interview
                        </Button>
                      )}
                      
                      {post.youtubeUrl && !isLoggedIn && post.requiresLogin && (
                        <Button 
                          className="w-full bg-gray-400 cursor-not-allowed"
                          disabled
                        >
                          <Youtube className="w-4 h-4 mr-2" />
                          Video - Login Required
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Stay Updated</h2>
              <p className="text-gray-600 mb-4">
                Subscribe to our newsletter for the latest speech therapy tips and <span className="font-bold text-green-600">Speekly</span> updates.
              </p>
              <div className="max-w-md mx-auto">
                <p className="text-sm text-gray-500">
                  Newsletter functionality will be available after Supabase integration.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Blog;
