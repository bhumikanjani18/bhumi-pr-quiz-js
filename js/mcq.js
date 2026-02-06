const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars"
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
    answer: "William Shakespeare"
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    answer: "Pacific Ocean"
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Ag", "Au", "Gd", "Go"],
    answer: "Au"
  },
  {
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    answer: "7"
  },
  {
    question: "Which animal is known as the King of the Jungle?",
    options: ["Tiger", "Elephant", "Lion", "Leopard"],
    answer: "Lion"
  },
  {
    question: "What is the fastest land animal?",
    options: ["Lion", "Cheetah", "Horse", "Greyhound"],
    answer: "Cheetah"
  },
  {
    question: "Which language is used to style web pages?",
    options: ["HTML", "Python", "CSS", "Java"],
    answer: "CSS"
  },
  {
    question: "Which year did World War II end?",
    options: ["1942", "1945", "1948", "1950"],
    answer: "1945"
  },
  {
    question: "What is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: "Blue Whale"
  },
  {
    question: "Which country invented paper?",
    options: ["India", "Egypt", "China", "Greece"],
    answer: "China"
  },
  {
    question: "What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    answer: "8"
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: "Carbon Dioxide"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    answer: "Leonardo da Vinci"
  },
  {
    question: "What is the hardest natural substance?",
    options: ["Gold", "Iron", "Diamond", "Silver"],
    answer: "Diamond"
  },
  {
    question: "Which planet has the most moons?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Saturn"
  },
  {
    question: "What does HTTP stand for?",
    options: [
      "HyperText Transfer Protocol",
      "High Transfer Text Protocol",
      "Hyper Transfer Text Program",
      "Home Tool Transfer Protocol"
    ],
    answer: "HyperText Transfer Protocol"
  },
  {
    question: "Which organ pumps blood through the body?",
    options: ["Lungs", "Brain", "Heart", "Liver"],
    answer: "Heart"
  },
  {
    question: "What is the boiling point of water (°C)?",
    options: ["90°C", "95°C", "100°C", "110°C"],
    answer: "100°C"
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Thailand", "Japan", "South Korea"],
    answer: "Japan"
  },
  {
    question: "How many players are there in a football (soccer) team?",
    options: ["9", "10", "11", "12"],
    answer: "11"
  },
  {
    question: "Which instrument has keys, pedals, and strings?",
    options: ["Guitar", "Violin", "Piano", "Drums"],
    answer: "Piano"
  },
  {
    question: "What is the main language spoken in Brazil?",
    options: ["Spanish", "Portuguese", "English", "French"],
    answer: "Portuguese"
  },
  {
    question: "Which element do humans need to breathe?",
    options: ["Carbon", "Oxygen", "Hydrogen", "Helium"],
    answer: "Oxygen"
  },
  {
    question: "Who was the first man to walk on the Moon?",
    options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"],
    answer: "Neil Armstrong"
  },
  {
    question: "What is the currency of the United Kingdom?",
    options: ["Euro", "Dollar", "Pound Sterling", "Yen"],
    answer: "Pound Sterling"
  },
  {
    question: "Which continent is the Sahara Desert located on?",
    options: ["Asia", "Africa", "Australia", "South America"],
    answer: "Africa"
  },
  {
    question: "What does CPU stand for?",
    options: [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Program Utility",
      "Control Processing User"
    ],
    answer: "Central Processing Unit"
  },
  {
    question: "Which sport uses a shuttlecock?",
    options: ["Tennis", "Badminton", "Squash", "Volleyball"],
    answer: "Badminton"
  }
];

