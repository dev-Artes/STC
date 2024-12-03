export const convertTimestamp = ( timestamp ) => {
    let date = timestamp.toDate()
    let dd = date.getDate()
    let mm = date.getMonth() + 1
    let yyyy = date.getFullYear()
    date = dd + '/' + mm + '/' + yyyy

    return date;
}