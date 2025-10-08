
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { 
    Search, // For Investor Discovery
    Rocket, // For Accelerator/Grant Connect
    Presentation, // For Pitch Day Sessions
    Shield, // For Zero Equity
    Sparkles, // For AI-Powered Funding Readiness
    Trello, // For AI toolkits & smart templates
} from "lucide-react" 
import LoginForm from "@/components/auth/login-form"
// import { useAuth } from "@/contexts/AuthContext"

export default function GetFundedComponent() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  // const { user } = useAuth()

  const sessionTypes = [
    {
      icon: Search, // Relevant Icon: Search/Discovery
      title: "Investor Discovery & Matching",
      description: "Access curated lists of global angel investors, syndicates, VCs, and institutional Investors.",
      color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      glowColor: "group-hover:shadow-blue-500/25",
    },
    {
      icon: Rocket, // Relevant Icon: Accelerator/Launch
      title: "Accelerator & Grant Connect",
      description: "Explore vetted Accelerators, Incubators, and Grant programs across the globe-in Real Time.",
      color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      glowColor: "group-hover:shadow-yellow-500/25",
    },
    {
      icon: Presentation, // Relevant Icon: Pitch/Presentation
      title: "Pitch Day Sessions & Demo Events",
      description: "Present your startup to Investors and Ecosystem partners directly in our exclusive Pitch Day & Demo events.",
      color: "bg-green-500/20 text-green-400 border-green-500/30",
      glowColor: "group-hover:shadow-green-500/25",
    },
    {
      icon: Shield, // Relevant Icon: Protection/Security (Equity)
      title: "Zero Equity. 100 % Founder-owned",
      description: "We don't take equity—your company stays fully yours while you scale.",
      color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      glowColor: "group-hover:shadow-purple-500/25",
    },
    {
      icon: Sparkles, // Relevant Icon: AI/Intelligence/Magic
      title: "AI-Powered Funding Readiness",
      description: "Get a funding score, insights, and action steps tailored to your stage and sector.",
      color: "bg-pink-500/20 text-pink-400 border-pink-500/30", // Changed to pink for distinction
      glowColor: "group-hover:shadow-pink-500/25",
    },
    {
      icon: Trello, // Relevant Icon: Toolkits/Organization
      title: "AI toolkits & smart templates",
      description: "Make your startup journey smoother with our exclusive AI Suite toolkit. Get sector-wise fundraising tools, financial models, legal docs and much more for free!",
      color: "bg-red-500/20 text-red-400 border-red-500/30", // Changed to red for distinction
      glowColor: "group-hover:shadow-red-500/25",
    },
  ]

  return (
    <div className="max-w-9xl mx-auto px-4 py-12 space-y-16">
      {/* Get Funded Section */}
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 lg:p-12 overflow-hidden"
      >
        
        {/* Animated background elements (unchanged) */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 left-1/3 w-60 h-60 bg-yellow-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-1/3 right-1/3 w-60 h-60 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-3000"></div>
        </div>

        {/* Subtle grid pattern (unchanged) */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>

        <div className="relative text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Get Funded
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Fuel your startup with smart capital & AI-backed support
          </p>
        </div>

        {/* Cards Container: Width changed to max-w-6xl for better alignment */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {sessionTypes.map((session, index) => {
            const IconComponent = session.icon
            return (
              <Card
                key={index}
                className={`
                    group hover:shadow-2xl transition-all duration-500 
                    border border-gray-700/50 
                    bg-gray-800/60 backdrop-blur-md 
                    hover:bg-gray-800/90 
                    hover:border-gray-600/50 
                    hover:-translate-y-1 
                    ${session.glowColor} 
                    shadow-xl shadow-gray-900/50
                    animate-in fade-in-0 slide-in-from-bottom-4 duration-700
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className={`
                        p-3 rounded-full border-2 
                        bg-gray-900/80 backdrop-blur-sm 
                        ${session.color.replace('/20', '/50').replace('border-', 'border-')}
                        group-hover:scale-105 
                        group-hover:shadow-lg 
                        group-hover:shadow-current/50
                        transition-all duration-300
                    `}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  
                  <div className="text-left flex-1">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-gray-50 transition-colors duration-300">
                      {session.title}
                    </h3>
                    <p className="text-base text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      {session.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Login Modal (unchanged) */}
      <Dialog open={isLoginModalOpen} onOpenChange={setIsLoginModalOpen}>
        <DialogContent className="sm:max-w-md border-0 shadow-2xl">
          <DialogHeader className="text-center">
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Welcome Back
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              Sign in to your account to start fundraising
            </DialogDescription>
          </DialogHeader>
          <LoginForm onClose={() => setIsLoginModalOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
}