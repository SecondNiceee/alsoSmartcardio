export default function closestMultiple(element: Element, selectors: string[]): Element | null {
    for (const selector of selectors) {
        const closestElement = element.closest(selector);
        if (closestElement) {
            return closestElement;
        }
    }
    return null;
}