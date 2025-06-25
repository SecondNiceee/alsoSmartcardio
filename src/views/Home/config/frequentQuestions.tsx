import "../UI/styles/_telegram-bot.scss";
export const frequentQuestions = [
  {
    title: (
      <h2 className="question-title">
        После установки приложения нужно ли платить за подписку, чтобы получать
        автоматическую расшифровку ЭКГ?
      </h2>
    ),
    answer: (
      <div className="flex flex-col gap-1">
        <p className="quastion-answer !font-semibold">Нет.</p>
        <p className="quastion-answer">
          Приложение <span className="!font-semibold">СмартКардио®</span> уже включает встроенную систему 
          <span className="!font-semibold">автоматической интерпретации ЭКГ</span> на основе алгоритмов искусственного интеллекта.
        </p>
        <p className="quastion-answer"> Дополнительных подписок или платных функций <span className="!font-semibold">не требуется.</span></p>
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
      <div className="flex flex-col gap-1">
        <p className="quastion-answer">
          <span className="!font-semibold">СмартКардио®</span> работает на основе закона
          Эйнтховена. Во время контакта с кожей устройство регистрирует разность
          потенциалов между конечностями (классические отведения I, II, III и
          усиленные aVR, aVL, aVF).
        </p>
        <p className="quastion-answer">
          Благодаря использованию <span className="!font-semibold">«сухих» электродов</span> и продуманной схемотехники, регистрация проходит <span className="!font-semibold">без геля, липких электродов или проводов —</span>
          удобно как в домашних, так и в клинических условиях.
        </p>

      </div>
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
          <span className="!font-semibold">Скорость записи:</span> 25 или 50 мм/сек
        </p>
        <p className="quastion-answer">
          <span className="!font-semibold">Длительность:</span> от 5 сек до нескольких
          минут
        </p>
        <p className="quastion-answer">
          <span className="!font-semibold">Амплитуду сигнала:</span> 10 или 20 мм/мВ
        </p>
        <p className="quastion-answer">
          <span className="!font-semibold">Отображение дополнительных параметров:</span>{" "}
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
      <div className="flex flex-col gap-1">
        <p className="quastion-answer !font-semibold">Да.</p>
        <p className="quastion-answer">
          Приложение совместимо{" "}
          <span className="!font-semibold">со всеми современными смартфонами</span> на
          базе iOS и Android. Загрузка доступна в магазинах приложений.
        </p>
      </div>
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
        <p className="quastion-answer !font-semibold">Нет.</p>
        <p className="quastion-answer">
          <span className="!font-semibold">СмартКардио®</span> предназначен для регистрации по требованию —{" "}
          <span className="!font-semibold">
            в момент жалоб или при регулярном мониторинге,
          </span>{" "}
          что не требует длительного ношения и репрезентативно{" "}
          <span className="!font-semibold">для выявления нарушений. </span>
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
        работает <span className="!font-semibold">до 3 месяцев без подзарядки.</span>
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
        <span className="!font-semibold"> гарантия производителя.</span>
      </p>
    ),
  },
  {
    title : (
      <h2 className="question-title">Заменяет ли автоматический анализ ЭКГ прием у врача?</h2>
    ),
    answer : (
      <div className="flex flex-col gap-1">
        <p className="quastion-answer !font-semibold">Нет.</p>
        <p className="quastion-answer">
          Прибор помогает записывать нарушения сердечного ритма для последующей консультации с врачом. Все записи сохраняются в формате PDF в приложении (независимо от результатов автоматического анализа). Автоматический анализ (на основе ИИ) служит вспомогательным средством для акцентирования внимания на возможных проблемах и сокращения времени до обращения к специалисту.
        </p>
      </div>
    )
  }
];
