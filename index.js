const Pessoa = require('./models/pessoa');

async function sincronizar(){
  Pessoa.sync();
}
sincronizar();