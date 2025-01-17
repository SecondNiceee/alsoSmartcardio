import React from "react";
import PoliticBlock from "../components/PoliticsBlock";

const Footer = () => {
  return (
    <footer className="section bg-black">
      <div className="container pb-[30px] flex flex-col gap-5">
        <div className="flex justify-between gap-[15px]">
          <div className="flex flex-col">
            <p className="p text-[15px] text-[#d1d1d1] text-left">
              ООО "АРИТМЕД"
            </p>
            <p className="p text-[15px] text-[#d1d1d1] text-left">
              ОГРН 1227700287330
            </p>
            <p className="p text-[15px] text-[#d1d1d1] text-left">
              ИНН 9726013334
            </p>
            <p className="p text-[15px] text-[#d1d1d1] text-left">
              Адрес электронной почты: support@smartcardio.ru
            </p>
          </div>
          <div className="flex flex-col max-w-[600px]">
            <p className="p text-[15px] text-[#d1d1d1] text-right">
              Не является медицинским устройством, перед применением
              проконсультируйтесь со специалистом. Для расшифровки результата
              так же обратитесь к специалисту. Обращаем Ваше внимание, что
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
