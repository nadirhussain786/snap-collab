"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Users, Zap, Shield, Sparkles, Palette, Globe } from "lucide-react";
import { useState, useEffect } from "react";

export function FeatureSection() {
  const [blobPosition, setBlobPosition] = useState({ x: 50, y: 50 });
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Real-time Collaboration",
      description:
        "Experience seamless teamwork with live cursors and instant sync.",
      color: "from-indigo-500 to-purple-600",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Performance",
      description: "Blazing-fast rendering powered by Supabase Edge.",
      color: "from-pink-500 to-rose-600",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enterprise Security",
      description: "Zero-trust architecture and magic link auth.",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "AI-Assisted Creation",
      description: "Smart suggestions and layouts with GPT support.",
      color: "from-amber-400 to-orange-600",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Smart Templates",
      description: "Dynamic layouts adapt to your content flow.",
      color: "from-fuchsia-500 to-pink-600",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Infrastructure",
      description: "Edge-deployed for blazing speed everywhere.",
      color: "from-blue-500 to-cyan-600",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBlobPosition({
        x: 30 + Math.random() * 40,
        y: 30 + Math.random() * 40,
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-background text-foreground relative overflow-hidden">
      {/* Dynamic blob background */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full blur-3xl transition-all duration-[3000ms] ease-in-out"
          style={{
            left: `${blobPosition.x}%`,
            top: `${blobPosition.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          className="absolute w-80 h-80 bg-gradient-to-br from-cyan-500 via-teal-500 to-emerald-500 rounded-full blur-3xl transition-all duration-[4000ms] ease-in-out"
          style={{
            left: `${100 - blobPosition.x}%`,
            top: `${100 - blobPosition.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Built for Real-Time Magic
          </h2>
          <p className="text-muted-foreground mt-4 text-lg max-w-3xl mx-auto">
            SnapCollab empowers teams to collaborate in the moment, with
            blazing-fast tools and rich visuals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 bg-muted/10 backdrop-blur-md hover:bg-muted/20 transition duration-500 group relative overflow-hidden cursor-pointer"
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <CardContent className="p-8 h-full relative">
                {/* Animated glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 rounded-lg transition-all duration-700`}
                  style={{
                    clipPath:
                      activeCard === index
                        ? "polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)"
                        : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                  }}
                />

                <div
                  className={`p-4 rounded-full bg-gradient-to-br ${feature.color} text-white mb-6 inline-flex transition group-hover:scale-110`}
                  style={{
                    borderRadius:
                      activeCard === index
                        ? "60% 40% 30% 70% / 60% 30% 70% 40%"
                        : "50%",
                  }}
                >
                  {feature.icon}
                </div>

                <h3 className="text-xl font-heading font-bold mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes morph {
          0%,
          100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          50% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
        }
      `}</style>
    </section>
  );
}
