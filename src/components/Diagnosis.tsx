import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const Diagnosis = () => {
  const premises = [
    "User friendly — fácil de usar para todos os perfis",
    "Future proof — preparado para evoluções tecnológicas",
    "Escalável — permite crescimento sem retrabalho",
    "Sustentável — menor impacto ambiental e maior eficiência",
    "Pronto para ambientes híbridos",
    "Integração com sistemas prediais",
    "AVoIP (Áudio e Vídeo sobre IP)",
    "Compatível com gerenciamento remoto",
    "Aderente à cultura e processos da empresa",
    "Harmônico com o conceito arquitetônico",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Diagnóstico Section */}
          <div className="mb-16 animate-fade-in">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
              Diagnóstico de Necessidades e Desejos
            </h2>
            <Card className="">
              <CardContent className="p-6 md:p-8 lg:p-10">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                  O investimento em tecnologia AV-UC costuma representar uma parte relevante do 
                  orçamento em projetos corporativos ou educacionais. Apesar disso, essa tecnologia 
                  deve ser transparente aos usuários, funcionando como uma ferramenta de comunicação 
                  — e não como uma barreira.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Quando o resultado não atende às expectativas, surgem frustrações e insatisfações 
                  entre os stakeholders. Por isso, a avaliação correta de Necessidades e Desejos é 
                  essencial. Ela é o ponto de partida para um projeto de Áudio, Vídeo e Comunicação 
                  Unificada que realmente integre Arquitetura, Recursos Tecnológicos e Objetivos do 
                  Cliente, garantindo uma experiência eficiente e alinhada ao propósito de cada espaço.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Premissas Section */}
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
              Nossas Premissas de Projeto
            </h2>
            <p className="text-base md:text-lg text-muted-foreground text-center mb-10 max-w-3xl mx-auto">
              Para garantir soluções eficientes, sustentáveis e alinhadas ao futuro, nossos projetos 
              seguem princípios que norteiam todas as etapas de desenvolvimento e entrega.
            </p>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {premises.map((premise, index) => (
                <Card 
                  key={index} 
                  className="transition-smooth hover:shadow-lg hover:border-primary/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-4 md:p-6 flex items-start gap-3 md:gap-4">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base font-medium">{premise}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diagnosis;
