"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Palette,
  Shield,
  Heart,
  Calendar,
  Code,
  Coffee,
  Users,
} from "lucide-react";
import { useState } from "react";

export default function AboutSection() {
  const [activeYear, setActiveYear] = useState(2024);

  const timeline = [
    {
      year: 2022,
      title: "The Spark",
      description:
        "Frustrated with existing collaboration tools, Nadir begins sketching ideas for a better way.",
      icon: <Coffee className="h-5 w-5" />,
    },
    {
      year: 2023,
      title: "First Prototype",
      description:
        "Late nights and weekends spent building the core real-time collaboration engine.",
      icon: <Code className="h-5 w-5" />,
    },
    {
      year: 2024,
      title: "SnapCollab Born",
      description:
        "The vision becomes reality. SnapCollab launches with a focus on speed and simplicity.",
      icon: <Zap className="h-5 w-5" />,
    },
    {
      year: 2025,
      title: "Growing Community",
      description:
        "Teams worldwide discover the magic of seamless collaboration.",
      icon: <Users className="h-5 w-5" />,
    },
  ];

  const values = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Real-time performance without compromises",
      description: "Every millisecond matters in collaborative workflows",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Designed with developers and designers in mind",
      description: "Built by creators, for creators who demand excellence",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure, scalable, and fast — powered by open tech",
      description: "Modern architecture with transparency at its core",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title:
        "Built solo, with love, in pursuit of the perfect presentation flow",
      description: "Crafted with passion and attention to every detail",
    },
  ];

  return (
    <section className="py-24 bg-background text-foreground">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-8">
            <Calendar className="w-4 h-4 mr-2" />
            The Journey
          </div>
          <h1 className="text-5xl lg:text-6xl font-heading font-bold mb-8">
            <span className="text-primary">Created for Creators.</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Engineered with Passion.
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            SnapCollab isn't just another slides tool — it's a bold rethinking
            of how teams create together in real time. Follow the journey from
            idea to reality.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-20 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full" />
          <div className="space-y-16 relative z-10">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <Card
                    className={`transition-all duration-300 cursor-pointer border bg-background/80 backdrop-blur-xl shadow-md hover:shadow-xl ${
                      activeYear === item.year
                        ? "scale-105 ring-2 ring-primary/30"
                        : ""
                    }`}
                    onClick={() => setActiveYear(item.year)}
                  >
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                          {item.icon}
                        </div>
                        <h3 className="text-xl font-heading font-bold">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative z-10 flex items-center justify-center w-16 h-16">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${
                      activeYear === item.year
                        ? "bg-gradient-to-br from-indigo-500 to-purple-600 scale-125"
                        : "bg-muted"
                    } border-4 border-background transition-all`}
                  >
                    {item.year.toString().slice(-2)}
                  </div>
                </div>
                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Founder + Values */}
        <div className="grid lg:grid-cols-2 gap-16">
          <Card className="border bg-background/80 backdrop-blur-xl shadow-xl">
            <CardContent className="p-8 space-y-6 text-center">
              <div className="relative mx-auto w-32 h-32">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <span className="text-4xl font-bold text-indigo-600">
                      NH
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-heading font-bold">
                  Nadir Hussain
                </h3>
                <p className="text-primary font-medium">
                  Mid-Senior Web Developer
                </p>
              </div>
              <p className="text-muted-foreground">
                An engineer obsessed with great UX and modern frontend
                architecture. From Supabase realtime sockets to animated slides
                with Framer Motion — every detail is handcrafted.
              </p>
              <div className="pt-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm">
                  "One person. One vision. A world where collaboration flows
                  like magic."
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-bold mb-4">Key Values</h2>
            {values.map((value, index) => (
              <Card
                key={index}
                className="border bg-background/60 backdrop-blur-md hover:shadow-lg transition-all"
              >
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                    {value.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold mb-1">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3"
            >
              Follow Nadir's Journey
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 border-muted hover:bg-muted/20"
            >
              Get Early Access
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
