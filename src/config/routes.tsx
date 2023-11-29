import React from "react";
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Skills } from '../components/Skills'
import { Projects } from '../components/Projects'
import { Footer } from '../components/Footer'
import { Contacts } from '../components/contacts/Contacts'
import { Navigate, RouteObject } from "react-router-dom";
import { App } from "../App";

const page = 
<App>
    <Header />
    <Hero />
    <Skills />
    <Projects />
    <Contacts />
    <Footer />
</App>;

const routes = [
    {
        path: '/',
        element: <Navigate to="/en" />
    },
    {
        path: '/:currentLanguage',
        element: page
    },
    {
        path: '*',
        element: <Navigate to="/en" />
    }
] as RouteObject[];

export default routes;