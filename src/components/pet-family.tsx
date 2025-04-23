import dogPetFamily from '../../public/dogPetFamily.png';
import fundoAzul from '../../public/fundoAzul.png';
import { MdArrowOutward } from 'react-icons/md';
import Image from 'next/image';

export function PetFamily() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-20 mb-10">

      <div className="absolute inset-0 -z-10 mt-[-4%]">
        <Image
          src={fundoAzul}
          alt="Fundo Azul"
          className="object-cover w-full h-full"
          fill
          priority
        />
      </div>

      <div className="max-w-3xl mx-auto">

        <article className="flex flex-col md:flex-row items-center justify-between">

          <div className="flex justify-center md:justify-start w-full md:w-1/2">
            <div className="w-[280px] sm:w-[360px] md:w-[460px] lg:w-[520px] xl:w-[580px">
              <Image
                src={dogPetFamily}
                alt="Pet Family"
                className="object-contain w-full h-full"
                priority
              />
            </div>
          </div>

          <div className="w-full md:w-3xl text-center md:text-left">
            <h1 className="text-[#1F1F1F] quicksand-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
              O seu pet é parte da nossa família
            </h1>
            <p className="text-[#1F1F1F] quicksand-regular text-base sm:text-lg mt-4 leading-relaxed">
              Todo cuidado para o seu pet é <br />
              pouco, por isso, cuidamos de cada detalhe!
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8 quicksand-semibold">
              <button className="cursor-pointer px-10 py-1 border-2 border-[#68C9E5] rounded-full text-[#1F1F1F] relative overflow-hidden transition-all duration-300 ease-in-out hover:text-white group">
                <span className="absolute inset-0 bg-[#68C9E5] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out rounded-full z-0" />
                <span className="relative z-10">Ver serviços</span>
              </button>
              <button className="cursor-pointer px-6 py-1 bg-[#68C9E5] text-[#1F1F1F] rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-[#5ac0dd] hover:shadow-lg hover:-translate-y-1 hover:brightness-110 flex items-center justify-center gap-1">
                Falar Conosco
                <MdArrowOutward className="text-[18px] ml-1"/>
              </button>
            </div>

          </div>
        </article>

      </div>
    </section>
  );
}
