
export const goBack = () => {
    // useRouter не работает!
    // Заменяем текущее состояние истории
    window.history.replaceState(null, "", window.location.href);
    // Переходим на предыдущий маршрут
    window.history.back();
  };
