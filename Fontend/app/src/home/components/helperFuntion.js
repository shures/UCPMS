export function handleError(data) {
    let errors=[];
    for (let key in data){
        data[key].forEach((item,index,arr)=>{
            errors.push(item);
        });
    }
    return errors;
}