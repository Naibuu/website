export function getElement<T extends HTMLElement>(id: string): T | null {
    return document.getElementById(id) as T | null
}

export function getElements<T extends HTMLElement>(
    selector: string,
): NodeListOf<T> {
    return document.querySelectorAll<T>(selector)
}

export function queryChild<T extends HTMLElement>(
    parent: ParentNode | null,
    selector: string,
): T | null {
    return parent?.querySelector<T>(selector) ?? null
}

export function onClick<T extends HTMLElement>(
    id: string,
    handler: (element: T, event: MouseEvent) => void,
): void {
    const element = getElement<T>(id)

    if (!element) return

    element.addEventListener('click', (event) => handler(element, event))
}

export function onClickAll<T extends HTMLElement>(
    selector: string,
    handler: (element: T, event: MouseEvent) => void,
): void {
    getElements<T>(selector).forEach((element) => {
        element.addEventListener('click', (event) => handler(element, event))
    })
}

export function setAttribute<T extends HTMLElement>(
    id: string,
    name: string,
    value: string,
): void {
    const element = getElement<T>(id)

    if (element) element.setAttribute(name, value)
}

export function setRootAttribute(name: string, value: string): void {
    document.documentElement.setAttribute(name, value)
}

export function onEvent<T extends HTMLElement>(
    id: string,
    event: keyof HTMLElementEventMap,
    handler: (element: T, event: Event) => void,
): void {
    const element = getElement<T>(id)

    if (!element) return

    element.addEventListener(event, (event) => handler(element, event))
}

export function toggleClass<T extends HTMLElement>(
    id: string,
    className: string,
): void {
    const element = getElement<T>(id)

    if (element) element.classList.toggle(className)

    console.debug('[DOM] Toggled class:', className)
}

export function toggleElementClass<T extends HTMLElement>(
    element: T | null,
    className: string,
): void {
    element?.classList.toggle(className)

    console.debug('[DOM] Toggled class:', className)
}
