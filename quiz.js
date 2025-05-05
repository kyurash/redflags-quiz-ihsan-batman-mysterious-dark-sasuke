const quizData = [
  {
    question: "You often feel that your thoughts are misunderstood by others.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You prefer being alone rather than with others, even in social settings.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You avoid discussing your emotions, even when it's necessary.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You find it difficult to trust others, even when they show care or affection.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You tend to get upset or defensive when someone tries to give you advice.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You often think about past relationships, even though they’re no longer relevant.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You prefer to handle problems on your own rather than asking for help.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You frequently feel like you’re the victim in most situations.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You can be overly critical of yourself, even for small mistakes.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You find it hard to let go of past conflicts, even after they’ve been resolved.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You often make decisions impulsively without considering the consequences.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You tend to exaggerate situations or make things sound worse than they are.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You struggle with setting boundaries in relationships, leading to stress.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You feel overwhelmed when there are multiple demands on your time.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You often feel that people don’t understand your needs or desires.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You find it difficult to admit when you’re wrong, even in small matters.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You often feel that others are judging you or your choices.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You avoid confrontation, even when it means ignoring important issues.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You often feel anxious or fearful about the future, especially in social contexts.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You tend to feel uncomfortable with vulnerability or showing emotions to others.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You believe that others should prioritize your needs over their own.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You are sometimes jealous or possessive in relationships.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You are often overly focused on your own flaws, even when others don’t notice them.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You prefer to make decisions based on your feelings, rather than facts or logic.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You feel a need to control situations to feel comfortable or safe.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You often feel overwhelmed by your emotions and find it hard to manage them.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You struggle to forgive people, even after they've apologized.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You find it hard to accept compliments or positive feedback.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You tend to make excuses for other people’s mistakes or bad behavior.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You sometimes ignore warning signs or red flags because you don’t want to be alone.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You have difficulty trusting people, even those who are close to you.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You find it hard to be assertive or express your needs clearly in relationships.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You tend to avoid talking about serious topics, even when they’re important.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You often feel that you're not good enough or that you don’t measure up.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You frequently feel misunderstood, even when others are trying to understand you.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You have trouble letting go of past trauma or painful experiences.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You struggle with seeing things from others’ perspectives, especially during disagreements.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You prefer to keep your distance from others emotionally to avoid being hurt.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You tend to overanalyze situations and make them more complicated than they need to be.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You frequently feel overwhelmed by stress, even in low-pressure situations.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You avoid conflict, even when it's necessary to address it for the sake of resolution.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You tend to blame others for your problems or challenges.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You often feel that you don't belong or that you're an outsider in social settings.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You tend to make decisions based on emotions rather than rational thought.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You find it difficult to connect with others on an emotional level.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You are often preoccupied with fears or worries about being rejected.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You avoid taking responsibility for your actions, preferring to blame others.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You often feel like you are living in the past or stuck in old patterns.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You find it hard to ask for what you need in relationships, even when it’s important.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  },
  {
    question: "You sometimes push people away out of fear of being hurt or rejected.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]
  }
];

const quizContainer = document.getElementById("quiz-form");

quizData.forEach((item, index) => {
  const questionElement = document.createElement("div");
  questionElement.classList.add("question");
  
  const questionTitle = document.createElement("h2");
  questionTitle.textContent = `${index + 1}. ${item.question}`;
  questionElement.appendChild(questionTitle);
  
  item.options.forEach((option, optionIndex) => {
    const label = document.createElement("label");
    label.textContent = option;

    const input = document.createElement("input");
    input.type = "radio";
    input.name = `question${index}`;
    input.value = optionIndex + 1;

    questionElement.appendChild(input);
    questionElement.appendChild(label);
  });
  
  quizContainer.appendChild(questionElement);
});

document.getElementById("submit-button").addEventListener("click", function(event) {
  event.preventDefault();
  
  const answers = [];
  const inputs = document.querySelectorAll("input[type='radio']:checked");

  inputs.forEach(input => {
    answers.push(parseInt(input.value));
  });
  
  const percentage = (answers.length / quizData.length) * 100;
  
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `You answered ${percentage}% of the questions correctly.`;
});
]
