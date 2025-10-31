import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Cog } from "lucide-react";
import { WorldType } from "@/types/world";
import hyruleHero from "@/assets/hyrule-hero.jpg";
import amestrisHero from "@/assets/amestris-hero.jpg";

interface WorldSelectorProps {
  onSelectWorld: (world: WorldType) => void;
}

export default function WorldSelector({ onSelectWorld }: WorldSelectorProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-muted">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-hyrule-primary via-hyrule-accent to-amestris-brass px-4">
            Parallel Realms
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto px-4">
            A Comparative Data Visualization of Two Universes
          </p>
        </motion.div>

        {/* Portfolio Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-16 px-4"
        >
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 shadow-[var(--shadow-medium)] border border-border/50">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
              Welcome to Parallel Worlds!
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              This interactive platform showcases the professional portfolio of{" "}
              <span className="font-semibold text-primary">Levi Woodson</span>, a data scientist and 
              cybersecurity engineer specializing in data visualization, automation, and analytic insight delivery. 
              Through the lens of two beloved fictional universes, this project demonstrates the power of 
              transforming complex datasets into actionable intelligence for leadership and operational teams—combining 
              years of expertise with cutting-edge AI tools to deliver professional-grade analytics in an 
              engaging, narrative-driven format.
            </p>
          </div>
        </motion.div>

        {/* World Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto px-4">
          {/* Hyrule Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="group relative overflow-hidden rounded-2xl shadow-[var(--shadow-strong)] cursor-pointer"
            onClick={() => onSelectWorld("hyrule")}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
            <img
              src={hyruleHero}
              alt="Kingdom of Hyrule - Interactive data visualization dashboard"
              className="w-full h-[400px] sm:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 z-20 p-6 sm:p-8 flex flex-col justify-end">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="text-hyrule-accent" size={24} />
                <span className="text-hyrule-accent font-semibold uppercase tracking-wider text-sm">
                  Magic & Nature
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
                Kingdom of Hyrule
              </h2>
              <p className="text-gray-200 mb-4 sm:mb-6 text-base sm:text-lg">
                Explore a realm of ancient magic, diverse races, and legendary heroes. 
                Witness the economic evolution of seven unique species living in harmony.
              </p>
              <div className="flex items-center gap-2 text-hyrule-accent group-hover:gap-4 transition-all">
                <span className="font-semibold text-lg">Explore Hyrule</span>
                <ArrowRight className="transition-transform group-hover:translate-x-2" />
              </div>
            </div>
          </motion.div>

          {/* Amestris Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="group relative overflow-hidden rounded-2xl shadow-[var(--shadow-strong)] cursor-pointer"
            onClick={() => onSelectWorld("amestris")}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
            <img
              src={amestrisHero}
              alt="Nation of Amestris - Interactive data visualization dashboard"
              className="w-full h-[400px] sm:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 z-20 p-6 sm:p-8 flex flex-col justify-end">
              <div className="flex items-center gap-2 mb-3">
                <Cog className="text-amestris-brass" size={24} />
                <span className="text-amestris-brass font-semibold uppercase tracking-wider text-sm">
                  Alchemy & Industry
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
                Nation of Amestris
              </h2>
              <p className="text-gray-200 mb-4 sm:mb-6 text-base sm:text-lg">
                Discover an industrial powerhouse built on alchemical science and military might. 
                Analyze the complex socioeconomic landscape of a nation in transformation.
              </p>
              <div className="flex items-center gap-2 text-amestris-brass group-hover:gap-4 transition-all">
                <span className="font-semibold text-lg">Explore Amestris</span>
                <ArrowRight className="transition-transform group-hover:translate-x-2" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto px-4"
        >
          {[
            { label: "Regions Mapped", value: "16" },
            { label: "Races Analyzed", value: "12" },
            { label: "Economic Indicators", value: "50+" },
            { label: "Years of Data", value: "10" }
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center p-4 sm:p-6 rounded-xl bg-card shadow-[var(--shadow-soft)] hover-lift"
            >
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
