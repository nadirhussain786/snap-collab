import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSnapCollab() {
  return (
    <section className="relative min-h-screen bg-background text-foreground flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-indigo-500 rounded-full opacity-20 blur-3xl animate-pulse dark:opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-pink-500 rounded-full opacity-20 blur-3xl animate-pulse dark:opacity-30" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] bg-purple-500 rounded-full opacity-10 blur-3xl" />

      <div className="relative z-10 container mx-auto text-center max-w-6xl">
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight font-heading">
            <span className="text-foreground block sm:inline">
              Power up with
            </span>
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
              SnapCollab
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
            Ignite your team&apos;s creativity with real-time collaborative
            slides that shine with performance and precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-2 px-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-lg transition-all duration-300"
            >
              Charge Up Now
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-accent bg-transparent hover:bg-accent/10 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg text-black dark:text-white"
            >
              Feel the Energy
            </Button>
          </div>

          <div className="pt-8 sm:pt-12 lg:pt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-4">
            {[
              {
                icon: "⚡",
                title: "Lightning Speed",
                desc: "Instant sync across all devices",
              },
              {
                icon: "🔥",
                title: "Hot Features",
                desc: "Cutting-edge collaborative tools",
              },
              {
                icon: "✨",
                title: "Electric UI",
                desc: "Stunning, responsive design",
              },
            ].map((item, i) => (
              <div key={i} className="text-center space-y-2 sm:space-y-3">
                <div className="text-2xl sm:text-3xl lg:text-4xl">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold font-heading text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
