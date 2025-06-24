export const telephoneFormatter = (phoneNumber: string): string => {
    // Удаляем все нецифровые символы
    if (phoneNumber){
        let cleaned = ""
        if (phoneNumber.slice(0, 1) === "+" || phoneNumber.slice(0, 1) === "8" || phoneNumber.slice(0, 1) === "7"){
             cleaned = phoneNumber.slice(1)
        }
        if (!cleaned.length){
            return "+7"
        }
        if (cleaned.length <= 3) {
          return `+7 ${cleaned}`;
        } else if (cleaned.length <= 6) {
          return `+7 ${cleaned.slice(0, 3)} ${cleaned.slice(3)}`;
        } else if (cleaned.length <= 8) {
          return `+7 ${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6)}`;
        } else {
          return `+7 ${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6, 8)} ${cleaned.slice(8)}`;
        }
    }
    else{
        return ""
    }
  };