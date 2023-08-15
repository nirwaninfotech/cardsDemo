const WebSocket = require('ws');

const port = process.env.PORT || 8080;

const wss = new WebSocket.Server({ port: port });

// Define the card sets
const cards = [
  {"A_Set": ['card0', 'card0', 'card0'], "B_Set": ['card0', 'card0', 'card0']},
  {"A_Set": ['card1', 'card1', 'card1'], "B_Set": ['card1', 'card1', 'card1']},
  {"A_Set": ['card2', 'card2', 'card2'], "B_Set": ['card2', 'card2', 'card2']},
];

const awinning = [
  {"A_Set": ['card1', 'card2', 'card3'], "B_Set": ['card3', 'card2', 'card1']},
  {"A_Set": ['card4', 'card5', 'card6'], "B_Set": ['card6', 'card5', 'card4']},
  {"A_Set": ['card7', 'card8', 'card9'], "B_Set": ['card9', 'card8', 'card7']},
];

const bwinning = [
  {"A_Set": ['card10', 'card11', 'card12'], "B_Set": ['card12', 'card11', 'card10']},
  {"A_Set": ['card13', 'card14', 'card15'], "B_Set": ['card15', 'card14', 'card13']},
  {"A_Set": ['card16', 'card17', 'card18'], "B_Set": ['card18', 'card17', 'card16']},
];

let userVotes = {
  a: 0,
  b: 0,
};

let forceValue = null;

let startTime = new Date();

function getRandomIndex(list) {
  return Math.floor(Math.random() * list.length);
}

function sendRandomCardSets() {
  let selectedCards = [];

  if (forceValue === 'a') {
    selectedCards = awinning[getRandomIndex(awinning)];
  } else if (forceValue === 'b') {
    selectedCards = bwinning[getRandomIndex(bwinning)];
  } else {
    const totalVotes = userVotes.a + userVotes.b;

    if (totalVotes > 0) {
      if (userVotes.a > userVotes.b) {
        selectedCards = awinning[getRandomIndex(awinning)];
      } else if (userVotes.b > userVotes.a) {
        selectedCards = bwinning[getRandomIndex(bwinning)];
      } else {
        selectedCards = cards[getRandomIndex(cards)];
      }
    } else {
      selectedCards = cards[getRandomIndex(cards)];
    }
  }

  const response = {
    cards: selectedCards,
  };

  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(response));
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
