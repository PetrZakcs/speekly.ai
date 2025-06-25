
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { X, User, Mail, MessageSquare, Trash2 } from "lucide-react";

interface EditProfileProps {
  user: {
    email: string;
    name: string;
    joinDate: string;
  };
  onClose: () => void;
}

const EditProfile = ({ user, onClose }: EditProfileProps) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [about, setAbout] = useState("");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleSave = () => {
    toast({
      title: "Úspěch",
      description: "Profil byl úspěšně aktualizován!",
    });
    onClose();
  };

  const handleContactSupport = () => {
    toast({
      title: "Kontakt",
      description: "Přesměrování na podporu...",
    });
    // Here you would redirect to support or open email client
    window.open("mailto:support@speekly.com?subject=Podpora%20-%20Dotaz", "_blank");
  };

  const handleDeleteProfile = () => {
    if (showDeleteConfirm) {
      toast({
        title: "Profil smazán",
        description: "Váš profil byl úspěšně smazán.",
        variant: "destructive"
      });
      // Here you would handle actual profile deletion
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } else {
      setShowDeleteConfirm(true);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl bg-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span>Upravit profil</span>
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Jméno</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Vaše jméno"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="váš@email.cz"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="about">O mně</Label>
              <Textarea
                id="about"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                placeholder="Napište něco o sobě..."
                rows={4}
              />
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
              Uložit změny
            </Button>
            
            <Button 
              variant="outline" 
              onClick={handleContactSupport}
              className="flex items-center space-x-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Kontaktovat podporu</span>
            </Button>
            
            <div className="pt-4 border-t">
              {!showDeleteConfirm ? (
                <Button 
                  variant="destructive" 
                  onClick={handleDeleteProfile}
                  className="w-full flex items-center space-x-2"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Smazat profil</span>
                </Button>
              ) : (
                <div className="space-y-2">
                  <p className="text-sm text-red-600 text-center">
                    Opravdu chcete smazat svůj profil? Tato akce je nevratná.
                  </p>
                  <div className="flex space-x-2">
                    <Button 
                      variant="destructive" 
                      onClick={handleDeleteProfile}
                      className="flex-1"
                    >
                      Ano, smazat
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setShowDeleteConfirm(false)}
                      className="flex-1"
                    >
                      Zrušit
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditProfile;
