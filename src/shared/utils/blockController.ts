'use client'
// let originalPadding = 0;

export const blockScroll = () => {
    if (typeof window === 'object'){

        // const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
          
        // Сохраняем текущий padding
        // originalPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right')) || 0;
        
        // Блокируем скролл и добавляем padding равный ширине скроллбара
        document.body.style.overflow = "hidden";
        // document.body.style.paddingRight = `${originalPadding + scrollbarWidth}px`;
    }
}

export const unBlockScroll = () => {
      
    // Сохраняем текущий padding

    document.body.style.overflow = "auto";
    // document.body.style.paddingRight = `${originalPadding}px`;
}