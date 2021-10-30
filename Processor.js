class Processor {
  static Process(data) {
    var textSplited = data.split("\n");
    var rows = [];
    textSplited.forEach((row) => {
      let arr = row.split(",");

      rows.push(arr);
    });
    return rows;
  }
}

module.exports = Processor;
