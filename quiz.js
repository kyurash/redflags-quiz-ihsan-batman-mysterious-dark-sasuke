const questions = [
  {
    question: "How do you react when someone you are close to cancels plans at the last minute?",
    answers: ["I get upset and feel like it's a sign of disrespect.", "I understand and don't take it personally.", "I feel anxious and wonder if they’re losing interest.", "I try to rearrange plans to make it work."],
    categories: ["Inconsistent Behavior", "Trust Issues", "Hypersensitivity to Rejection", "Jealousy"]
  },
  {
    question: "When someone doesn't respond to your message within a few hours, do you feel anxious or upset?",
    answers: ["Yes, I worry they might be ignoring me or losing interest.", "No, I know they might be busy.", "Sometimes, but I try not to overthink it.", "I get frustrated but try to stay calm."],
    categories: ["Inconsistent Behavior", "Hypersensitivity to Rejection", "Trust Issues", "Emotional Availability"]
  },
  {
    question: "Do you tend to test people around you to see how much they care or how reliable they are?",
    answers: ["Yes, I often feel the need to test their loyalty.", "No, I trust people until proven otherwise.", "Sometimes, if I feel uncertain about their intentions.", "Only if I've been let down before."],
    categories: ["Manipulativeness", "Inconsistent Behavior", "Gaslighting Tendencies", "Hypersensitivity to Rejection"]
  },
  {
    question: "If someone opens up about their personal feelings or struggles quickly, how do you feel?",
    answers: ["I feel uncomfortable, it’s too soon for that.", "I feel honored they trust me enough to open up.", "I get overwhelmed and unsure how to react.", "I appreciate it and try to offer support."],
    categories: ["Quick Attachment", "Love Bombing", "Fantasy-Prone", "Dismissive of Red Flags"]
  },
  {
    question: "How do you express your emotions when you’re upset or frustrated?",
    answers: ["I tend to withdraw and avoid talking about it.", "I try to talk through it, but I can get defensive.", "I try to calm down and communicate my feelings.", "I explode and express everything right away."],
    categories: ["Aggressive Conflict Style", "Lack of Empathy", "Gaslighting Tendencies", "Control Issues"]
  },
  {
    question: "If you’re not getting the response you expect from someone, do you try to manipulate the situation to get a reaction?",
    answers: ["Yes, I try to make them feel guilty or pressured.", "No, I just let them be and move on.", "Sometimes, I try to influence things subtly.", "I get frustrated but don't manipulate the situation."],
    categories: ["Manipulativeness", "Gaslighting Tendencies", "Control Issues", "Inconsistent Behavior"]
  },
  {
    question: "How do you feel when a close friend or family member sets a personal boundary with you?",
    answers: ["I respect their boundary but feel hurt.", "I get upset and feel like they don't care about me.", "I understand and try to respect it.", "I feel confused but try to accept it."],
    categories: ["Control Issues", "Lack of Empathy", "Aggressive Conflict Style", "Gaslighting Tendencies"]
  },
  {
    question: "Do you often feel uncomfortable if people don't provide emotional support when you're going through something difficult?",
    answers: ["Yes, I feel unsupported and anxious.", "No, I’m okay handling things on my own.", "Sometimes, but I try to manage myself.", "I get upset, but I try to not show it."],
    categories: ["Emotional Unavailability", "Lack of Empathy", "Avoidant Attachment", "Dismissive of Red Flags"]
  },
  {
    question: "When someone disagrees with you, do you usually try to win the argument or get the last word?",
    answers: ["Yes, I can’t let it go until I win.", "No, I try to listen and understand their point.", "Sometimes, I try to get the last word.", "I prefer to end the argument quickly and move on."],
    categories: ["Aggressive Conflict Style", "Lack of Empathy", "Gaslighting Tendencies", "Narcissism"]
  },
  {
    question: "How often do you second-guess the intentions of people who are nice or considerate toward you?",
    answers: ["All the time, I assume there’s an agenda.", "Rarely, I trust people’s kindness.", "Sometimes, especially if it’s too good to be true.", "Only if I have a reason to doubt them."],
    categories: ["Trust Issues", "Inconsistent Behavior", "Dismissive of Red Flags", "Fantasy-Prone"]
  },
  {
    question: "Do you think it’s okay to lie if it’s done to protect someone's feelings or avoid conflict?",
    answers: ["Yes, it’s better than causing conflict.", "No, honesty is always the best policy.", "Sometimes, depending on the situation.", "I feel conflicted but understand the need for white lies."],
    categories: ["Gaslighting Tendencies", "Manipulativeness", "Inconsistent Behavior", "Control Issues"]
  },
  {
    question: "How do you feel if someone close to you doesn’t check in with you or communicate after a significant period of time?",
    answers: ["I feel abandoned and anxious.", "I understand they might be busy.", "I feel ignored and start to overthink.", "I feel neutral about it and don't worry."],
    categories: ["Inconsistent Behavior", "Hypersensitivity to Rejection", "Control Issues", "Emotional Availability"]
  },
  {
    question: "Do you feel frustrated if people around you aren’t openly sharing their feelings with you?",
    answers: ["Yes, I feel disconnected and unsure of where I stand.", "No, I respect their privacy.", "Sometimes, I want more openness.", "I feel neutral about it."],
    categories: ["Hypersensitivity to Rejection", "Trust Issues", "Fantasy-Prone", "Quick Attachment"]
  },
  {
    question: "Do you feel annoyed if someone your partner (assuming you both are active onlive) to doesn't post about you on social media?",
    answers: ["Yes, I feel ignored and unimportant.", "No, I don’t care about social media.", "Sometimes, I wonder if they’re hiding something.", "I feel fine either way."],
    categories: ["Jealousy", "Control Issues", "Inconsistent Behavior", "Narcissism"]
  },
  {
    question: "How do you react when you hear a friend or family member share a strong opinion or belief that you strongly disagree with?",
    answers: ["I get defensive and argue.", "I try to understand their point of view.", "I shut down and avoid confrontation.", "I feel frustrated but try to listen."],
    categories: ["Aggressive Conflict Style", "Lack of Empathy", "Narcissism", "Dismissive of Red Flags"]
  },
  {
    question: "Do you find it difficult to let go of past conflicts or grievances, even if they are minor?",
    answers: ["Yes, I can’t stop thinking about it.", "No, I move on quickly.", "Sometimes, I hold on to minor issues.", "I forgive but remember the conflict."],
    categories: ["Inconsistent Behavior", "Aggressive Conflict Style", "Narcissism", "Lack of Empathy"]
  },
  {
    question: "How often do you feel the urge to control or micromanage situations around you?",
    answers: ["Always, I like things to be my way.", "Rarely, I’m okay letting things flow.", "Sometimes, especially when I feel anxious.", "I try to control only when necessary."],
    categories: ["Control Issues", "Manipulativeness", "Narcissism", "Inconsistent Behavior"]
  },
  {
    question: "When you receive feedback, how do you usually react—by getting defensive or considering the point of view?",
    answers: ["I get defensive and explain why I’m right.", "I listen and try to understand their feedback.", "I get offended but think about it later.", "I try to take it constructively."],
    categories: ["Lack of Accountability", "Aggressive Conflict Style", "Gaslighting Tendencies", "Narcissism"]
  },
  {
    question: "Do you find it hard to trust people, even when they have not given you any reason not to?",
    answers: ["Yes, I tend to doubt their intentions.", "No, I’m generally trusting.", "Sometimes, I get suspicious.", "I trust but stay cautious."],
    categories: ["Trust Issues", "Avoidant Attachment", "Inconsistent Behavior", "Hypersensitivity to Rejection"]
  },
  {
    question: "If someone acts differently than you expect, do you become suspicious of their motives or intentions?",
    answers: ["Yes, I assume there’s something wrong.", "No, I think they just had a bad day.", "Sometimes, I start overthinking.", "I don’t make assumptions."],
    categories: ["Trust Issues", "Jealousy", "Inconsistent Behavior", "Narcissism"]
  },
  {
    question: "How often do you feel that someone is not living up to your expectations and you express frustration about it?",
    answers: ["Often, I get frustrated if they don’t meet my needs.", "Rarely, I try to understand their limitations.", "Sometimes, I feel disappointed but don’t express it.", "I try to adjust my expectations."],
    categories: ["Narcissism", "Jealousy", "Lack of Empathy", "Control Issues"]
  },
  {
    question: "Do you find it hard to let people in emotionally, even if they show they care for you?",
    answers: ["Yes, I find it difficult to open up.", "No, I’m comfortable sharing my emotions.", "Sometimes, I find it hard to trust them.", "I prefer to keep my emotions private."],
    categories: ["Emotional Unavailability", "Avoidant Attachment", "Trust Issues", "Quick Attachment"]
  },
  {
    question: "How do you feel when someone ignores your calls or messages for a day or two?",
    answers: ["I feel neglected and anxious.", "I understand that people get busy.", "I get worried they are avoiding me.", "I try to not take it personally."],
    categories: ["Hypersensitivity to Rejection", "Trust Issues", "Emotional Availability", "Inconsistent Behavior"]
  },
  {
    question: "Do you find it difficult to trust people who don’t share everything with you?",
    answers: ["Yes, I feel like they have something to hide.", "No, I respect people's privacy.", "Sometimes, I wish they’d be more open.", "I feel okay with them having boundaries."],
    categories: ["Trust Issues", "Emotional Availability", "Fantasy-Prone", "Avoidant Attachment"]
  },
  {
    question: "If someone doesn't apologize for something that bothers you, do you hold it against them?",
    answers: ["Yes, I feel resentful and don't let it go.", "No, I can forgive without needing an apology.", "Sometimes, but I try to move on quickly.", "I feel hurt but don’t bring it up."],
    categories: ["Control Issues", "Lack of Empathy", "Inconsistent Behavior", "Aggressive Conflict Style"]
  },
  {
    question: "Do you ever feel like people don’t appreciate your efforts or the things you do for them?",
    answers: ["Yes, I feel unappreciated and undervalued.", "No, I don't expect appreciation all the time.", "Sometimes, I wish they’d acknowledge my efforts.", "I try not to expect anything in return."],
    categories: ["Narcissism", "Lack of Empathy", "Emotional Availability", "Dismissive of Red Flags"]
  },
  {
    question: "Do you often find yourself creating unrealistic expectations of others, even when they haven’t done anything to suggest it?",
    answers: ["Yes, I tend to imagine what I want them to be.", "No, I try to keep expectations realistic.", "Sometimes, but I try to manage my thoughts.", "I only create expectations based on their actions."],
    categories: ["Fantasy-Prone", "Quick Attachment", "Narcissism", "Hypersensitivity to Rejection"]
  },
  {
    question: "How do you react when someone doesn't seem to meet your emotional needs consistently?",
    answers: ["I feel hurt and neglected.", "I try to communicate my needs and move on.", "I get upset but try to be understanding.", "I withdraw emotionally and distance myself."],
    categories: ["Emotional Availability", "Control Issues", "Lack of Empathy", "Inconsistent Behavior"]
  },
  {
    question: "How often do you feel that people around you aren't being honest with you, even without clear evidence?",
    answers: ["All the time, I suspect people aren't being truthful.", "Rarely, I trust people’s honesty.", "Sometimes, I feel like they might be hiding things.", "I don't assume things without proof."],
    categories: ["Trust Issues", "Gaslighting Tendencies", "Hypersensitivity to Rejection", "Narcissism"]
  },
  {
    question: "Do you tend to ignore or dismiss people's feelings if they don't align with your perspective?",
    answers: ["Yes, I feel that my way is the right way.", "No, I try to understand others’ feelings.", "Sometimes, I ignore them if I feel misunderstood.", "I try to be empathetic but struggle at times."],
    categories: ["Lack of Empathy", "Narcissism", "Control Issues", "Aggressive Conflict Style"]
  },
  {
    question: "Do you feel the need to constantly reassure someone you are close to that you care about them?",
    answers: ["Yes, I need to reassure them to avoid anxiety.", "No, I believe actions speak louder than words.", "Sometimes, I express my feelings verbally.", "I only reassure them when it's needed."],
    categories: ["Quick Attachment", "Hypersensitivity to Rejection", "Narcissism", "Inconsistent Behavior"]
  },
  {
    question: "How do you feel when someone shows more interest in their hobbies or friends than in spending time with you?",
    answers: ["I feel jealous and upset.", "I understand that people have other interests.", "I get anxious and question their feelings.", "I try to focus on my own hobbies as well."],
    categories: ["Jealousy", "Trust Issues", "Inconsistent Behavior", "Hypersensitivity to Rejection"]
  },
  {
    question: "Do you often feel the need to control how others react to your behavior or actions?",
    answers: ["Yes, I like to be in control of situations.", "No, I let others react as they will.", "Sometimes, I try to influence their reactions.", "I don’t feel the need to control them."],
    categories: ["Control Issues", "Manipulativeness", "Narcissism", "Aggressive Conflict Style"]
  },
  {
    question: "How do you feel when someone you trust tells you something that makes you uncomfortable?",
    answers: ["I feel betrayed and question their motives.", "I appreciate their honesty and process it.", "I feel uneasy but try to understand.", "I feel fine, even if it's uncomfortable."],
    categories: ["Trust Issues", "Lack of Empathy", "Gaslighting Tendencies", "Inconsistent Behavior"]
  },
  {
    question: "If someone points out something you’ve done wrong, do you usually accept responsibility?",
    answers: ["I tend to get defensive and justify myself.", "I try to acknowledge my mistake and apologize.", "I feel embarrassed but own up to it.", "I don’t usually admit fault easily."],
    categories: ["Lack of Accountability", "Narcissism", "Aggressive Conflict Style", "Gaslighting Tendencies"]
  },
  {
    question: "When you get upset, do you tend to express your feelings or keep them to yourself?",
    answers: ["I bottle up my feelings and avoid confrontation.", "I express myself but in a calm and respectful manner.", "I get angry and say what’s on my mind.", "I try to calm down and then express my feelings."],
    categories: ["Aggressive Conflict Style", "Emotional Unavailability", "Lack of Empathy", "Narcissism"]
  },
  {
    question: "Do you frequently feel the urge to be the center of attention in social situations?",
    answers: ["Yes, I love being the center of attention.", "No, I’m comfortable being in the background.", "Sometimes, I enjoy attention but don’t seek it out.", "I feel awkward being the center of attention."],
    categories: ["Narcissism", "Control Issues", "Jealousy", "Fantasy-Prone"]
  },
  {
    question: "How do you react when your personal boundaries are crossed by someone else?",
    answers: ["I feel angry and lash out.", "I calmly assert my boundaries and move on.", "I feel frustrated but don’t address it.", "I try to avoid conflict and let it slide."],
    categories: ["Boundary Issues", "Aggressive Conflict Style", "Lack of Empathy", "Narcissism"]
  },
  {
    question: "Do you feel emotionally drained after spending time with certain people, even if you enjoy their company?",
    answers: ["Yes, I often feel exhausted and overwhelmed.", "No, I feel energized and happy.", "Sometimes, but I try to understand why.", "I usually feel fine after spending time with them."],
    categories: ["Emotional Unavailability", "Lack of Empathy", "Control Issues", "Dismissive of Red Flags"]
  },
  {
    question: "When you have a problem, do you prefer to deal with it alone or seek support from others?",
    answers: ["I prefer to solve problems on my own.", "I like seeking support when I’m struggling.", "Sometimes, I deal with it alone but ask for help if needed.", "I feel uncomfortable asking for help."],
    categories: ["Avoidant Attachment", "Emotional Unavailability", "Hypersensitivity to Rejection", "Emotional Availability"]
  },
  {
    question: "Do you find it hard to forgive someone after they’ve done something that hurt you?",
    answers: ["Yes, I hold grudges and find it difficult to move on.", "No, I forgive quickly and let it go.", "Sometimes, I forgive but don’t forget.", "I try to forgive but struggle with it."],
    categories: ["Narcissism", "Aggressive Conflict Style", "Lack of Empathy", "Inconsistent Behavior"]
  },
  {
    question: "Do you feel more comfortable when people agree with your views and opinions?",
    answers: ["Yes, I like to be validated by others.", "No, I value diverse perspectives.", "Sometimes, I feel uneasy when others disagree.", "I’m okay with disagreement as long as it’s respectful."],
    categories: ["Narcissism", "Jealousy", "Aggressive Conflict Style", "Lack of Empathy"]
  }
];

