// Define the 20 red flag categories (we add one more to reach 20)
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
  "Aggressive Behavior": 0,      // This will include both overt aggression and abuse tendencies.
  "Insecure Attachment": 0,
  "Gaslighting": 0,
  "Overly Secretive": 0,
  "Inconsistent Behavior": 0,
  "Substance Abuse": 0,
  "Excessive Dependency": 0,
  "Refusal to Grow": 0,
  "Lack of Self-Awareness": 0,
  "Abuse": 0                   // If you want to track abuse separately, or you can merge it into Aggressive Behavior.
};

// List of 40 questions – each question is an object with a prompt, a target red flag, and three answer options.
const questions = [
  // Q1–Q20
  {
    question: "In group conversations, do you often dismiss or ignore the feelings of others?",
    flag: "Lack of Empathy",
    answers: [
      { label: "Strongly Agree", points: 2 },
      { label: "Agree", points: 1 },
      { label: "Disagree", points: 0 }
    ]
  },
  {
    question: "When making plans, do you insist on having things your way regardless of others’ opinions?",
    flag: "Controlling Behavior",
    answers: [
      { label: "Strongly Agree", points: 2 },
      { label: "Agree", points: 1 },
      { label: "Disagree", points: 0 }
    ]
  },
  {
    question: "Do you often stretch or distort the truth to suit your narrative?",
    flag: "Dishonesty",
    answers: [
      { label: "Strongly Agree", points: 2 },
      { label: "Agree", points: 1 },
      { label: "Disagree", points: 0 }
    ]
  },
  {
    question: "Do you disregard personal boundaries even when someone explicitly asks for space?",
    flag: "Disrespect for Boundaries",
    answers: [
      { label: "Strongly Agree", points: 2 },
      { label: "Agree", points: 1 },
      { label: "Disagree", points: 0 }
    ]
  },
  {
    question: "When someone else achieves success, do you find yourself feeling envious?",
    flag: "Jealousy",
    answers: [
      { label: "Strongly Agree", points: 2 },
      { label: "Agree", points: 1 },
      { label: "Disagree", points: 0 }
    ]
  },
  {
    question: "Do you frequently believe your opinions are superior to those of others?",
    flag: "Narcissism",
    answers: [
      { label: "Strongly Agree", points: 2 },
      { label: "Agree", points: 1 },
      { label: "Disagree", points: 0 }
    ]
  },
  {
    question: "Do you manipulate conversations or situations to always get your way?",
    flag: "Manipulation",
    answers: [
      { label: "Strongly Agree", points: 2 },
      { label: "Agree", points: 1 },
      { label: "Disagree", points: 0 }
    ]
  },
  {
    question: "Do you routinely prioritize your own feelings while overlooking others’ needs?",
    flag: "Disregard for Others' Feelings",
    answers: [
      { label: "Strongly Agree", points: 2 },
      { label: "Agree", points: 1 },
      { label: "Disagree", points: 0 }
    ]
  },
  {
    question: "Do you often act impulsively, without considering the consequences?",
    flag: "Impulsivity",
    answers: [
      { label: "Strongly Agree", points: 2 },
      { label: "Agree", points: 1 },
      { label: "Disagree", points: 0 }
    ]
  },
  {
    question: "When problems arise, do you tend to avoid taking responsibility?",
    flag: "Avoiding Responsibility",
    answers: [
      { label: "Strongly Agree", points: 2 },
      { label: "Agree", points: 1 },
      { label: "Disagree", points: 0 }
    ]
  },
  {
    question: "In heated situations, do you resort to verbal or physical aggression?",
    flag: "Aggressive Behavior",
    answers: [
      { label: "Strongly Agree", points: 2 },
      { label: "Agree", points: 1 },
      { label: "Disagree", points: 0 }
    ]
  },
  {
    question: "Do you constantly worry that others will hurt or betray you?",
    flag: "Insecure Attachment",
    answers: [
      { label: "Strongly Agree", points: 2 },
      { label: "Agree", points: 1 },
      { label: "Disagree", points: 0 }
    ]
  },
  {
    question: "Do you twist discussions so that people start doubting their own memory or judgment?",
    flag: "Gaslighting",
    answers: [
      { label: "Strongly Agree", points: 2 },
      { label: "Agree", points: 1 },
      { label: "Disagree", points: 0 }
    ]
  },
  {
    question: "Do you prefer to keep important details of your life hidden from others?",
    flag: "Overly Secretive",
    answers: [
      { label: "Strongly Agree", points: 2 },
      { label: "Agree", points: 1 },
      { label: "Disagree", points: 0 }
    ]
  },
  {
    question: "Do you often change your opinions or plans, making you seem unpredictable?",
    flag: "Inconsistent Behavior",
    answers: [
      { label: "Strongly Agree", points: 2 },
      { label: "Agree", points: 1 },
      { label: "Disagree", points: 0 }
    ]
  },
  {
    question: "Do you sometimes use substances to cope with stress or emotions?",
    flag: "Substance Abuse",
    answers: [
      { label: "Strongly Agree", points: 2 },
      { label: "Agree", points: 1 },
      { label: "Disagree", points: 0 }
    ]
  },
  {
    question: "Do you rely on others so heavily for emotional support that it feels overwhelming?",
    flag: "Excessive Dependency",
    answers: [
      { label: "Strongly Agree", points: 2 },
      { label: "Agree", points: 1 },
      { label: "Disagree", points: 0 }
    ]
  },
  {
    question: "When confronted with criticism, do you refuse to change your ways?",
    flag: "Refusal to Grow",
    answers: [
      { label: "Strongly Agree", points: 2 },
      { label: "Agree", points: 1 },
      { label: "Disagree", points: 0 }
    ]
  },
  {
    question: "Are you often unaware of how your behavior affects those around you?",
    flag: "Lack of Self-Awareness",
    answers: [
      { label: "Strongly Agree", points: 2 },
      { label: "Agree", points: 1 },
      { label: "Disagree", points: 0 }
    ]
  },

  // Q21–Q40 (repeating similar themes with slight variations)
  {
    question: "Do you often ignore when someone expresses hurt or disappointment?",
    flag: "Lack of Empathy",
    answers: [
      { label: "Strongly Agree", points: 2 },
      { label: "Agree", points: 1 },
      { label: "Disagree", points: 0 }
    ]
  },
  {
    question: "When making decisions in a relationship, do you insist on controlling every detail?",
    flag: "Controlling Behavior",
    answers: [
      { label: "Strongly Agree", points: 2 },
      { label: "Agree", points: 1 },
      { label: "Disagree", points: 0 }
    ]
  },
  {
    question: "Do you often exaggerate facts or omit details to make yourself look better?",
    flag: "Dishonesty",
    answers: [
      { label: "Strongly Agree", points: 2 },
      { label: "Agree", points: 1 },
      { label: "Disagree", points: 0 }
    ]
  },
  {
    question: "Do you dismiss others' need for privacy even when they've clearly set boundaries?",
    flag: "Disrespect for Boundaries",
    answers: [
      { label: "Strongly Agree", points: 2 },
      { label: "Agree", points: 1 },
      { label: "Disagree", points: 0 }
    ]
  },
  {
    question: "When a friend succeeds, do you struggle to feel happy for them?",
    flag: "Jealousy",
    answers: [
      { label: "Strongly Agree", points: 2 },
      { label: "Agree", points: 1 },
      { label: "Disagree", points: 0 }
    ]
  },
  {
    question: "Do you frequently monopolize conversations with stories of your own achievements?",
    flag: "Narcissism",
    answers: [
      { label: "Strongly Agree", points: 2 },
      { label: "Agree", points: 1 },
      { label: "Disagree", points: 0 }
    ]
  },
  {
    question: "Do you steer conversations to ensure the focus remains on your perspective?",
    flag: "Manipulation",
    answers: [
      { label: "Strongly Agree", points: 2 },
      { label: "Agree", points: 1 },
      { label: "Disagree", points: 0 }
    ]
  },
  {
    question: "Do you consistently put your needs above those of people close to you?",
    flag: "Disregard for Others' Feelings",
    answers: [
      { label: "Strongly Agree", points: 2 },
      { label: "Agree", points: 1 },
      { label: "Disagree", points: 0 }
    ]
  },
  {
    question: "Do you act on impulse, without pausing to think about potential consequences?",
    flag: "Impulsivity",
    answers: [
      { label: "Strongly Agree", points: 2 },
      { label: "Agree", points: 1 },
      { label: "Disagree", points: 0 }
    ]
  },
  {
    question: "When mistakes occur, do you quickly shift the blame onto someone else?",
    flag: "Avoiding Responsibility",
    answers: [
      { label: "Strongly Agree", points: 2 },
      { label: "Agree", points: 1 },
      { label: "Disagree", points: 0 }
    ]
  },
  {
    question: "In conflicts, do you resort to yelling or even physical force to assert dominance?",
    flag: "Aggressive Behavior",
    answers: [
      { label: "Strongly Agree", points: 2 },
      { label: "Agree", points: 1 },
      { label: "Disagree", points: 0 }
    ]
  },
  {
    question: "Do you constantly fear that people you love will abandon or hurt you?",
    flag: "Insecure Attachment",
    answers: [
      { label: "Strongly Agree", points: 2 },
      { label: "Agree", points: 1 },
      { label: "Disagree", points: 0 }
    ]
  },
  {
    question: "Do you often use subtle comments to make others question their memory of events?",
    flag: "Gaslighting",
    answers: [
      { label: "Strongly Agree", points: 2 },
      { label: "Agree", points: 1 },
      { label: "Disagree", points: 0 }
    ]
  },
  {
    question: "Do you tend to keep significant parts of your life hidden from close friends and family?",
    flag: "Overly Secretive",
    answers: [
      { label: "Strongly Agree", points: 2 },
      { label: "Agree", points: 1 },
      { label: "Disagree", points: 0 }
    ]
  },
  {
    question: "Do you frequently change your stance on issues, confusing those around you?",
    flag: "Inconsistent Behavior",
    answers: [
      { label: "Strongly Agree", points: 2 },
      { label: "Agree", points: 1 },
      { label: "Disagree", points: 0 }
    ]
  },
  {
    question: "Do you rely on alcohol or other substances to manage stress or emotions?",
    flag: "Substance Abuse",
    answers: [
      { label: "Strongly Agree", points: 2 },
      { label: "Agree", points: 1 },
      { label: "Disagree", points: 0 }
    ]
  },
  {
    question: "Do you seek constant emotional reassurance from others, often to an extreme degree?",
    flag: "Excessive Dependency",
    answers: [
      { label: "Strongly Agree", points: 2 },
      { label: "Agree", points: 1 },
      { label: "Disagree", points: 0 }
    ]
  },
  {
    question: "When others offer advice for improvement, do you dismiss it outright?",
    flag: "Refusal to Grow",
    answers: [
      { label: "Strongly Agree", points: 2 },
      { label: "Agree", points: 1 },
      { label: "Disagree", points: 0 }
    ]
  },
  {
    question: "Are you often unaware of how your decisions and actions affect those around you?",
    flag: "Lack of Self-Awareness",
    answers: [
      { label: "Strongly Agree", points: 2 },
      { label: "Agree", points: 1 },
      { label: "Disagree", points: 0 }
    ]
  }
];

