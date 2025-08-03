interface MovieCardProps {
  title: string
  image: string
}

export function MovieCard({ title, image }: MovieCardProps) {
  return (
    <div className="movie-poster-card group">
      <img 
        alt={title} 
        className="w-full h-full object-cover rounded-md aspect-[2/3]" 
        src={image}
      />
      <div className="movie-overlay">
        <p className="text-white text-base font-medium px-2">{title}</p>
      </div>
    </div>
  )
}