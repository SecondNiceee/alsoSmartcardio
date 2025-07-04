import React from "react";
import PoliticBlock from "../components/PoliticsBlock";

const Footer = () => {
  return (
    <footer className="section bg-black">
      <div className="container  pb-[30px] flex flex-col gap-5">
        <div className="flex flex-col md:flex-row justify-between gap-[15px]">
          <div className="flex flex-col">
            <p className="p text-[15px] text-[#d1d1d1] text-center md:text-left">
              ООО &quot;АРИТМЕД&quot;
            </p>
            <p className="p text-[15px] text-[#d1d1d1] text-center md:text-left">
              ОГРН 1227700287330
            </p>
            <p className="p text-[15px] text-[#d1d1d1] text-center md:text-left">
              ИНН 9726013334
            </p>
            <p className="p text-[15px] text-[#d1d1d1] text-center md:text-left">
              Адрес электронной почты: support@smartcardio.ru
            </p>
          </div>
          <div className="flex flex-col md:max-w-[600px] w-[100%] items-center justify-center">
            <p className="p text-[15px] text-[#d1d1d1] text-center md:text-right">
              Не является медицинским устройством, перед применением
              проконсультируйтесь со специалистом. Для расшифровки результата
              также обратитесь к специалисту. Обращаем Ваше внимание, что
              согласно действующему Российскому законодательству технически
              сложный товар надлежащего качества возврату и обмену не подлежит.
            </p>
          </div>
        </div>

        <PoliticBlock />

      </div>
    </footer>
  );
};

export default Footer;
