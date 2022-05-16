const Pessoa = require('./models/pessoa');

(async () => {
  const pessoa = Pessoa.build({nome:"Matheus Gomes"});
  await pessoa.save().then('Salvo com sucesso').catch(error =>{
    console.log(error);
  });
})();