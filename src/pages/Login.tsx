import { Zap, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background radial-gradient-bg grid-pattern px-4">
      <motion.div
        className="w-full max-w-md space-y-8 rounded-2xl border border-border bg-card/80 p-8 backdrop-blur-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
            <Zap className="h-6 w-6 text-primary" />
          </div>
          <span className="font-display text-2xl font-bold text-foreground">BNBMINE</span>
          <p className="text-sm text-muted-foreground">
            {isSignUp ? "Create your account and start mining" : "Sign in to your mining dashboard"}
          </p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {isSignUp && (
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">Username</Label>
              <Input id="name" placeholder="satoshi" className="border-border bg-secondary/50 text-foreground placeholder:text-muted-foreground" />
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" className="border-border bg-secondary/50 text-foreground placeholder:text-muted-foreground" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-foreground">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" className="border-border bg-secondary/50 text-foreground placeholder:text-muted-foreground" />
          </div>

          <Button className="w-full gap-2 bg-primary font-display text-primary-foreground hover:bg-primary/90 neon-border">
            <Zap className="h-4 w-4" />
            {isSignUp ? "CREATE ACCOUNT" : "SIGN IN"}
          </Button>
        </div>

        {/* Toggle */}
        <p className="text-center text-sm text-muted-foreground">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="font-medium text-primary hover:underline"
          >
            {isSignUp ? "Sign In" : "Sign Up Free"}
          </button>
        </p>

        {/* Back */}
        <div className="text-center">
          <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
