function superbowlWin(record) {
  const win = record.find(entry => entry.result === "W");
  return win ? win.year : undefined;
}

const record = [
  { year: "2015", result: "N/A" },
  { year: "2016", result: "N/A" },
  { year: "2017", result: "W" },
  { year: "2018", result: "L" },
];

console.log(superbowlWin(record)); 
