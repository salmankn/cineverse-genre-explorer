import { Search, Bell, Play } from "lucide-react"
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <a className="flex items-center gap-2 text-primary" href="#">
              <Play className="h-8 w-8 fill-current" />
              <h1 className="text-xl font-bold">CineVerse</h1>
            </a>
            <nav className="hidden md:flex items-center gap-6">
              <a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" href="#">
                Home
              </a>
              <a className="text-sm font-medium text-foreground" href="#">
                Movies
              </a>
              <a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" href="#">
                TV Shows
              </a>
              <a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" href="#">
                Genres
              </a>
              <a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" href="#">
                Watchlist
              </a>
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <Input 
                className="bg-surface border-border rounded-md py-2 pl-10 pr-4 text-sm w-48 focus:w-56 transition-all duration-300 focus:ring-primary"
                placeholder="Search..."
                type="text"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>
            
            <button className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-surface transition-colors">
              <Bell className="h-5 w-5" />
            </button>
            
            <div className="w-10 h-10 rounded-full bg-gradient-primary bg-cover bg-center"></div>
          </div>
        </div>
      </div>
    </header>
  )
}