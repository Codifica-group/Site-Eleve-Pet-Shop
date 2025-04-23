import Image from 'next/image';
import dogTosa from '../../public/dog-tosa.png';
import dogHidratacao from '../../public/dog-hidratacao.png';
import dogBanho from '../../public/dog-banho.png';

export function Service() {
    return (
        <section className="relative px-4 sm:px-6 lg:px-20 py-15 bg-[#FDFEE7]">
            <div className="max-w-7xl mx-auto flex justify-center">
                <article className="text-center">
                    <div className="flex flex-col items-center justify-center text-black">
                        <h1 className="text-[#1F1F1F] quicksand-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-3">
                            Nossos Serviços
                        </h1>
                        <p className="text-[#1F1F1F] quicksand-medium max-w-3xl">
                            Cuidado e carinho que elevam a felicidade do seu pet! Na
                            <span className="text-[#68C9E5] quicksand-bold"> eleve Petshop</span>,
                            oferecemos tudo o que seu pet precisa para viver com saúde, conforto e alegria!
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-center items-center gap-12 mt-14">
                        <Card
                            image={dogTosa}
                            title="Tosas"
                            description="Corte de pelos com estilo, para o seu pet ficar ainda mais lindo e confortável!"
                            animation="animate-slide-in-left"
                        />
                        <Card
                            image={dogHidratacao}
                            title="Hidratação"
                            description="Hidratação profunda que cuida da pele e pelagem do seu pet, deixando-o saudável e brilhante."
                            animation="animate-fade-up"
                        />
                        <Card
                            image={dogBanho}
                            title="Banhos"
                            description="Banho especial para garantir que o seu pet fique limpo e cheiroso, com muito carinho."
                            animation="animate-slide-in-right"
                        />
                    </div>
                </article>
            </div>
        </section>
    );
}

// Card component com efeito de pulo pra cima no hover
function Card({
    image,
    title,
    description,
    animation,
}: {
    image: any;
    title: string;
    description: string;
    animation: string;
}) {
    return (
        <div className={`group flex flex-col items-center ${animation}`}>
            {/* Card visual que cresce e sobe no hover */}
            <div className="relative w-[250px] h-[320px] bg-[#E3DBCE] rounded-[25px] shadow-md overflow-hidden transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-5 group-hover:z-10">
                {/* Sobreposição escura */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 ease-in-out z-10 rounded-[25px]" />

                {/* Imagem */}
                <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-[25px] transition-all duration-300 ease-in-out"
                />

                {/* Conteúdo que aparece no hover */}
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-center">
                    <h3 className="text-white font-quicksand font-bold text-[22px] leading-[30px] uppercase mb-2">
                        {title}
                    </h3>
                    <p className="text-white quicksand-medium text-sm">
                        {description}
                    </p>
                </div>
            </div>

            {/* Título abaixo que desaparece e não ocupa espaço no hover */}
            <div className="text-[#1F1F1F] font-quicksand font-bold text-[24px] leading-[34px] uppercase text-center mt-2 h-auto group-hover:h-0 group-hover:mt-0 group-hover:opacity-0 transition-all duration-300 overflow-hidden">
                {title}
            </div>
        </div>
    );
}
