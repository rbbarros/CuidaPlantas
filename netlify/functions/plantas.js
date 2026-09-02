exports.handler = async function() {
    const chave = process.env.PERENUAL_API_KEY;
    const url = `https://perenual.com/api/species-list?key=${chave}&indoor=1`;
    const resposta = await fetch(url);
    const dados = await resposta.json();

    // Log para debug - veja no painel do Netlify em Functions
    console.log("Primeira planta:", JSON.stringify(dados.data?.[0], null, 2));

    return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados)
    };
};