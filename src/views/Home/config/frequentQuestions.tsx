import "../UI/styles/_telegram-bot.scss";
export const frequentQuestions = [
  {
    title: (
      <h2 className="question-title">
        После установки приложения нужно ли платить за подписку,чтобы получать
        автоматическую расшифровку ЭКГ?
      </h2>
    ),
    answer: (
      <div className="flex flex-col gap-1">
        <p className="quastion-answer !font-semibold">Нет.</p>
        <p className="quastion-answer">
          Приложение СмартКардио® уже включает встроенную систему автоматической
          интерпретации ЭКГ на основе алгоритмов искусственного интеллекта.
          Дополнительных подписок или платных функций не требуется.
        </p>
      </div>
    ),
  },
  {
    title: (
      <h2 className="question-title">
        Как прибор записывает 6 отведений ЭКГ без проводов и геля?
      </h2>
    ),
    answer: (
      <p className="quastion-answer">
        <span className="bold">СмартКардио®</span>работает на основе закона
        Эйнтховена. Во время контакта с кожей устройство регистрирует разность
        потенциалов между конечностями (классические отведения I, II, III и
        усиленные aVR, aVL, aVF).
      </p>
    ),
  },
  {
    title: (
      <h2 className="question-title">
        Какие параметры ЭКГ можно изменить в приложении?
      </h2>
    ),
    answer: (
      <div className="flex flex-col gap-1">
        <p className="quastion-answer">В настройках вы можете выбрать:</p>
        <p className="quastion-answer">
          <span className="bold">Скорость записи:</span> 25 или 50 мм/сек
        </p>
        <p className="quastion-answer">
          <span className="bold">Длительность:</span> от 5 сек до нескольких
          минут
        </p>
        <p className="quastion-answer">
          <span className="bold">Амплитуду сигнала:</span> 10 или 20 мм/мВ
        </p>
        <p className="quastion-answer">
          <span className="bold">Отображение дополнительных параметров:</span>{" "}
          пульсовой волны, графика дыхания
        </p>
      </div>
    ),
  },
  {
    title: (
      <h2 className="question-title">Работает ли СмартКардио® с iPhone?</h2>
    ),
    answer: (
      <p className="quastion-answer">
        Приложение совместимо{" "}
        <span className="font-bold">со всеми современными смартфонами</span> на
        базе iOS и Android. Загрузка доступна в магазинах приложений.
      </p>
    ),
  },
  {
    title: (
      <h2 className="question-title">
        Можно ли использовать СмартКардио® для длительного мониторинга, как
        холтер?
      </h2>
    ),
    answer: (
      <div className="flex flex-col gap-1">
        <p className="quastion-answer font-bold">Нет.</p>
        <p className="quastion-answer font-bold">
          СмартКардио® предназначен для регистрации по требованию —{" "}
          <span className="font-bold">
            в момент жалоб или при регулярном мониторинге,
          </span>{" "}
          что не требует длительного ношения и репрезентативно{" "}
          <span className="font-bold">для выявления нарушений. </span>
        </p>
      </div>
    ),
  },
  {
    title: (
      <h2 className="question-title">
        На какое время хватает аккумулятора прибора без подзарядки?
      </h2>
    ),
    answer: (
      <p className="quastion-answer">
        При среднем режиме использования (до 10 измерений в день) устройство
        работает <span className="font-bold">до 3 месяцев без подзарядки.</span>
      </p>
    ),
  },
  {
    title: (
      <h2 className="question-title">Как проверяется точность прибора?</h2>
    ),
    answer: (
      <p className="quastion-answer">
        Каждое устройство проходит индивидуальное тестирование на
        сертифицированном медицинском оборудовании. Результаты откалиброваны в
        соответствии с нормативами, на все приборы распространяется
        <span className="font-bold">гарантия производителя.</span>
      </p>
    ),
  },
];
