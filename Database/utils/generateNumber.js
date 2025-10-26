export default function generateNumber(lastItem, itemType, code) {

    let nextNumber = 1
    const prefix = getPrefix(itemType)
    if (lastItem) {

        const lastItemCode = lastItem[`${code}`]
        const numericPart = lastItemCode.replace(prefix, '');
        nextNumber = parseInt(numericPart) + 1;
    }

    return `${prefix}${String(nextNumber).padStart(6, '0')}`;
}
function getPrefix(itemType) {

    const prefixes = {
        sales: 'SO-',
        inventory: 'IN-',
        purchase: 'PU-',
        item: 'iM-',
        payment: 'PY',
    }
    return prefixes[itemType]
}
