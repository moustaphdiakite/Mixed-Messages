const store = {
  quote: [
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Believe you can and you're halfway there.",
    "The only way to do great work is to love what you do.",
    "In the middle of every difficulty lies opportunity.",
    "You are never too old to set another goal or to dream a new dream.",
    "Don't watch the clock; do what it does. Keep going.",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    "If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward.",
    "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this.",
  ],
  affirmation: [
    "I am capable of achieving anything I set my mind to.",
    "I am worthy of love and respect.",
    "I am in charge of my own happiness.",
    "I choose to see the good in every situation.",
    "I am grateful for everything I have in my life.",
    "I am confident in my abilities and talents.",
    "I am strong and capable of overcoming any challenge.",
    "I am deserving of success and happiness.",
    "I trust myself to make the right decisions.",
    "I am surrounded by positivity and love.",
  ],
  words: [
    "Persist.",
    "Believe.",
    "Focus.",
    "Create.",
    "Inspire.",
    "Motivate.",
    "Persevere.",
    "Succeed.",
    "Achieve.",
    "Dream.",
  ],
};

const randomPicker = (array) => {
  const arrayLength = array.length;
  const randomIndexNumber = Math.floor(Math.random() * arrayLength);
  return array[randomIndexNumber];
};

const messageOne = `${randomPicker(store.words)}${randomPicker(
  store.quote
)}${randomPicker(store.affirmation)}`;

console.log(messageOne);
