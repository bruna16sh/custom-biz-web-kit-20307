import bayerLogo from "@/assets/client-bayer.png";
import havanianasLogo from "@/assets/client-havaianas.png";
import nubankLogo from "@/assets/client-nubank.png";
import rocheLogo from "@/assets/client-roche.png";

const Clients = () => {
  const clients = [
    { name: "Bayer", logo: bayerLogo },
    { name: "Havaianas", logo: havanianasLogo },
    { name: "Nubank", logo: nubankLogo },
    { name: "Roche", logo: rocheLogo },
  ];

  return (
    <section id="clientes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Clientes que Confiam em Nós
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Trabalhamos com as principais empresas do Brasil e América Latina
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-2 md:p-4 grayscale hover:grayscale-0 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-24 md:h-32 lg:h-40 w-auto max-w-[90%] object-contain opacity-100 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;