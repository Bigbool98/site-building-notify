import { Construction, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted flex items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center space-y-8 animate-fade-in">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-30 animate-pulse-slow" />
            <div className="relative bg-card p-8 rounded-full shadow-2xl border-4 border-primary/20">
              <Construction className="w-20 h-20 text-primary" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Sito in Costruzione
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Stiamo lavorando per portarti qualcosa di straordinario
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 py-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse-slow" />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <p className="text-lg text-foreground/80">
            Per qualsiasi informazione, non esitare a contattarci
          </p>
          <a
            href="mailto:info@it-inn.it"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
          >
            <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            info@it-inn.it
          </a>
        </div>

        {/* Footer decoration */}
        <div className="pt-12">
          <div className="flex justify-center gap-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-primary/40"
                style={{
                  animation: `pulse-slow 3s ease-in-out infinite ${i * 0.5}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
