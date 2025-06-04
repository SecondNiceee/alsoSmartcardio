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
    function: scrollToContacts,
  },
];
