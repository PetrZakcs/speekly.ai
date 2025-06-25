import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Youtube, Facebook, Instagram, Twitter, MessageCircle } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDiscordLink, setShowDiscordLink] = useState(false);
  const { toast } = useToast();

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('waitlist_signups')
        .insert({
          email: email,
          message: message || null
        });

      if (error) {
        console.error('Supabase error:', error);
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success!",
          description: "Thank you for joining our waitlist!",
        });
        setEmail("");
        setMessage("");
        setShowDiscordLink(true);
      }
    } catch (error) {
      console.error('Error submitting to waitlist:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
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
            <div className="flex items-center space-x-2">
              <img 
                src="speekly-logo.png" 
                alt="speekly-logo" 
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
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="w-full px-4 py-2 text-center">
        <div className="max-w-[90%] mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8" style={{color: '#FAFAF5'}}>
            <span
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold"
              style={{color: '#FAFAF5'}}
            >
              Find Your Voice with Speekly
            </span>
          </h1>
          
          <p className="text-xl md:text-3xl lg:text-4xl mb-12 opacity-90 max-w-5xl mx-auto" style={{color: '#FAFAF5'}}>
            AI-powered support for people who stutter — available anytime, anywhere.
          </p>

          <Card className="max-w-5xl mx-auto p-12 bg-white/95 backdrop-blur-sm">
            <div className="space-y-8">
              <p className="text-gray-700 leading-relaxed text-lg">
                <span 
                  className="font-bold text-xl"
                  style={{
                    background: "linear-gradient(135deg, #4CAF50 0%, #337636 51%, #204921 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                >Speekly</span> is a mobile app designed to help people with speech challenges like stuttering. 
                We combine the power of speech analysis, interactive exercises, and personalized progress tracking 
                — all powered by artificial intelligence and speech therapy principles.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-lg">
                Whether you want to improve speech fluency, build confidence, or simply track your progress, 
                <span 
                  className="font-bold"
                  style={{
                    background: "linear-gradient(135deg, #4CAF50 0%, #337636 51%, #204921 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                > Speekly</span> is here to support your journey — at your own pace and time.
              </p>

              <div className="flex items-center justify-center space-x-2 text-gray-600 text-lg">
                <span>🚀</span>
                <span>We're preparing our first version.</span>
              </div>

              {/* Waitlist Signup Form */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 mt-8">
                <h3 className="text-2xl font-semibold text-green-800 mb-4">Join Our Waitlist!</h3>
                <p className="text-green-700 mb-6 text-lg">
                  Be the first to know when Speekly launches and get early access.
                </p>
                
                <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full"
                    required
                  />
                  <Input
                    type="text"
                    placeholder="How did you hear about us?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full"
                  />
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    {isSubmitting ? "Joining..." : "Join Waitlist"}
                  </Button>
                </form>
              </div>

              {/* Discord Community Link - Shows after successful signup */}
              {showDiscordLink && (
                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-8 mt-8">
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <MessageCircle className="w-8 h-8 text-indigo-600" />
                    <h3 className="text-2xl font-semibold text-indigo-800">Join Our Community!</h3>
                  </div>
                  <p className="text-indigo-700 mb-6 text-lg">
                    Connect with other Speekly users, share your journey, and get support from our community.
                  </p>
                  <a 
                    href="https://discord.gg/Q7g6dASY" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-3 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-medium transition-colors text-lg"
                  >
                    <MessageCircle className="w-6 h-6" />
                    <span>Join Discord Community</span>
                  </a>
                </div>
              )}
            </div>
          </Card>
        </div>
      </main>

      {/* Footer with Social Media Links */}
      <footer className="w-full px-4 py-8 text-center text-white/80">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex justify-center space-x-6">
            <a href="https://www.youtube.com/@speekly_ai" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
              <Youtube className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/speekly.ai/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://x.com/SAI1215824" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
          <p>&copy; 2025 Speekly. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
