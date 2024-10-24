import Link from "next/link";

export const MainNewsSection = () => {
  return (
    <section className="section pt-20">
      <div
        className={` bg-[url("/noticias/desfileCapaTemp.png")] bg-center bg-cover w-full h-auto flex flex-col items-center justify-end rounded-lg `}
      >
        <div className="mt-[5.25rem] md:mt-[6.25rem] lg:mt-[16.375rem]  md:w-[calc(100%-100px)] lg:w-[calc(100%-200px)] opacity-90 bg-var-branco-card-100 rounded-t-md">
          <div className="items-start flex flex-col px-4 2sm:px-[2rem] pt-[1.625rem] pb-5 gap-4 ">
            <h1 className="h2-medium 2sm:main-title">
              Desfile das Campeãs: Inclusão é marca da Escola de Samba Embaixadores da Alegria
            </h1>
            <span className="paragraph-2">
              Criada em 2006, a Escola de Samba Embaixadores da Alegria realiza no próximo sábado (17) seu décimo sexto
              desfile, às 19h, precedendo a apresentação das agremiações campeãs do carnaval deste ano na Marquês de
              Sapucaí.
            </span>
            <Link href={""} className="cta ">
              Continuar lendo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
