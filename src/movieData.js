const url = `http://www.omdbapi.com/?i=tt3896198&apikey=1812c1a7`
const getData = async() => {
    let movieData = await fetch(url)
    let parsedData = await movieData.json()
    console.log(parsedData)
    return parsedData
}
console.log(getData)