'use client';
import { useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';

export function Prices() {
  const [addonsCard1, setAddonsCard1] = useState<string[]>([]);
  const [addonsCard2, setAddonsCard2] = useState<string[]>([]);
  const [addonsCard3, setAddonsCard3] = useState<string[]>([]);

  const toggleAddon = (item: string, card: number) => {
    const setters = [setAddonsCard1, setAddonsCard2, setAddonsCard3];
    const setState = setters[card];

    setState((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const priceCard1 = 200 + addonsCard1.length * 50;
  const priceCard2 = 300 + addonsCard2.length * 40;
  const discountCard3 = 120 + addonsCard3.length * 30;

  return (
    <section className="py-20 bg-[#FDFEE7]">
      <div className="max-w-6xl mx-auto px-4">
        <article className="flex flex-col items-center text-center mt-[-4%]">
          <h1 className="text-4xl font-bold text-[#1F1F1F] mb-10">Preços</h1>

          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            {/* Card 1 - Tosas */}
            <div className="bg-[#E3DBCE] p-6 rounded-2xl shadow-md w-72 hover:shadow-xl transition text-left flex flex-col justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-[#1F1F1F] mb-4">Tosas</h1>
                <p className="text-[#1F1F1F]">Corte especializado e seguro para seu pet.</p>
                <h1 className="text-xl font-bold text-[#1F1F1F] mt-2">R${priceCard1},00</h1>
                <p className="text-sm text-[#1F1F1F] mb-4">Podendo variar por raça</p>
              </div>
              <button className="cursor-pointer w-full font-semibold px-6 py-2 bg-gradient-to-r from-white via-[#f9f9f9] to-white text-[#1F1F1F] rounded-full shadow-md hover:shadow-lg hover:from-[#ffffff] hover:to-[#eaeaea] transition-all duration-300 ease-in-out hover:scale-[1.03] flex items-center justify-center gap-2 group">
                <span className="relative z-10">Contratar Serviços</span>
                <MdArrowOutward className="text-[18px] group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <hr className="border-t border-black my-4" />
              <div>
                <h3 className="font-semibold text-[#1F1F1F] mb-2">Inclusos</h3>
                <ul className="space-y-2">
                  {['Tosa Higiênica', 'Tosa de Verão', 'Tosa de Inverno'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[#1F1F1F]">
                      <input
                        type="checkbox"
                        checked={addonsCard1.includes(item)}
                        onChange={() => toggleAddon(item, 0)}
                        className="accent-[#68C9E5] w-4 h-4"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 2 - Recomendado */}
            <div className="bg-[#68C9E5] border-4 border-[#68C9E5] p-6 rounded-2xl shadow-lg w-80 hover:shadow-2xl transition transform scale-105 text-left relative">
              <div className="mb-2 text-sm font-bold bg-[#B17B7C] text-[#ffffff] inline-block absolute mt-[-12%] right-4 rounded-lg px-2">Recomendado</div>
              <h1 className="text-2xl font-semibold text-[#1F1F1F] mb-4">Banho + Tosa</h1>
              <p className="text-[#1F1F1F]">Pacote completo para higiene e estilo do seu pet.</p>
              <h1 className="text-xl font-bold text-[#1F1F1F] mt-2">R${priceCard2},00</h1>
              <p className="text-sm text-[#1F1F1F] mb-4">Serviço ideal para o mês inteiro</p>
              <button className="cursor-pointer w-full font-semibold px-6 py-2 bg-gradient-to-r from-white via-[#f9f9f9] to-white text-[#1F1F1F] rounded-full shadow-md hover:shadow-lg hover:from-[#ffffff] hover:to-[#eaeaea] transition-all duration-300 ease-in-out hover:scale-[1.03] flex items-center justify-center gap-2 group">
                <span className="relative z-10">Contratar Serviços</span>
                <MdArrowOutward className="text-[18px] group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <hr className="border-t border-black my-4" />
              <div>
                <h3 className="font-semibold text-[#1F1F1F] mb-2">Inclusos</h3>
                <ul className="space-y-2">
                  {['Banho completo', 'Hidratação', 'Secagem com perfume'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[#1F1F1F]">
                      <input
                        type="checkbox"
                        checked={addonsCard2.includes(item)}
                        onChange={() => toggleAddon(item, 1)}
                        className="accent-[#ffffff] w-4 h-4"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 3 - Banho */}
            <div className="bg-[#E3DBCE] p-6 rounded-2xl shadow-md w-72 hover:shadow-xl transition text-left flex flex-col justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-[#1F1F1F] mb-4">Banho</h1>
                <p className="text-[#1F1F1F]">Banho com produtos hipoalergênicos e muito carinho.</p>
                <h1 className="text-xl font-bold text-[#1F1F1F] mt-2">R${discountCard3},00</h1>
                <p className="text-sm text-[#1F1F1F] mb-4">Podendo variar por raça</p>
              </div>
              <button className="cursor-pointer w-full font-semibold px-6 py-2 bg-gradient-to-r from-white via-[#f9f9f9] to-white text-[#1F1F1F] rounded-full shadow-md hover:shadow-lg hover:from-[#ffffff] hover:to-[#eaeaea] transition-all duration-300 ease-in-out hover:scale-[1.03] flex items-center justify-center gap-2 group">
                <span className="relative z-10">Contratar Serviços</span>
                <MdArrowOutward className="text-[18px] group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <hr className="border-t border-black my-4" />
              <div>
                <h3 className="font-semibold text-[#1F1F1F] mb-2">Inclusos</h3>
                <ul className="space-y-2">
                  {['Shampoo Especial', 'Escovação de pelos', 'Limpeza de ouvidos'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[#1F1F1F]">
                      <input
                        type="checkbox"
                        checked={addonsCard3.includes(item)}
                        onChange={() => toggleAddon(item, 2)}
                        className="accent-[#68C9E5] w-4 h-4"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
