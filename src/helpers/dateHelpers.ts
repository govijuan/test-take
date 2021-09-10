export const formatedDate = (date:string) => {
    const d = new Date(date)
    const year = d.getFullYear().toString()
    let month = (d.getMonth() + 1).toString()
    let day = d.getDate().toString()
    if(parseInt(day) < 10){
        day = '0' + day
    }
    if(parseInt(month) < 10){
        month = '0' + month
    }
    let completeDate = ''
    if( isNaN(d.getFullYear()) || isNaN(d.getMonth()) || isNaN(d.getDate())){
        completeDate = 'Invalid Date Format'
    }else{
        completeDate = day + '/' + month + '/' + year
    }
    return completeDate
}