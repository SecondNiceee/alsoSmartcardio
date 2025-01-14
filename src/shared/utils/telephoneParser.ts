
let lastLength = 0
export const telephoneParser = (formattedPhoneNumber: string): string => {

    if (formattedPhoneNumber.length === 1 && lastLength === 0){

        if (formattedPhoneNumber.slice(0,1) === "+"){

            lastLength = ('+' + formattedPhoneNumber.replace(/\D/g, '')).length

            return '+' + formattedPhoneNumber.replace(/\D/g, '')
        }


    }

    lastLength = formattedPhoneNumber.replace(/\D/g, '').length

    return formattedPhoneNumber.replace(/\D/g, '')
    
};