export default function dateFormatter(date) {
    const dateObject = new Date(date);
    return dateObject.toLocaleDateString("uk-UA");
}
