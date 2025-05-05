// Red flag categories
const redFlags = {
  "Lack of Empathy": 0,
  "Controlling Behavior": 0,
  "Dishonesty": 0,
  "Disrespect for Boundaries": 0,
  "Jealousy": 0,
  "Narcissism": 0,
  "Manipulation": 0,
  "Disregard for Others' Feelings": 0,
  "Impulsivity": 0,
  "Avoiding Responsibility": 0,
  "Abuse": 0,
  "Insecure Attachment": 0,
  "Gaslighting": 0,
  "Overly Secretive": 0,
  "Inconsistent Behavior": 0,
  "Substance Abuse": 0,
  "Aggressive Behavior": 0,
  "Excessive Dependency": 0,
  "Refusal to Grow": 0
};

// List of questions
const questions = [
  {
    question: "Do you often avoid taking responsibility for your actions?",
    answers: [
      { label: "Yes, I avoid it often.", flag: "Avoiding Responsibility", points: 2 },
      { label: "Sometimes, depending on the situation.", flag: "Avoiding Responsibility", points: 1 },
      { label: "No, I try to take responsibility.", flag: "Avoiding Responsibility", points: 0 }
    ]
  },
  {
    question: "How often do you feel like you have to control others?",
    answers: [
      { label: "Very often.", flag: "Controlling Behavior", points: 2 },
      { label: "Sometimes, but I try to control less.", flag: "Controlling Behavior", points: 1 },
      { label: "Never, I try to be flexible.", flag: "Controlling Behavior", points: 0 }
    ]
  },
  {
    question: "Do you often disregard other people's feelings?",
    answers: [
      { label: "Yes, I don't think about how my actions affect others.", flag: "Disregard for Others' Feelings", points: 2 },
      { label: "Sometimes, but I try to consider others.", flag: "Disregard for Others' Feelings", points: 1 },
      { label: "No, I always try to be considerate.", flag: "Disregard for Others' Feelings", points: 0 }
    ]
  },
  {
    question: "Do you lie to protect yourself from consequences?",
    answers: [
      { label: "Yes, I do it often.", flag: "Dishonesty", points: 2 },
      { label: "Sometimes, when it's necessary.", flag: "Dishonesty", points: 1 },
      { label: "No, I try to be honest.", flag: "Dishonesty", points: 0 }
    ]
  },
  {
    question: "Do you find it hard to apologize, even when you know you are wrong?",
    answers: [
      { label: "Yes, I struggle with it.", flag: "Narcissism", points: 2 },
      { label: "Sometimes, but I try to apologize when I should.", flag: "Narcissism", points: 1 },
      { label: "No, I apologize quickly when I'm wrong.", flag: "Narcissism", points: 0 }
    ]
  },
  {
    question: "How often do you make others feel guilty for your own mistakes?",
    answers: [
      { label: "Often, I try to avoid blame.", flag: "Manipulation", points: 2 },
      { label: "Sometimes, if I’m cornered.", flag: "Manipulation", points: 1 },
      { label: "Never, I take responsibility for my actions.", flag: "Manipulation", points: 0 }
    ]
  },
  {
    question: "Do you find yourself getting easily jealous when others succeed?",
    answers: [
      { label: "Yes, I feel envious often.", flag: "Jealousy", points: 2 },
      { label: "Sometimes, but I try to control it.", flag: "Jealousy", points: 1 },
      { label: "No, I am genuinely happy for others.", flag: "Jealousy", points: 0 }
    ]
  },
  {
    question: "Are you often dismissive of others' opinions, especially if they contradict yours?",
    answers: [
      { label: "Yes, I dismiss others easily.", flag: "Narcissism", points: 2 },
      { label: "Sometimes, if I think I’m right.", flag: "Narcissism", points: 1 },
      { label: "No, I value others’ opinions.", flag: "Narcissism", points: 0 }
    ]
  },
  {
    question: "How frequently do you avoid addressing issues that bother you?",
    answers: [
      { label: "I avoid them all the time.", flag: "Avoiding Responsibility", points: 2 },
      { label: "Sometimes, but I try to deal with issues.", flag: "Avoiding Responsibility", points: 1 },
      { label: "I address issues immediately.", flag: "Avoiding Responsibility", points: 0 }
    ]
  },
  {
    question: "Do you feel the need to dominate others to feel better about yourself?",
    answers: [
      { label: "Yes, I often try to control others.", flag: "Controlling Behavior", points: 2 },
      { label: "Sometimes, but I’m aware of it.", flag: "Controlling Behavior", points: 1 },
      { label: "No, I prefer equality and fairness.", flag: "Controlling Behavior", points: 0 }
    ]
  },
  {
    question: "When confronted with a mistake, do you often shift blame to others?",
    answers: [
      { label: "Yes, I rarely take the blame.", flag: "Dishonesty", points: 2 },
      { label: "Sometimes, but I try to be honest.", flag: "Dishonesty", points: 1 },
      { label: "No, I take full responsibility.", flag: "Dishonesty", points: 0 }
    ]
  },
  {
    question: "Do you regularly disregard someone's boundaries if they aren’t expressed clearly?",
    answers: [
      { label: "Yes, I often disregard boundaries.", flag: "Disrespect for Boundaries", points: 2 },
      { label: "Sometimes, but I try to respect boundaries.", flag: "Disrespect for Boundaries", points: 1 },
      { label: "No, I always respect boundaries.", flag: "Disrespect for Boundaries", points: 0 }
    ]
  },
  {
    question: "Do you often manipulate situations to get your way?",
    answers: [
      { label: "Yes, I do it often.", flag: "Manipulation", points: 2 },
      { label: "Sometimes, when I need to.", flag: "Manipulation", points: 1 },
      { label: "No, I don't manipulate others.", flag: "Manipulation", points: 0 }
    ]
  },
  {
    question: "Do you avoid facing reality even when it’s clear that things aren’t working out?",
    answers: [
      { label: "Yes, I ignore problems and hope they go away.", flag: "Refusal to Grow", points: 2 },
      { label: "Sometimes, but I try to face issues.", flag: "Refusal to Grow", points: 1 },
      { label: "No, I try to face reality head-on.", flag: "Refusal to Grow", points: 0 }
    ]
  },
  {
    question: "Do you become easily aggressive when you don’t get what you want?",
    answers: [
      { label: "Yes, I get frustrated and lash out.", flag: "Aggressive Behavior", points: 2 },
      { label: "Sometimes, but I try to keep my cool.", flag: "Aggressive Behavior", points: 1 },
      { label: "No, I remain calm and patient.", flag: "Aggressive Behavior", points: 0 }
    ]
  },
  {
    question: "Do you have difficulty trusting others, even in close relationships?",
    answers: [
      { label: "Yes, I often distrust people.", flag: "Insecure Attachment", points: 2 },
      { label: "Sometimes, but I try to trust others more.", flag: "Insecure Attachment", points: 1 },
      { label: "No, I trust people easily.", flag: "Insecure Attachment", points: 0 }
    ]
  },
  {
    question: "How often do you feel like others are intentionally trying to undermine you?",
    answers: [
      { label: "Frequently, I feel like everyone is against me.", flag: "Gaslighting", points: 2 },
      { label: "Sometimes, but I try to let it go.", flag: "Gaslighting", points: 1 },
      { label: "Never, I feel supported by others.", flag: "Gaslighting", points: 0 }
    ]
  },
  {
    question: "Do you tend to hide important aspects of your life from others?",
    answers: [
      { label: "Yes, I prefer to keep things private.", flag: "Overly Secretive", points: 2 },
      { label: "Sometimes, but I'm generally open.", flag: "Overly Secretive", points: 1 },
      { label: "No, I have nothing to hide.", flag: "Overly Secretive", points: 0 }
    ]
  },
  // Repeat similar structure for remaining questions (questions 19-40)
];

