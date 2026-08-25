exports.handler = async function() {
    const chave = process.env.PERENUAL_API_KEY;

    const resposta = await fetch(
        `https://www.perenual.com/api/v2/species-list?key=${chave}&indoor=1&watering=average&sunlight=part_shade`
    );

    const dados = await resposta.json();

    return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados)
    };
};