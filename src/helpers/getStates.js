

const GetStates = async() => {

    const url = `http://localhost:5000/states` 

    const data = await fetch(url);
    const states = await data.json()
    return states

}

export default GetStates;
