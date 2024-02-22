import { Navigate, RouteObject } from 'react-router-dom';
import { App } from '../App';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { Contacts } from '../components/contacts/Contacts';

const page = (
	<App>
		<Header />
		<Hero />
		<Skills />
		<Projects />
		<Contacts />
		<Footer />
	</App>
);

export const routes = [
	{
		path: '/portfolio/',
		element: page,
	},
	{
		path: '*',
		element: <Navigate to="/portfolio/" />,
	},
] as RouteObject[];
