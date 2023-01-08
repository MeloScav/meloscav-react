// Filter empty classes and join with a space
const classNames = (...classes) => classes.filter(Boolean).join(" ");
export default classNames;