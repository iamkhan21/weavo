import { rest } from 'msw';
import weather from './data/weather.json'

export const handlers = [
	rest.get('/weather', (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json(weather)
		);
	})
];
