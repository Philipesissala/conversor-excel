const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");

const leitor = new Reader();

leitor.Read("./users.csv");

(async function main() {
  let dados = await leitor.Read("./users.csv");
  let dadosProcessados = Processor.Process(dados);
  let usuarios = new Table(dadosProcessados);

  var html = await HtmlParser.Parse(usuarios);

  console.log(html);
})();
