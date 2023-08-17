const WebSocket = require('ws');

const port = process.env.PORT || 8080;

const wss = new WebSocket.Server({ port: port });


const awinning = [
  {
    "A_Set": [
      { 'suit': 'diamond', 'card': '4' },
      { 'suit': 'club', 'card': '5' },
      { 'suit': 'heart', 'card': '6' },
    ],
    "B_Set": [
      { 'suit': 'spade', 'card': '7' },
      { 'suit': 'diamond', 'card': '8' },
      { 'suit': 'club', 'card': '9' },
    ],
  },
  {
    "A_Set": [
      { 'suit': 'club', 'card': '9' },
      { 'suit': 'heart', 'card': '10' },
      { 'suit': 'diamond', 'card': 'king' },
    ],
    "B_Set": [
      { 'suit': 'spade', 'card': '6' },
      { 'suit': 'heart', 'card': '3' },
      { 'suit': 'club', 'card': '8' },
    ],
  },
  {
    "A_Set": [
      { 'suit': 'diamond', 'card': 'queen' },
      { 'suit': 'spade', 'card': '2' },
      { 'suit': 'heart', 'card': '7' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '4' },
      { 'suit': 'diamond', 'card': '6' },
      { 'suit': 'spade', 'card': '9' },
    ],
  },
  {
    "A_Set": [
      { 'suit': 'spade', 'card': '10' },
      { 'suit': 'heart', 'card': 'jack' },
      { 'suit': 'diamond', 'card': '4' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '2' },
      { 'suit': 'spade', 'card': '5' },
      { 'suit': 'heart', 'card': '6' },
    ],
  },
  {
    "A_Set": [
      { 'suit': 'diamond', 'card': '8' },
      { 'suit': 'spade', 'card': 'queen' },
      { 'suit': 'heart', 'card': '9' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': 'king' },
      { 'suit': 'diamond', 'card': '7' },
      { 'suit': 'spade', 'card': '3' },
    ],
  },
  // Additional sets below
  {
    "A_Set": [
      { 'suit': 'heart', 'card': '2' },
      { 'suit': 'spade', 'card': '3' },
      { 'suit': 'diamond', 'card': '4' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '5' },
      { 'suit': 'heart', 'card': '6' },
      { 'suit': 'spade', 'card': '7' },
    ],
  },
  {
    "A_Set": [
      { 'suit': 'diamond', 'card': 'queen' },
      { 'suit': 'spade', 'card': 'king' },
      { 'suit': 'heart', 'card': '10' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': 'jack' },
      { 'suit': 'diamond', 'card': '2' },
      { 'suit': 'spade', 'card': '4' },
    ],
  },
  {
    "A_Set": [
      { 'suit': 'heart', 'card': '8' },
      { 'suit': 'spade', 'card': '6' },
      { 'suit': 'diamond', 'card': '4' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '2' },
      { 'suit': 'heart', 'card': '10' },
      { 'suit': 'spade', 'card': 'queen' },
    ],
  },
  {
    "A_Set": [
      { 'suit': 'diamond', 'card': '7' },
      { 'suit': 'spade', 'card': '5' },
      { 'suit': 'heart', 'card': '3' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': 'A' },
      { 'suit': 'diamond', 'card': 'king' },
      { 'suit': 'spade', 'card': '9' },
    ],
  },
  {
    "A_Set": [
      { 'suit': 'club', 'card': '8' },
      { 'suit': 'heart', 'card': '6' },
      { 'suit': 'diamond', 'card': '4' },
    ],
    "B_Set": [
      { 'suit': 'spade', 'card': '2' },
      { 'suit': 'diamond', 'card': '10' },
      { 'suit': 'club', 'card': 'queen' },
    ],
  },
];


const bwinning = [
  {
    "A_Set": [
      { 'suit': 'club', 'card': 'A' },
      { 'suit': 'heart', 'card': '2' },
      { 'suit': 'diamond', 'card': 'jack' },
    ],
    "B_Set": [
      { 'suit': 'spade', 'card': 'A' },
      { 'suit': 'heart', 'card': '4' },
      { 'suit': 'club', 'card': 'king' },
    ],
  },
  {
    "A_Set": [
      { 'suit': 'diamond', 'card': '5' },
      { 'suit': 'spade', 'card': '8' },
      { 'suit': 'heart', 'card': 'queen' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '3' },
      { 'suit': 'diamond', 'card': '10' },
      { 'suit': 'spade', 'card': '7' },
    ],
  },
  {
    "A_Set": [
      { 'suit': 'club', 'card': '9' },
      { 'suit': 'heart', 'card': '10' },
      { 'suit': 'diamond', 'card': 'king' },
    ],
    "B_Set": [
      { 'suit': 'spade', 'card': '6' },
      { 'suit': 'heart', 'card': '3' },
      { 'suit': 'club', 'card': '8' },
    ],
  },
  {
    "A_Set": [
      { 'suit': 'diamond', 'card': 'queen' },
      { 'suit': 'spade', 'card': '2' },
      { 'suit': 'heart', 'card': '7' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '4' },
      { 'suit': 'diamond', 'card': '6' },
      { 'suit': 'spade', 'card': '9' },
    ],
  },
  {
    "A_Set": [
      { 'suit': 'spade', 'card': '10' },
      { 'suit': 'heart', 'card': 'jack' },
      { 'suit': 'diamond', 'card': '4' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '2' },
      { 'suit': 'spade', 'card': '5' },
      { 'suit': 'heart', 'card': '6' },
    ],
  },
  // Additional sets below
  {
    "A_Set": [
      { 'suit': 'diamond', 'card': '7' },
      { 'suit': 'spade', 'card': '6' },
      { 'suit': 'heart', 'card': '5' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '4' },
      { 'suit': 'diamond', 'card': '3' },
      { 'suit': 'spade', 'card': '2' },
    ],
  },
  {
    "A_Set": [
      { 'suit': 'club', 'card': '10' },
      { 'suit': 'heart', 'card': '9' },
      { 'suit': 'diamond', 'card': '8' },
    ],
    "B_Set": [
      { 'suit': 'spade', 'card': '7' },
      { 'suit': 'club', 'card': '6' },
      { 'suit': 'heart', 'card': '5' },
    ],
  },
  {
    "A_Set": [
      { 'suit': 'diamond', 'card': '4' },
      { 'suit': 'spade', 'card': '3' },
      { 'suit': 'heart', 'card': '2' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': 'A' },
      { 'suit': 'diamond', 'card': 'king' },
      { 'suit': 'spade', 'card': 'queen' },
    ],
  },
  {
    "A_Set": [
      { 'suit': 'club', 'card': '8' },
      { 'suit': 'heart', 'card': '9' },
      { 'suit': 'diamond', 'card': '10' },
    ],
    "B_Set": [
      { 'suit': 'spade', 'card': 'jack' },
      { 'suit': 'club', 'card': 'queen' },
      { 'suit': 'heart', 'card': 'king' },
    ],
  },
  {
    "A_Set": [
      { 'suit': 'diamond', 'card': '3' },
      { 'suit': 'spade', 'card': '5' },
      { 'suit': 'heart', 'card': '7' },
    ],
    "B_Set": [
      { 'suit': 'club', 'card': '9' },
      { 'suit': 'diamond', 'card': 'jack' },
      { 'suit': 'spade', 'card': 'king' },
    ],
  },
];

let userVotes = {
  a: 0,
  b: 0,
};
const lastResponses = [];

let forceValue = null;

let startTime = new Date();

function getRandomIndex(list) {
  return Math.floor(Math.random() * list.length);
}



function sendRandomCardSets() {
  let selectedCards = [];
  let winningSet = null;
  let winner = '';

  if (forceValue === 'a') {
    selectedCards = awinning[getRandomIndex(awinning)];
    winner = 'a';
  } else if (forceValue === 'b') {
    selectedCards = bwinning[getRandomIndex(bwinning)];
    winner = 'b';
  } else {
    const totalVotes = userVotes.a + userVotes.b;

    if (totalVotes > 0) {
      if (userVotes.a < userVotes.b) {
        winningSet = awinning;
        winner = 'a';
      } else if (userVotes.b < userVotes.a) {
        winningSet = bwinning;
        winner = 'b';
      } else {
        // Randomly choose between awinning and bwinning
        if (Math.random() < 0.5) {
          winningSet = awinning;
          winner = 'a';
        } else {
          winningSet = bwinning;
          winner = 'b';
        }
      }
    } else {
      // Randomly choose between awinning and bwinning
      if (Math.random() < 0.5) {
        winningSet = awinning;
        winner = 'a';
      } else {
        winningSet = bwinning;
        winner = 'b';
      }
    }
  }

  if (winningSet) {
    selectedCards = winningSet[getRandomIndex(winningSet)];
  }

  const response = {
    winner: winner,
    cards: selectedCards,
  };

  lastResponses.unshift(response.winner);
  if (lastResponses.length > 10) {
    lastResponses.pop();
  }

  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(response));
      client.send(JSON.stringify(lastResponses));

    }
  });

  // Reset userVotes
  userVotes = {
    a: 0,
    b: 0,
  };
  forceValue = null;
}

// Start sending random card sets every 1 minute
setInterval(() => {
  sendRandomCardSets();
}, 100000); // 1 minute in milliseconds

// Send current time status continuously to all connected clients
setInterval(() => {
  let currentTime = Math.floor((new Date() - startTime) / 1000); // Elapsed time in seconds

  // Reset the time when it reaches 100 seconds
  if (currentTime >= 100) {
    startTime = new Date();
    currentTime = 0;
  }

  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ currentTime }));
    }
  });
}, 1000); // Update time every second

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.send(JSON.stringify(lastResponses));

  ws.on('message', (message) => {
    console.log('Received:', message);
    try {
      const data = JSON.parse(message);
      const { key, value, force } = data;
      console.log(key);
      console.log(value);
      console.log(force);

      if (force === 'a' || force === 'b') {
        forceValue = force;
      } else if (key === 'a') {
        userVotes.a += value;
      } else if (key === 'b') {
        userVotes.b += value;
      }
    } catch (error) {
      console.error('Error parsing message:', error);
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });

  // Send initial current time status to the newly connected client
  const currentTime = Math.floor((new Date() - startTime) / 1000); // Elapsed time in seconds
  ws.send(JSON.stringify({ currentTime }));
});

