const express = require('express');
const cors = require('cors');

const hltb = require('howlongtobeat');
const hltbService = new hltb.HowLongToBeatService();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});

app.get('/', async (_req, res) => {
	try {
		const result = await hltbService.search('');
		res.send(result);
	} catch {
		res.send({ error: 'Unable to get games' });
	}
});

app.get('/:game', async (req, res) => {
	try {
		const result = await hltbService.search(req.params.game);
		res.send(result);
	} catch {
		res.send({ error: 'Unable to get game' });
	}
});