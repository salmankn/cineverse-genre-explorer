import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function FilterControls() {
  return (
    <div className="bg-card p-6 rounded-lg mb-8 border border-border">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
        <div className="relative col-span-1 sm:col-span-2 lg:col-span-1">
          <label className="text-sm font-medium text-muted-foreground mb-2 block" htmlFor="release-year">
            Release Year
          </label>
          <Select defaultValue="2020-2023">
            <SelectTrigger>
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2020-2023">2020-2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2021">2021</SelectItem>
              <SelectItem value="2020">2020</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="relative">
          <label className="text-sm font-medium text-muted-foreground mb-2 block" htmlFor="ratings">
            Ratings
          </label>
          <Select defaultValue="7+">
            <SelectTrigger>
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="9+">9+ Stars</SelectItem>
              <SelectItem value="8+">8+ Stars</SelectItem>
              <SelectItem value="7+">7+ Stars</SelectItem>
              <SelectItem value="6+">6+ Stars</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="relative">
          <label className="text-sm font-medium text-muted-foreground mb-2 block" htmlFor="availability">
            Availability
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="streaming">Streaming</SelectItem>
              <SelectItem value="purchase">For Purchase</SelectItem>
              <SelectItem value="theaters">In Theaters</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="relative">
          <label className="text-sm font-medium text-muted-foreground mb-2 block" htmlFor="user-reviews">
            User Reviews
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="top-rated">Top Rated</SelectItem>
              <SelectItem value="most-reviewed">Most Reviewed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="w-full sm:w-auto relative">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">Sort By:</span>
            <Select defaultValue="popularity">
              <SelectTrigger className="w-full sm:w-auto">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">Popularity</SelectItem>
                <SelectItem value="highest-rated">Highest Rated</SelectItem>
                <SelectItem value="lowest-rated">Lowest Rated</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
                <SelectItem value="a-z">A-Z</SelectItem>
                <SelectItem value="z-a">Z-A</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Button variant="ghost" className="w-full sm:w-auto text-muted-foreground hover:text-foreground">
            Clear Filters
          </Button>
          <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90">
            Apply Filters
          </Button>
        </div>
      </div>
    </div>
  )
}