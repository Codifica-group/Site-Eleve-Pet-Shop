import cartaoAmerican from '../../public/cartao-american.png';
import cartaoMaster from '../../public/cartao-master.png';
import cartaoVisa from '../../public/cartao-visa.png';
import cartaoApple from '../../public/cartao-apple.png';
import cartaoPayPal from '../../public/cartao-paypal.png';

const icons = [cartaoAmerican, cartaoMaster, cartaoVisa, cartaoApple, cartaoPayPal];

export function Footer() {
    return (
        <footer className="relative w-full bg-[#E3DBCE] py-10 px-4">
            {/* Container central escuro */}
            <div className="max-w-6xl mx-auto bg-[#2C2D28] shadow-md rounded-[30px] p-10 px-6 py-10">
                <div className="flex flex-col md:flex-row justify-between md:justify-center md:gap-32 text-[#68C9E5] mt-4 text-center md:text-left">
                    {/* Coluna 1 - Menu */}
                    <div className="space-y-1 mb-6 md:mb-0">
                        <p className="text-[20px] font-extrabold capitalize">Site</p>
                        <p className="text-[16px] font-medium text-white">Home</p>
                        <p className="text-[16px] font-medium text-white">Serviços</p>
                        <p className="text-[16px] font-medium text-white">Preços</p>
                        <p className="text-[16px] font-medium text-white">Contato</p>
                    </div>

                    {/* Coluna 2 - Atendimento */}
                    <div className="space-y-1 mb-6 md:mb-0">
                        <p className="text-[20px] font-extrabold capitalize">Atendimento</p>
                        <p className="text-[16px] font-medium text-white">Aguardar contato</p>
                        <p className="text-[16px] font-medium text-white">Entrar em contato</p>
                    </div>

                    {/* Coluna 3 - Informações */}
                    <div className="space-y-1">
                        <p className="text-[20px] font-extrabold capitalize">Informações</p>
                        <p className="text-white text-[16px] font-medium underline lowercase">
                            eleve.pethshop@outlook.com
                        </p>
                        <p className="text-white text-[16px] font-medium lowercase">
                            (11) 99999-9999
                        </p>
                    </div>
                </div>

                {/* Ícones de redes sociais */}
                <div className="flex justify-center flex-wrap gap-4 mt-7">
                    {icons.map((icon, index) => (
                        <div
                            key={index}
                            className="w-12 h-9 bg-white rounded-lg flex items-center justify-center shadow-md"
                        >
                            <img
                                src={icon.src}
                                alt={`icon-${index}`}
                                className="object-contain w-8 h-8"
                            />
                        </div>
                    ))}
                </div>

                {/* Rodapé */}
                <div className="flex justify-center mt-4 text-center">
                    <h1 className="text-white text-sm">
                        © 2023 Eleve Pet Shop. Todos os direitos reservados.
                    </h1>
                </div>
            </div>
        </footer>
    );
}
