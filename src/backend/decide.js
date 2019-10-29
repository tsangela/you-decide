const data = require("../data/phrases.json");

export function decide(results) {
  if (!results || results.length === 0) {
    alert("🚨 No locations to decide from!");
    return;
  }

  const phrase = random(data.phrases);
  const result = random(results);
  const emoji = ' ' + random(data.emojis);
  alert(phrase.prefix + result.name + phrase.suffix + emoji);
}

function random(list) {
  return list[Math.floor(Math.random() * list.length)];
}