import Image from 'next/image';

export function Interests() {
    return (
        <section className="relative w-full flex justify-center px-4 sm:px-6 lg:px-20 py-10 overflow-hidden bg-[#FDFEE7] mb-20">
            {/* Fundo azul curvado sobre o fundo bege */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/fundoAzulCurvado.png"
                    alt="Fundo Azul Curvado"
                    fill
                    className="object-contain object-center"
                    priority
                />
            </div>

            {/* Conteúdo visível por cima do fundo */}
            <article className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-4 max-w-7xl w-full p-6 rounded-2xl">
                {/* Imagem do dog com escala reduzida */}
                <div className="w-[255px] sm:w-[340px] lg:w-[400px] h-auto">
                    <Image
                        src="/dog-levantado.png"
                        alt="Dog Levantado"
                        width={400}
                        height={400}
                        className="w-full h-auto"
                        priority
                    />
                </div>

                {/* Bloco de texto ajustado para cima */}
                <div className="flex flex-col gap-6 max-w-xl w-full text-center lg:text-left lg:-mt-10">
                    <h1 className="text-4xl sm:text-5xl font-bold text-[#1F1F1F] capitalize">
                        Se interessou?
                    </h1>
                    <p className="text-lg font-bold text-[#1F1F1F]">
                        Deixe seu número e aguarde nosso contato ou fale direto com a gente pelo WhatsApp!
                    </p>
                    <input
                        type="text"
                        placeholder="(XX) XXXX-XXXX"
                        className="bg-white w-full h-14 px-6 rounded-full shadow-md text-[#6C6C6C] placeholder:text-[#6C6C6C] text-base focus:outline-none"
                    />
                    <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start">
                        <button className="bg-[#1F1F1F] text-white px-14 py-3 rounded-full font-semibold hover:bg-[#333] transition">
                            Aguardar atendimento
                        </button>
                        <button className="bg-[#25D366] text-white px-14 py-3 rounded-full font-semibold hover:bg-[#1ebe5d] transition">
                            Entrar no WhatsApp
                        </button>
                    </div>
                </div>
            </article>
        </section>
    );
}
