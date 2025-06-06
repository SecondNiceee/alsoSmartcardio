import { routes } from "@/shared/config/routes";
import { scrollToDevice } from "../utils/scrollToDevice";
import { openInstruction } from "../utils/openInstruction";
import { scrollToContacts } from "../utils/scrollToContacts";

type THeaderNavs = {
  value: string;
  path?: string;
  function?: () => void;
};

export const headerNavs: THeaderNavs[] = [
  {
<<<<<<< HEAD
    value: "Я очень",
    function: scrollToDevice,
  },
  {
    value: "Сильно",
    path: routes.store,
  },
  {
    value: "Просто",
    function: openInstruction,
  },
  {
    value: "Ступив",
=======
    value: "Устройство",
    function: scrollToDevice,
  },
  {
    value: "Магазин",
    path: routes.store,
  },
  {
    value: "Инструкция",
    function: openInstruction,
  },
  {
    value: "Контакты",
>>>>>>> 53e526b (asd)
    function: scrollToContacts,
  },
];
