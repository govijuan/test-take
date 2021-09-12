export const getIdiomTxt = (culture: string | undefined) => {
    switch(culture){
        case 'en-US':
            return 'EUA - English (EN)'
        case 'pt-BR':
            return 'BRA - Portugês (PT)'
    }
}