// const quizQuestions = [
//   {
//     id: 1,
//     question: "What is the capital of France?",
//     options: ["Berlin", "Madrid", "Paris", "Rome"]
//   },
//   {
//     id: 2,
//     question: "Which planet is known as the Red Planet?",
//     options: ["Earth", "Mars", "Jupiter", "Venus"]
//   },
//   {
//     id: 3,
//     question: "Who wrote 'Romeo and Juliet'?",
//     options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"]
//   },
//   {
//     id: 4,
//     question: "What is the largest ocean on Earth?",
//     options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"]
//   },
//   {
//     id: 5,
//     question: "What is the chemical symbol for gold?",
//     options: ["Ag", "Au", "Gd", "Go"]
//   },
//   {
//     id: 6,
//     question: "How many continents are there?",
//     options: ["5", "6", "7", "8"]
//   },
//   {
//     id: 7,
//     question: "Which animal is known as the King of the Jungle?",
//     options: ["Tiger", "Elephant", "Lion", "Leopard"]
//   },
//   {
//     id: 8,
//     question: "What is the fastest land animal?",
//     options: ["Lion", "Cheetah", "Horse", "Greyhound"]
//   },
//   {
//     id: 9,
//     question: "Which language is used to style web pages?",
//     options: ["HTML", "Python", "CSS", "Java"]
//   },
//   {
//     id: 10,
//     question: "Which year did World War II end?",
//     options: ["1942", "1945", "1948", "1950"]
//   },
//   {
//     id: 11,
//     question: "What is the largest mammal?",
//     options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"]
//   },
//   {
//     id: 12,
//     question: "Which country invented paper?",
//     options: ["India", "Egypt", "China", "Greece"]
//   },
//   {
//     id: 13,
//     question: "What is the square root of 64?",
//     options: ["6", "7", "8", "9"]
//   },
//   {
//     id: 14,
//     question: "Which gas do plants absorb from the atmosphere?",
//     options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"]
//   },
//   {
//     id: 15,
//     question: "Who painted the Mona Lisa?",
//     options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"]
//   },
//   {
//     id: 16,
//     question: "What is the hardest natural substance?",
//     options: ["Gold", "Iron", "Diamond", "Silver"]
//   },
//   {
//     id: 17,
//     question: "Which planet has the most moons?",
//     options: ["Earth", "Mars", "Jupiter", "Saturn"]
//   },
//   {
//     id: 18,
//     question: "What does HTTP stand for?",
//     options: [
//       "HyperText Transfer Protocol",
//       "High Transfer Text Protocol",
//       "Hyper Transfer Text Program",
//       "Home Tool Transfer Protocol"
//     ]
//   },
//   {
//     id: 19,
//     question: "Which organ pumps blood through the body?",
//     options: ["Lungs", "Brain", "Heart", "Liver"]
//   },
//   {
//     id: 20,
//     question: "What is the boiling point of water (°C)?",
//     options: ["90°C", "95°C", "100°C", "110°C"]
//   },
//   {
//     id: 21,
//     question: "Which country is known as the Land of the Rising Sun?",
//     options: ["China", "Thailand", "Japan", "South Korea"]
//   },
//   {
//     id: 22,
//     question: "How many players are there in a football (soccer) team?",
//     options: ["9", "10", "11", "12"]
//   },
//   {
//     id: 23,
//     question: "Which instrument has keys, pedals, and strings?",
//     options: ["Guitar", "Violin", "Piano", "Drums"]
//   },
//   {
//     id: 24,
//     question: "What is the main language spoken in Brazil?",
//     options: ["Spanish", "Portuguese", "English", "French"]
//   },
//   {
//     id: 25,
//     question: "Which element do humans need to breathe?",
//     options: ["Carbon", "Oxygen", "Hydrogen", "Helium"]
//   },
//   {
//     id: 26,
//     question: "Who was the first man to walk on the Moon?",
//     options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"]
//   },
//   {
//     id: 27,
//     question: "What is the currency of the United Kingdom?",
//     options: ["Euro", "Dollar", "Pound Sterling", "Yen"]
//   },
//   {
//     id: 28,
//     question: "Which continent is the Sahara Desert located on?",
//     options: ["Asia", "Africa", "Australia", "South America"]
//   },
//   {
//     id: 29,
//     question: "What does CPU stand for?",
//     options: [
//       "Central Processing Unit",
//       "Computer Personal Unit",
//       "Central Program Utility",
//       "Control Processing User"
//     ]
//   },
//   {
//     id: 30,
//     question: "Which sport uses a shuttlecock?",
//     options: ["Tennis", "Badminton", "Squash", "Volleyball"]
//   }
// ];

export default quizQuestions;