// Function to display questions
function displayQuestions() {
  const form = document.getElementById("quiz-form");
  questions.forEach((q, index) => {
    let questionHTML = `<div class="question">
                          <p>${q.question}</p>`;
    q.answers.forEach((answer, i) => {
      questionHTML += `
        <input type="radio" id="q${index}a${i}" name="q${index}" value="${answer.points}" />
        <label for="q${index}a${i}">${answer.label}</label><br />
      `;
    });
    questionHTML += `</div>`;
    form.innerHTML += questionHTML;
  });
}

// Function to calculate results
function calculateResults() {
  let totalScore = 0;
  let result = { ...redFlags };

  questions.forEach((q, index) => {
    const selectedAnswer = document.querySelector(`input[name="q${index}"]:checked`);
    if (selectedAnswer) {
      const points = parseInt(selectedAnswer.value);
      const flag = q.answers.find(a => a.points === points).flag;
      result[flag] += points;
    }
  });

  let resultHTML = "<h2>Results</h2>";
  for (let flag in result) {
    let percentage = (result[flag] / 2) * 100;
    resultHTML += `<p>${flag}: ${percentage.toFixed(2)}%</p>`;
  }

  document.getElementById("results").innerHTML = resultHTML;
}

document.getElementById("submit-button").addEventListener("click", function(event) {
  event.preventDefault();
  calculateResults();
});

displayQuestions();
