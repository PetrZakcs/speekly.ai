import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mic, ArrowLeft, Play, CheckCircle, Circle } from "lucide-react";

const Exercises = () => {
  const [exercises] = useState([
    {
      id: 1,
      title: "Breathing Techniques",
      description: "Learn proper breathing patterns to support fluent speech",
      difficulty: "Beginner",
      duration: "5 min",
      completed: true,
      category: "breathing"
    },
    {
      id: 2,
      title: "Slow Speech Practice",
      description: "Practice speaking at a controlled, comfortable pace",
      difficulty: "Beginner",
      duration: "10 min",
      completed: true,
      category: "pacing"
    },
    {
      id: 3,
      title: "Vowel Articulation",
      description: "Clear pronunciation of vowel sounds",
      difficulty: "Intermediate",
      duration: "8 min",
      completed: false,
      category: "articulation"
    },
    {
      id: 4,
      title: "Consonant Blends",
      description: "Practice difficult consonant combinations",
      difficulty: "Intermediate",
      duration: "12 min",
      completed: false,
      category: "articulation"
    },
    {
      id: 5,
      title: "Sentence Flow",
      description: "Maintain fluency through complete sentences",
      difficulty: "Advanced",
      duration: "15 min",
      completed: false,
      category: "fluency"
    }
  ]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/dashboard" className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Dashboard</span>
              </Link>
            </div>
            
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

      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Header Section */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Speech Exercises</h1>
            <p className="text-gray-600">Choose an exercise to improve your speech fluency</p>
          </div>

          {/* Exercises Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exercises.map((exercise) => (
              <Card key={exercise.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{exercise.title}</CardTitle>
                    {exercise.completed ? (
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    ) : (
                      <Circle className="w-6 h-6 text-gray-300 flex-shrink-0" />
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600 text-sm">{exercise.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <Badge className={getDifficultyColor(exercise.difficulty)}>
                        {exercise.difficulty}
                      </Badge>
                      <span className="text-sm text-gray-500">{exercise.duration}</span>
                    </div>

                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700"
                      disabled={exercise.completed}
                    >
                      {exercise.completed ? (
                        <>
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Completed
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 mr-2" />
                          Start Exercise
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Voice Recording Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Mic className="w-5 h-5" />
                <span>Voice Recording Practice</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <p className="text-gray-600">
                  Record yourself speaking and receive AI-powered feedback on your speech patterns.
                </p>
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  <Mic className="w-4 h-4 mr-2" />
                  Start Recording
                </Button>
                <p className="text-sm text-gray-500">
                  Note: AI analysis will be available once Supabase integration is connected
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Exercises;
