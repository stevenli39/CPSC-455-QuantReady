const express = require("express");
const router = express.Router();
const { v4: uuid } = require("uuid");

const questions = [
  {
    id: 1,
    questionName: "Tennis game",
    question:
      "For a 3 sets tennis game, would you bet on it finishing in 2 sets or 3 sets?",
    answer:
      "Two sets - Let p=prob team 1 wins and q=prob team 2 wins. p^2 + q^2 = probability finish in two sets. 2*p*q = probability finish in three sets. p^2 + q^2 always >= 2*p*q, so the answer is two sets",
  },
  {
    id: 2,
    questionName: "Square and dots",
    question:
      "I have a square, and place three dots along the 4 edges at random. What is the probability that the dots lie on distinct edges?",
    answer:
      "3/8 - Given the edge the first dot is on, the probability the other two dots are on distinct edges is (3/4)*(2/4)",
  },
  {
    id: 3,
    questionName: "Deck of cards",
    question:
      "Two decks of cards. One deck has 52 cards, the other has 104. You pick two cards separately from a same pack. If both of two cards are red, you win. Which pack will you choose?",
    answer:
      "104 card pack - (52/104)*(51/103) > (26/52)*(25/51), or 51/103 > 25/51",
  },
  {
    id: 4,
    questionName: "Passengers on a plane",
    question:
      "A line of 100 passengers is waiting to board a plane. They each hold a ticket to one of the 100 seats on that flight. (For convenience, let's say that the nth passenger in line has a ticket for the seat number n.) Unfortunately, the first person in line is crazy, and will ignore the seat number on their ticket, picking a random seat to occupy. All of the other passengers are quite normal, and will go to their proper seat unless it is already occupied. If it is occupied, they will then find a free seat to sit in, at random. What is the probability that the last (100th) person to board the plane will sit in their proper seat (#100)?",
    answer:
      "0.5 - The fate of the last passenger is determined the second either the first or last seat on the plane is taken. This statement is true because the last person will either get the first seat or the last seat. All other seats will necessarily be taken by the time the last passenger gets to pick his/her seat. Since at each choice step, the first or last seat has an equal probability of being taken, the last person will get either the first or last with equal probability: 0.5.",
  },
];

router.get("/", function (req, res, next) {
  return res.send(questions);
});

router.get("/:questionId", function (req, res, next) {
  const foundQuestion = users.find(
    (question) => question.id === req.params.questionId
  );

  if (!foundQuestion)
    return res.status(404).send({ message: "Question not found" });

  return res.send(foundQuestion);
});

router.get("/:questionId/answer", function (req, res, next) {
  const foundQuestion = users.find(
    (question) => question.id === req.params.questionId
  );

  if (!foundQuestion)
    return res.status(404).send({ message: "Question not found" });

  return res.send(foundQuestion.answer);
});

router.post("/", function (req, res, next) {
  const { questionName, question, answer } = req.body;

  if (!questionName || !question || !answer)
    return res.status(400).send({ message: "Missing fields" });

  const newQuestion = {
    id: uuid(),
    questionName,
    question,
    answer,
  };

  questions.push(newQuestion);

  return res.send(newQuestion);
});

router.put("/:questionId", function (req, res, next) {
  const { questionName, question, answer } = req.body;

  if (!questionName || !question || !answer)
    return res.status(400).send({ message: "Missing fields" });

  const foundIndex = questions.findIndex(
    (question) => question.id === req.params.questionId
  );

  if (foundIndex === -1)
    return res.status(404).send({ message: "Question not found" });

  questions[foundIndex] = {
    id: req.params.questionId,
    questionName,
    question,
    answer,
  };

  return res.send(questions[foundIndex]);
});

router.delete("/:questionId", function (req, res, next) {
  const foundIndex = questions.findIndex(
    (question) => question.id === req.params.questionId
  );

  if (foundIndex === -1)
    return res.status(404).send({ message: "Question not found" });

  questions.splice(foundIndex, 1);

  return res.send({ message: "Question deleted" });
});

module.exports = router;
