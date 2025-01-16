'use client'
export const unBlockScroll = () => {
      
    // Сохраняем текущий padding
    const originalPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right')) || 0;

    document.body.style.overflow = "auto";
    document.body.style.paddingRight = `20px`;
}