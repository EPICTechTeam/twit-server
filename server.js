const express = require('express')
const cors = require('cors')

const app = express()

const twits = []

app.use(cors())
app.use(express.json())

app.get('/twits', (request, response) => {
	response.json(twits)
})

app.post('/twee', (request, response) => {
	if (!(request.body && typeof request.body === 'object' && request.body.content && request.body.username && request.body.content.length <= 140)) {
		response.sendStatus(400)
	}
	else {
		const twit = {
			id: twits.length,
			content: request.body.content,
			username: request.body.username
		}
		twits.unshift(twit)

		response.json(twit)
	}
})

app.listen(7777, () => {
	console.log('twit-server listening on port 7777')
})
