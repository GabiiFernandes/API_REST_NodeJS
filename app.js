const express = require('express');
const cors = require('cors');
const app = express();

const Animais = require('./Animais');
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
});

app.get('/select-one', async(req, res) => {

    await Animais.findAll({
        where: { id: req.query.id },
        attributes: ['id', 'Nome', 'Idade', 'Tipo','Raca', 'Observacao', 'NomeDono', 'Endereco', 'Telefone']
    })
        .then((pet) => {
            return res.json({
                erro: false,
                pet
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Nenhum valor encontrado!"
            });
        });
});

app.get('/', async(req, res) => {

    await Animais.findAll({
        attributes: ['id', 'Nome', 'Idade', 'Tipo','Raca', 'Observacao', 'NomeDono', 'Endereco', 'Telefone']
    })
        .then((pets) => {
            return res.json({
                erro: false,
                pets
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Nenhum valor encontrado!"
            });
        });
});

app.post('/add-pet', async (req, res) => {

    await Animais.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Dados cadastrado com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Pet não cadastrado com sucesso!"
        });
    });
    
});

app.post('/remove-pet', async (req, res) => {
    await Animais.destroy({
        where: { id: req.body.id }
    })
    
});

app.put('/alter-pet', async (req, res) => {
     await Animais.update(
        {Nome: req.body.Nome,
        Idade: req.body.Idade,
        Tipo: req.body.Tipo,
        Raca: req.body.Raca,
        Observacao: req.body.Observacao,
        NomeDono: req.body.NomeDono,
        Endereco: req.body.Endereco,
        Telefone: req.body.Telefone},
        {where: {id: req.body.id}}
    ) 
});

app.listen(3000, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:3000");
});