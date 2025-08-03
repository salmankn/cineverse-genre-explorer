import { Header } from "@/components/Header"
import { FilterControls } from "@/components/FilterControls"
import { AppliedFilters } from "@/components/AppliedFilters"
import { GenreSection } from "@/components/GenreSection"
import { Footer } from "@/components/Footer"

// Import movie poster images
import lastStandImg from "@/assets/last-stand.jpg"
import cityShadowsImg from "@/assets/city-shadows.jpg"
import accidentalHeroImg from "@/assets/accidental-hero.jpg"
import quantumShiftImg from "@/assets/quantum-shift.jpg"

const Index = () => {
  // Sample movie data for each genre
  const actionMovies = [
    { title: "The Last Stand", image: lastStandImg },
    { title: "City of Shadows", image: cityShadowsImg },
    { title: "Crimson Tide", image: "https://images.unsplash.com/photo-1489599511686-de7465daac5d?w=400&h=600&fit=crop" },
    { title: "Silent Fury", image: "https://images.unsplash.com/photo-1504890001746-348139463a98?w=400&h=600&fit=crop" },
    { title: "Echo Protocol", image: "https://images.unsplash.com/photo-1509267893773-de1e07a3b8ab?w=400&h=600&fit=crop" }
  ]

  const comedyMovies = [
    { title: "The Accidental Hero", image: accidentalHeroImg },
    { title: "Love & Misadventures", image: "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?w=400&h=600&fit=crop" },
    { title: "The Great Escape Plan", image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=400&h=600&fit=crop" },
    { title: "Family Matters", image: "https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=400&h=600&fit=crop" },
    { title: "The Quirky Quest", image: "https://images.unsplash.com/photo-1489599511686-de7465daac5d?w=400&h=600&fit=crop" }
  ]

  const dramaMovies = [
    { title: "The Silent Echo", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop" },
    { title: "Beneath the Surface", image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop" },
    { title: "Whispers of the Past", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop" },
    { title: "The Unseen Path", image: "https://images.unsplash.com/photo-1489599511686-de7465daac5d?w=400&h=600&fit=crop" },
    { title: "Echoes of Tomorrow", image: "https://images.unsplash.com/photo-1594905040873-7d017de2f99b?w=400&h=600&fit=crop" }
  ]

  const sciFiMovies = [
    { title: "The Quantum Shift", image: quantumShiftImg },
    { title: "Nebula's Edge", image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=600&fit=crop" },
    { title: "Chronos Paradox", image: "https://images.unsplash.com/photo-1518281420314-a4c9382e0e2a?w=400&h=600&fit=crop" },
    { title: "The Singularity Code", image: "https://images.unsplash.com/photo-1531913764164-f85c52e0e1a7?w=400&h=600&fit=crop" },
    { title: "Beyond the Horizon", image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=600&fit=crop" }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Explore by Genre
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover your next favorite film. Browse through our handpicked selections across various genres and find the perfect movie for any mood.
          </p>
        </div>

        {/* Filter Controls */}
        <FilterControls />

        {/* Applied Filters */}
        <AppliedFilters />

        {/* Genre Sections */}
        <div className="space-y-16">
          <GenreSection
            title="Action"
            description="Experience adrenaline-pumping thrills with our curated selection of action-packed movies. From high-octane car chases to epic battles, these films will keep you on the edge of your seat."
            movies={actionMovies}
          />
          
          <GenreSection
            title="Comedy"
            description="Laugh out loud with our collection of comedies, featuring witty banter, slapstick humor, and heartwarming stories. Perfect for a lighthearted movie night."
            movies={comedyMovies}
          />
          
          <GenreSection
            title="Drama"
            description="Dive into compelling narratives and emotional journeys with our drama selections. These films explore the complexities of human relationships and the triumphs and tribulations of life."
            movies={dramaMovies}
          />
          
          <GenreSection
            title="Sci-Fi"
            description="Explore the boundaries of imagination with our sci-fi movies, featuring futuristic worlds, advanced technology, and thought-provoking concepts. Prepare for a journey beyond the stars."
            movies={sciFiMovies}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