// -------------------------------
// DISPLAY QUESTIONS
// -------------------------------
function displayQuestions() {
  const form = document.getElementById("quiz-form");
  form.innerHTML = ""; // Clear any existing questions
  questions.forEach((item, index) => {
    let questionHTML = `<div class="question">
                          <p>${index + 1}. ${item.question}</p>`;
    // Create radio buttons for each answer option
    item.answers.forEach((option, optionIndex) => {
      questionHTML += `
        <input type="radio" id="q${index}a${optionIndex}" name="q${index}" value="${option.points}" />
        <label for="q${index}a${optionIndex}">${option.label}</label><br />
      `;
    });
    questionHTML += `</div>`;
    form.innerHTML += questionHTML;
  });
}

// -------------------------------
// CALCULATE RESULTS
// -------------------------------
// We need to calculate scores per red flag category.
// Since each question contributes to a specific category, we'll tally the points.
function calculateResults() {
  // Create a copy of redFlags to tally scores
  const tally = { ...redFlags };

  // Also, count the number of questions per category to get maximum possible points.
  const categoryCount = {};
  for (let cat in redFlags) {
    categoryCount[cat] = 0;
  }

  // Loop through each question, get the selected answer, and add to tally.
  questions.forEach((item, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected) {
      const points = parseInt(selected.value);
      // Increase tally for the corresponding red flag
      tally[item.flag] += points;
      categoryCount[item.flag] += 1;
    }
  });

  // Build result HTML with percentage for each category.
  let resultHTML = "<h2>Results</h2>";
  for (let flag in tally) {
    // Maximum possible for this category is: (# of questions for category) * 2 points.
    let maxPoints = categoryCount[flag] * 2;
    // If no question was answered for this category, skip or set percentage to 0.
    let percentage = maxPoints ? (tally[flag] / maxPoints) * 100 : 0;
    resultHTML += `<p>🍓 ${flag}: ${percentage.toFixed(0)}%</p>`;
  }
  document.getElementById("results").innerHTML = resultHTML;
}

// -------------------------------
// SUBMIT HANDLER
// -------------------------------
document.getElementById("submit-button").addEventListener("click", function(event) {
  event.preventDefault();
  calculateResults();
});

// Initialize quiz on page load.
displayQuestions();
