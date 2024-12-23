import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className=" font-mono min-h-screen bg-gradient-to-b from-background to-muted p-4 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Get in Touch</h1>
          <p className="text-muted-foreground">
            Feel free to connect with me on social media or send me an email
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Social Media Links */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-semibold">Social Media</h2>
              <div className="space-y-3">
                <Link
                  href="https://github.com/miharyjoe"
                  target="_blank"
                  className="flex items-center space-x-3 hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </Link>
                <Link
                  href="https://www.youtube.com/@miharyjoeldev"
                  target="_blank"
                  className="flex items-center space-x-3 text-red-500 hover:text-red-600 transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                  <span>YouTube</span>
                </Link>
                <Link
                  href="https://x.com/miharyjoel"
                  target="_blank"
                  className="flex items-center space-x-3 text-blue-400 hover:text-blue-500 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  <span>X (Twitter)</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/mihary-jo%C3%ABl-andriamilanto-374609233/"
                  target="_blank"
                  className="flex items-center space-x-3 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-semibold">Contact Details</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a
                    href="mailto:your.email@example.com"
                    className="hover:text-primary transition-colors"
                  >
                    miharyjoel@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Antananarivo, Analamanga, Antananarivo</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center space-y-4">
            <h2 className="text-xl font-semibold">Let&apos;s Work Together</h2>
            <p className="text-muted-foreground">
              Have a project in mind? I&apos;d love to hear about it.
            </p>
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="mailto:miharyjoel@gmail.com">Send me a message</a>
            </Button>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Mihary Joël. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
