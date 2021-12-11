const Reader = require("./Reader");
const Writer = require("./Writer");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");

const leitor = new Reader();
const escritor = new Writer();

leitor.Read("./users.csv");

(async function main() {
  let dados = await leitor.Read("./users.csv");
  let dadosProcessados = Processor.Process(dados);
  let usuarios = new Table(dadosProcessados);

  var html = await HtmlParser.Parse(usuarios);

  escritor.Write(Date.now() + ".html", html);
})();
