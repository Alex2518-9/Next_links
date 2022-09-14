

const classNames = (...classNames: string[]) =>
    classNames.filter((className) => className).join(" ");

export { classNames };