import { MovieCard } from "./MovieCard"

interface Movie {
  title: string
  image: string
}

interface GenreSectionProps {
  title: string
  description: string
  movies: Movie[]
}

export function GenreSection({ title, description, movies }: GenreSectionProps) {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {movies.map((movie, index) => (
          <MovieCard key={index} title={movie.title} image={movie.image} />
        ))}
      </div>
    </section>
  )
}