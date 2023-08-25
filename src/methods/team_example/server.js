const express = require('express'); // import express library
const app = express(); // initialise instance of express

const teams = [
    {id: 1, name: 'Arsenal', player: 'Aubameyang'},
    {id: 2, name: 'Chelsea', player: 'Hazard'},
    {id: 3, name: 'Liverpool', player: 'Salah'}
];

app.get('/teams', (req, res) => {
    res.json(teams);
});

app.get('/teams/:id', (req, res) => {
    const teamId = parseInt(req.params.id, 10); // radix is 10 = base 10 number system
    const team = teams.find(t => t.id === teamId);

    if (team) {
        res.json(team);
    } else {
        res.status(404).json({message: `Team ${teamId} not found`});
    }
});

app.post('/teams', (req, res) => {
    const team = req.body;
    teams.push(team);
    res.json(`Added team info: ${team}`);
});

app.put('/teams/:id', (req, res) => {
    const teamId = parseInt(req.params.id, 10);
    const teamIndex = teams.findIndex(t => t.id === teamId);
    teams[teamIndex] = req.body;
    res.json(`Updated team ${teamId} info: ${teams[teamId]}`);
});

app.delete('/teams/:id', (req, res) => {
    const teamId = parseInt(req.params.id, 10);
    const teamIndex = teams.findIndex(t => t.id === teamId);
    // findIndex() method returns the index of the first element in the array that satisfies the provided testing function
    if (teamIndex !== -1) {
        teams.splice(teamIndex, 1); 
        // splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements
        // deleteCount is 1, deletes first item in array
        res.status(204).send()
    } else {
        res.status(404).send(`Team ${teamId} not found`);
    }
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});