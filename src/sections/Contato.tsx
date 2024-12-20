import SocialIcons from "@/components/ui/SocialIcons";
import Title from "@/components/ui/Title";
import { socialIcons } from "@/shared/constants";
import { twMerge } from "tailwind-merge";

const Contato = ({ className }: { className?: string }) => {
  return (
    <section className={twMerge("flex flex-col w-full gap-6 mt-28", className)}>
      <Title>Entre em contato</Title>
      <section className="flex gap-56">
        <section className="max-w-632">
          <p className="font-sans text-base">
            Fique a vontade para entrar em contato através das minhas redes
            sociais ou email{" "}
            <strong>
              <a href="mailto:lucianesantcs@gmail.com">
                lucianesantcs@gmail.com
              </a>
            </strong>{" "}
            para assuntos sobre freelance em projetos de curto prazo,
            colaborações, ou até mesmo se precisar de assistência em algum
            projeto seja como design ou desenvolvimento front-end.
          </p>
        </section>
        <section className="flex flex-col gap-4">
          {socialIcons.map((socialIcon) => (
            <SocialIcons
              key={socialIcon.label}
              label={socialIcon.label}
              iconName={socialIcon.iconName}
              url={socialIcon.url}
            />
          ))}
        </section>
      </section>
    </section>
  );
};

export default Contato;
