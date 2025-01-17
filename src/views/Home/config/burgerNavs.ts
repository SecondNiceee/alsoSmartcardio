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
    function: scrollToContacts,
  },
];