const results = {
  "Inconsistent Behavior": 0,
  "Trust Issues": 0,
  "Hypersensitivity to Rejection": 0,
  "Jealousy": 0,
  "Manipulativeness": 0,
  "Gaslighting Tendencies": 0,
  "Aggressive Conflict Style": 0,
  "Narcissism": 0,
  "Control Issues": 0,
  "Lack of Empathy": 0,
  "Emotional Availability": 0,
  "Emotional Unavailability": 0,
  "Quick Attachment": 0,
  "Love Bombing": 0,
  "Dismissive of Red Flags": 0,
  "Fantasy-Prone": 0,
  "Avoidant Attachment": 0,
  "Lack of Accountability": 0,
  "Boundary Issues": 0
};

function loadQuiz() {
  const quizContainer = document.getElementById('quiz-form');
  questions.forEach((question, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');

    const questionTitle = document.createElement('h2');
    questionTitle.textContent = question.question;
    questionDiv.appendChild(questionTitle);

    question.answers.forEach((answer, answerIndex) => {
      const answerLabel = document.createElement('label');
      answerLabel.textContent = answer;

      const answerInput = document.createElement('input');
      answerInput.type = 'radio';
      answerInput.name = `question${index}`;
      answerInput.value = answerIndex + 1;

      answerLabel.prepend(answerInput);
      questionDiv.appendChild(answerLabel);
    });

    quizContainer.appendChild(questionDiv);
  });
}

function calculateResults() {
  const formData = new FormData(document.getElementById('quiz-form'));
  
  formData.forEach((value, key) => {
    const questionIndex = parseInt(key.replace('question', ''));
    const selectedAnswerIndex = parseInt(value) - 1;
    
    questions[questionIndex].categories.forEach(category => {
      results[category] += selectedAnswerIndex + 1;
    });
  });

  displayResults();
}

function displayResults() {
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '<h3>Your Results:</h3>';
  
  Object.keys(results).forEach(category => {
    const categoryResult = results[category];
    const percentage = (categoryResult / (questions.length * 4)) * 100;
    
    resultsContainer.innerHTML += `
      <p>${category}: ${percentage.toFixed(2)}%</p>
    `;
  });
}

document.getElementById('submit-button').addEventListener('click', (event) => {
  event.preventDefault();
  calculateResults();
});

loadQuiz();
]
