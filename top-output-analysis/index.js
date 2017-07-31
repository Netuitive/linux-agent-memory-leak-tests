var fs = require('fs');

var lines = fs.readFileSync('./top-output.txt', 'UTF-8').trim().split('\n').map(line => {
  var cols = line.split(' ').filter(col => col.trim());
  return [[cols[0], cols[1]].join(' '), cols[6], cols[7], cols.slice(13).join(' ')];
});

var groups = lines.reduce((map, line) => {
  if (!map[line[3]]) {
    map[line[3]] = [];
  }
  map[line[3]].push(line);
  return map;
}, {});

Object.keys(groups).forEach(key => {
  fs.writeFileSync('data/' + key + '.csv', [['date', 'virtual memory', 'actual memory', 'process'].join(', ')].concat(groups[key].map(line => {
    return line.join(', ');
  })).join('\n'));
});
