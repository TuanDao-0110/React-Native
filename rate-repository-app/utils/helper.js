import { highestRate, lastestRepo, lowestRate } from './router';

export const shortenNumber = (number) => {
    if (number >= 1000 && number < 1000000) {
        return (number / 1000).toFixed(1) + 'k';
    } else if (number >= 1000000) {
        return (number / 1000000).toFixed(1) + 'm';
    } else {
        return number.toString();
    }
}



export const setDate = (isoDate) => {
    const date = new Date(isoDate);

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based, so we add 1
    const year = date.getFullYear();

    const formattedDate = `${day}.${month}.${year}`;
    return formattedDate
}

export const sortArrayOfObjectsByDate = (list, required) => {
    if (required === lastestRepo) {
        return list.sort((a, b) => new Date(a['createdAt']) - new Date(b['createdAt']));
    }
    if (required === highestRate) {
        return list.sort((a, b) => b.ratingAverage - a.ratingAverage);
    }
    if (required === lowestRate) {

        return list.sort((a, b) => a.ratingAverage - b.ratingAverage);
    }
    return list
}