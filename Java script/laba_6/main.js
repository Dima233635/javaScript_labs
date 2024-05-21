function filterByDataType(array, dataType) {
    return array.filter( (item, index, arr)=> typeof item !== dataType);
}

const data = ["hello", "world", 23, "23", null];
const dataType = prompt("Введите тип данных, который хотите исключить:");
// const dataType = "string"

const filteredData = filterByDataType(data, dataType);
console.log(filteredData);