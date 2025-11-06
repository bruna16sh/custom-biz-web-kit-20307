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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 md:p-6 grayscale hover:grayscale-0 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-auto max-h-20 md:max-h-28 lg:max-h-32 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;