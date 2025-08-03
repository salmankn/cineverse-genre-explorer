export function Footer() {
  return (
    <footer className="bg-surface border-t border-border mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">© 2024 CineVerse. All Rights Reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="#">
              About
            </a>
            <a className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="#">
              Contact
            </a>
            <a className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}