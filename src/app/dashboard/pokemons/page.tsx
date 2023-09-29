
const getWizards = async () => {
    const data =  await fetch('https://hp-api.onrender.com/api/characters')
    .then(res => res.json());

    return data;
}

const PokemonsPage = async () => {

    const wizards = await getWizards();

    return ( 
        <>
            { JSON.stringify(wizards)}
        </>
    );
}

export default PokemonsPage;