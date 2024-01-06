// Mock player data
const playersData = [
    { id: 1, name: 'Player 1', points: 20 },
    { id: 2, name: 'Player 2', points: 18 },
    { id: 3, name: 'Player 3', points: 25 },
    // ... add more player data
];

// Selected players array
let selectedPlayers = [];

// Function to create a team
function createTeam() {
    // Logic to handle player selection, scoring, etc.
    // Add selected players to the selectedPlayers array
    // Update the UI to show the selected players
    console.log('Team created:', selectedPlayers);
}

// Mock function to display players on the UI
function displayPlayers() {
    const playersListContainer = document.getElementById('players-list');
    playersData.forEach(player => {
        const playerElement = document.createElement('div');
        playerElement.innerHTML = `<input type="checkbox" id="player-${player.id}">
                                   <label for="player-${player.id}">${player.name} - ${player.points} points</label>`;
        playersListContainer.appendChild(playerElement);
    });
}

// Call the displayPlayers function when the page loads
document.addEventListener('DOMContentLoaded', displayPlayers);