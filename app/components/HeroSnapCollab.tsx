import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSnapCollab() {
  return (
    <section className="relative min-h-screen bg-background text-foreground flex items-center justify-center overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500 rounded-full opacity-20 blur-3xl animate-pulse dark:opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full opacity-20 blur-3xl animate-pulse dark:opacity-30" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500 rounded-full opacity-10 blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl">
        <div className="space-y-10">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight font-heading">
            <span className="text-foreground">Power up with</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
              SnapCollab
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ignite your team&apos;s creativity with real-time collaborative
            slides that shine with performance and precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white px-8 py-4 text-lg shadow-lg transition-all duration-300"
            >
              Charge Up Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-accent bg-transparent hover:bg-accent/10 px-8 py-4 text-lg text-black dark:text-white "
            >
              Feel the Energy
            </Button>
          </div>

          <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
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
              <div key={i} className="text-center space-y-3">
                <div className="text-4xl">{item.icon}</div>
                <h3 className="text-xl font-semibold font-heading text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
