const { level1, level2, level3 } = require("./questions");
const express = require("express");

const server = express();

server.get("/:level", (req, res) => {
  const { level } = req.params;
  let questions = [];

  if (level === "level1") {
    questions = level1;
  } else if (level === "level2") {
    questions = level2;
  } else if (level === "level3") {
    questions = level3;
  } else {
    return res.json({
      error: "questions only exists in /level1, /level2, or '/level3",
    });
  }
  const randIdx = Math.floor(Math.random() * questions.length);
  return res.json({
    qCount: questions.length,
    q: questions[randIdx],
  });
});

server.listen(process.env.PORT || 3000, () => {
  console.log("server listening");
});
