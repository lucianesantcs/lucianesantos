import SocialIcons from "@/components/ui/SocialIcons";
import Title from "@/components/ui/Title";
import { socialIcons } from "@/shared/constants";
import { twMerge } from "tailwind-merge";

const Sobre = ({ className }: { className?: string }) => {
  return (
    <section className={twMerge("flex", className)}>
      <section className="flex w-[32.75rem] flex-col gap-8">
        <div>
          <h1 className="font-serif text-4xl font-medium">Luciane Santos</h1>
          <h2 className="font-serif text-xl font-medium">
            Desenvolvedora Front-End
          </h2>
          <h2 className="font-serif text-base font-semibold">& UI Designer</h2>
        </div>
        <div className="flex flex-col gap-3">
          {socialIcons.map((socialIcon) => (
            <SocialIcons
              key={socialIcon.label}
              label={socialIcon.label}
              iconName={socialIcon.iconName}
              url={socialIcon.url}
            />
          ))}
        </div>
      </section>

      <section className="flex w-[33.6875rem] flex-col gap-8">
        <Title>Sobre</Title>
        <p className="font-sans text-base">
          Profissional Front-End com mais de três anos de experiência em
          desenvolvimento web dominando as linguagens HTML, CSS/Sass, JavaScript
          e TypeScript. Criação de layouts utilizando o framework Angular e
          biblioteca ReactJS. Conhecimento de User Interface/User Experience
          para o design de interfaces utilizando a ferramenta Figma.
        </p>
      </section>
    </section>
  );
};

export default Sobre;
