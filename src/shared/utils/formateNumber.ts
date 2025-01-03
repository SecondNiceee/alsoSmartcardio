import numeral from "numeral";

numeral.register('locale', 'custom', {
    delimiters: {
        thousands: ' ',
        decimal: '.'
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    ordinal: function (number:number) {
        return number === 1 ? 'er' : 'ème';
    },
    currency: {
        symbol: '$'
    }
});

numeral.locale('custom')


export const formatNumber = (value: number | null): string => {
    return value !== null ? numeral(value).format('0,0') : '';
};

export const parseNumber = (value: string): number | null => {
    return value === '' ? null : Number(numeral(value).value());
};