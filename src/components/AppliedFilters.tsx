import { FilterBadge } from "./FilterBadge"

export function AppliedFilters() {
  const filters = [
    { label: "Release Year: 2020-2023", id: "release-year" },
    { label: "Rating: 7+ Stars", id: "rating" },
    { label: "Sorted by: Popularity", id: "sort" }
  ]

  const handleRemoveFilter = (id: string) => {
    // Handle filter removal logic here
    console.log(`Removing filter: ${id}`)
  }

  const handleClearAll = () => {
    // Handle clear all filters logic here
    console.log("Clearing all filters")
  }

  return (
    <div className="bg-card p-4 rounded-lg mb-12 border border-border flex flex-wrap items-center gap-4">
      <span className="text-sm font-medium text-muted-foreground">Applied Filters:</span>
      <div className="flex flex-wrap items-center gap-2">
        {filters.map((filter) => (
          <FilterBadge
            key={filter.id}
            label={filter.label}
            onRemove={() => handleRemoveFilter(filter.id)}
          />
        ))}
      </div>
      <button 
        onClick={handleClearAll}
        className="text-sm font-medium text-primary hover:text-primary/80 transition-colors ml-auto"
      >
        Clear All
      </button>
    </div>
  )
}