

const index = () => {

  return (
    <div 
    id="depoimentos"
    className="flex flex-col items-center pl-6 pr-6 md:pl-10 md:pr-10 lg:pl-16 lg:pr-16 mt-16 mb-16">
      <div className="w-full md:max-w-276 lg:max-w-276 flex flex-col gap-8 md:gap-6 lg:gap-8 ">
        <h2 className="text-center md:text-left lg:text-left text-2xl md:text-4xl lg:text-5xl">Veja o que nossos clientes dizem sobre nossos produtos</h2>
        <div className="w-full lg:w-227.5 flex flex-col gap-4 p-4 rounded-[5px] bg-blue-400">
          <p className="text-white text-[12px] md:text-[14px] lg:text-[16px]">O atendimento é impecável! Meus pets sempre são muito bem tratados e os produtos são de primeira qualidade.</p>
          <p className="font-medium">Mariana Souza</p>
        </div>
        <div className="w-full lg:w-227.5 flex flex-col gap-4 p-4 rounded-[5px] bg-blue-400">
          <p className="text-white text-[12px] md:text-[14px] lg:text-[16px]">Finalmente uma loja que entende de gatos! O arranhador que comprei é muito resistente e a entrega foi rápida.</p>
          <p className="font-medium">Ricardo Alves</p>
        </div>
        <div className="w-full lg:w-227.5 flex flex-col gap-4 p-4 rounded-[5px] bg-blue-400">
          <p className="text-white text-[12px] md:text-[14px] lg:text-[16px]">Adoro a variedade de acessórios. Sempre encontro novidades e o preço é muito justo para a qualidade oferecida.</p>
          <p className="font-medium">Carla Dias</p>
        </div>
        <div className="w-full lg:w-227.5 flex flex-col gap-4 p-4 rounded-[5px] bg-blue-400">
          <p className="text-white text-[12px] md:text-[14px] lg:text-[16px]">Excelente seção de aquarismo. Os vendedores realmente conhecem o assunto e me ajudaram muito com meu novo aquário.</p>
          <p className="font-medium">João Pedro</p>
        </div>
      </div>
    </div>

  )
}

export default index