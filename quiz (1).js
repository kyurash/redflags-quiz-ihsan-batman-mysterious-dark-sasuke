const questions = [
  { text: "You're on a date and they make a joke at your expense in front of others. When you bring it up, they say you're overreacting. How likely are you to let it slide?", category: "Gaslighting" },
  { text: "Imagine someone refuses to take responsibility for something clearly their fault. They twist it to make it seem like your problem. How uncomfortable would you feel?", category: "Blame Shifting" },
  { text: "Someone insists that if you cared about them, you'd give up a hobby you love. How acceptable does that feel to you?", category: "Control" },
  { text: "You're asked to share your passwords 'to prove your trust.' How willing would you be?", category: "Privacy Violation" },
  { text: "A person keeps score in the relationship, always reminding you of things they've done for you. How manipulative does that feel?", category: "Emotional Manipulation" },
  { text: "They get angry when you want to spend time alone or with friends. How much would that bother you?", category: "Isolation" },
  { text: "When you talk about boundaries, they say you're being 'too uptight.' How dismissive does that feel?", category: "Boundary Violations" },
  { text: "They comment negatively on your appearance but say it's just honesty. How acceptable is that?", category: "Negging" },
  { text: "You notice they never apologize, even when clearly wrong. How problematic is this to you?", category: "Lack of Accountability" },
  { text: "They make you feel guilty for spending money on yourself. How much of a red flag is that for you?", category: "Financial Control" },
  { text: "Someone demands immediate responses to texts and gets upset if you don't reply quickly. How normal does this feel?", category: "Possessiveness" },
  { text: "You're pressured into doing something physical you're not ready for. How concerning is that?", category: "Coercion" },
  { text: "They compare you negatively to their exes. How much would that affect you emotionally?", category: "Verbal Abuse" },
  { text: "They often joke about 'trading you in' or 'finding someone better.' How acceptable does that sound?", category: "Disrespect" },
  { text: "You notice they often exaggerate or lie about small things. How much does this impact your trust?", category: "Dishonesty" },
  { text: "They downplay your career or dreams as unrealistic. How would that make you feel?", category: "Sabotage" },
  { text: "You find out they snooped through your phone without asking. How serious is that to you?", category: "Invasion of Privacy" },
  { text: "They tell you you're lucky they even date you. How manipulative does that feel?", category: "Low Self-Worth Induction" },
  { text: "They flirt with others in front of you to make you jealous. How likely are you to tolerate it?", category: "Attention-Seeking" },
  { text: "They make every serious conversation into a joke or avoid it. How damaging is that to connection?", category: "Emotional Unavailability" },
  { text: "You're told that your friendships are threatening the relationship. How likely are you to cut people off?", category: "Control" },
  { text: "They withhold affection or praise when you upset them. How manipulative does that feel?", category: "Emotional Withholding" },
  { text: "They say 'If you loved me, you'd...' regularly to get what they want. How troubling is that?", category: "Manipulation" },
  { text: "They act overly charming early on, but switch quickly to criticism. How concerned would you be?", category: "Love Bombing" },
  { text: "They ignore your texts for days but get upset if you do the same. How acceptable is that?", category: "Double Standards" },
  { text: "They deny things they said or did, even when you clearly remember. How does that affect you?", category: "Gaslighting" },
  { text: "They act differently in public than in private, being sweet to others and cold to you. How alarming is that?", category: "Two-Faced Behavior" },
  { text: "You notice they subtly mock your interests. How hurtful does that feel?", category: "Disrespect" },
  { text: "They act offended when you express independent opinions. How comfortable does that feel?", category: "Intolerance of Difference" },
  { text: "They pressure you to move in or commit very quickly. How likely are you to feel rushed?", category: "Rushing Intimacy" },
  { text: "They tell personal details about you to others without your consent. How invasive is that?", category: "Violation of Trust" },
  { text: "They expect you to drop everything for them, even when it's unreasonable. How demanding is that?", category: "Entitlement" },
  { text: "They threaten self-harm if you leave or disagree. How dangerous does that seem?", category: "Emotional Blackmail" },
  { text: "They never ask how you feel about things. How emotionally unavailable does that seem?", category: "Self-Centeredness" },
  { text: "They blame all their exes for past issues, never reflecting on their own part. How much does that raise concerns?", category: "Blame Shifting" },
  { text: "They always talk over you or redirect the conversation back to themselves. How annoying is that?", category: "Lack of Respect" },
  { text: "They minimize or laugh at your fears or insecurities. How would that make you feel?", category: "Invalidation" },
  { text: "They only reach out when they need something. How transactional does that feel?", category: "Using Behavior" },
  { text: "They ignore your stated limits or push back when you express them. How threatening is that?", category: "Boundary Violations" },
  { text: "They expect you to change for them but never adapt themselves. How one-sided does that seem?", category: "Narcissism" }
];

const form = document.getElementById('quiz-form');
const progressBar = document.getElementById('progress-bar');
const resultsContainer = document.getElementById('results');

questions.forEach((q, index) => {
  const questionDiv = document.createElement('div');
  questionDiv.classList.add('question');

  const label = document.createElement('label');
  label.textContent = `${index + 1}. ${q.text}`;
  questionDiv.appendChild(label);

  const input = document.createElement('input');
  input.type = 'range';
  input.min = 1 "strongly disagree";
  input.max = 5 "strongly agree";
  input.value = 3 "neutral";
  input.name = `question-${index}`;
  input.dataset.category = q.category;
  input.addEventListener('input', updateProgress);
  questionDiv.appendChild(input);

  form.appendChild(questionDiv);
});

function updateProgress() {
  const answered = [...form.elements].filter(el => el.type === 'range' && el.value);
  const progress = (answered.length / questions.length) * 100;
  progressBar.style.width = `${progress}%`;
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const scores = {};
  questions.forEach((q, index) => {
    const input = form.elements[`question-${index}`];
    const category = q.category;
    const value = parseInt(input.value);
    if (!scores[category]) scores[category] = [];
    scores[category].push(value);
  });

  resultsContainer.innerHTML = '<h2>🍓 Your Red Flag Radar 🍓</h2>';
  for (const category in scores) {
    const avg = scores[category].reduce((a, b) => a + b, 0) / scores[category].length;
    const percentage = ((avg - 1) / 4) * 100;
    const resultItem = document.createElement('div');
    resultItem.classList.add('result-item');
    resultItem.innerHTML = `<span>🍓 ${category}:</span> ${percentage.toFixed(1)}%`;
    resultsContainer.appendChild(resultItem);
  }
});

