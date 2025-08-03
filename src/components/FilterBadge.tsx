import { X } from "lucide-react"

interface FilterBadgeProps {
  label: string
  onRemove: () => void
}

export function FilterBadge({ label, onRemove }: FilterBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 bg-secondary text-foreground text-xs font-medium px-2.5 py-1 rounded-full">
      <span>{label}</span>
      <button 
        onClick={onRemove}
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        <X className="h-3 w-3" />
      </button>
    </span>
  )
}