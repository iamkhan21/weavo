import { rest } from 'msw';
import weather from './data/weather.json';
import location from './data/location.json';

export const handlers = [
	rest.get('/weather', (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(weather));
	}),
	rest.get('/location', (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(location));
	})
];
