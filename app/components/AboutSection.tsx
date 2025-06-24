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
      icon: <Coffee className="h-4 w-4 sm:h-5 sm:w-5" />,
    },
    {
      year: 2023,
      title: "First Prototype",
      description:
        "Late nights and weekends spent building the core real-time collaboration engine.",
      icon: <Code className="h-4 w-4 sm:h-5 sm:w-5" />,
    },
    {
      year: 2024,
      title: "SnapCollab Born",
      description:
        "The vision becomes reality. SnapCollab launches with a focus on speed and simplicity.",
      icon: <Zap className="h-4 w-4 sm:h-5 sm:w-5" />,
    },
    {
      year: 2025,
      title: "Growing Community",
      description:
        "Teams worldwide discover the magic of seamless collaboration.",
      icon: <Users className="h-4 w-4 sm:h-5 sm:w-5" />,
    },
  ];

  const values = [
    {
      icon: <Zap className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Real-time performance without compromises",
      description: "Every millisecond matters in collaborative workflows",
    },
    {
      icon: <Palette className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Designed with developers and designers in mind",
      description: "Built by creators, for creators who demand excellence",
    },
    {
      icon: <Shield className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Secure, scalable, and fast — powered by open tech",
      description: "Modern architecture with transparency at its core",
    },
    {
      icon: <Heart className="h-5 w-5 sm:h-6 sm:w-6" />,
      title:
        "Built solo, with love, in pursuit of the perfect presentation flow",
      description: "Crafted with passion and attention to every detail",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-muted text-muted-foreground text-xs sm:text-sm font-medium mb-6 sm:mb-8">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            The Journey
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 sm:mb-8">
            <span className="text-primary block sm:inline">
              Created for Creators.
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Engineered with Passion.
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto px-4">
            SnapCollab isn&apos;t just another slides tool — it&apos;s a bold
            rethinking of how teams create together in real time. Follow the
            journey from idea to reality.
          </p>
        </div>

        <div className="block lg:hidden mb-12 sm:mb-16">
          <div className="space-y-6 sm:space-y-8">
            {timeline.map((item, index) => (
              <Card
                key={index}
                className={`transition-all duration-300 cursor-pointer border bg-background/80 backdrop-blur-xl shadow-md hover:shadow-xl ${
                  activeYear === item.year
                    ? "scale-105 ring-2 ring-primary/30"
                    : ""
                }`}
                onClick={() => setActiveYear(item.year)}
              >
                <CardContent className="p-4 sm:p-6 space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg sm:text-xl font-heading font-bold">
                          {item.title}
                        </h3>
                        <span className="text-sm font-bold text-primary">
                          {item.year}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="hidden lg:block mb-16 lg:mb-20 relative">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          <Card className="border bg-background/80 backdrop-blur-xl shadow-xl">
            <CardContent className="p-6 sm:p-8 space-y-4 sm:space-y-6 text-center">
              <div className="relative mx-auto w-24 h-24 sm:w-32 sm:h-32">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <span className="text-2xl sm:text-4xl font-bold text-indigo-600">
                      NH
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-heading font-bold">
                  Nadir Hussain
                </h3>
                <p className="text-primary font-medium text-sm sm:text-base">
                  Mid-Senior Web Developer
                </p>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground">
                An engineer obsessed with great UX and modern frontend
                architecture. From Supabase realtime sockets to animated slides
                with Framer Motion — every detail is handcrafted.
              </p>
              <div className="pt-4">
                <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-muted text-muted-foreground text-xs sm:text-sm text-center">
                  &ldquo;One person. One vision. A world where collaboration
                  flows like magic.&ldquo;
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4">
              Key Values
            </h2>
            {values.map((value, index) => (
              <Card
                key={index}
                className="border bg-background/60 backdrop-blur-md hover:shadow-lg transition-all"
              >
                <CardContent className="p-4 sm:p-6 flex items-start space-x-3 sm:space-x-4">
                  <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex-shrink-0">
                    {value.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading font-semibold mb-1 text-sm sm:text-base">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      {value.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 sm:px-8 py-3 text-sm sm:text-base"
            >
              Follow Nadir&apos;s Journey
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 border-muted hover:bg-muted/20 text-sm sm:text-base"
            >
              Get Early Access
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
