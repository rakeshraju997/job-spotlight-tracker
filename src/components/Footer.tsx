export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-sm mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} oportal. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Developed and Designed by</span>
            <span className="font-semibold text-foreground">Mentor Merlin UK Ltd</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
