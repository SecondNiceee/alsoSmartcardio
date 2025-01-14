export const blockScroll = () => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      
    // Сохраняем текущий padding
    const originalPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right')) || 0;
    
    // Блокируем скролл и добавляем padding равный ширине скроллбара
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${originalPadding + scrollbarWidth}px`;
}

