
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage/HomePage'
import ListTripsPage from '../Pages/ListTripsPage/ListTripsPage'
import ApplicationFormPage from '../Pages/ApplicationFormPage/ApplicationFormPage'
import LoginPage from '../Pages/LoginPage/LoginPage'
import AdminHomePage from '../Pages/AdminHomePage/AdminHomePage'
import TripDetailsPage from '../Pages/TripDetailsPage/TripDetailsPage'
import CreateTripPage from '../Pages/CreateTripPage/CreateTripPage'
import ErrorPage from '../Pages/ErrorPage/ErrorPage'



function Router() {
    return (
        <BrowserRouter>
            <Routes>

                <Route
                    path={"/"}
                    element={<HomePage />} />

                <Route
                    path={"/trips/list"}
                    element={<ListTripsPage />} />

                <Route
                    path={"/trips/application"}
                    element={<ApplicationFormPage />} />

                <Route
                    path={"/login"}
                    element={<LoginPage />} />

                <Route
                    path={"/admin/trips/list"}
                    element={<AdminHomePage />} />

                <Route
                    path={"/admin/trips/:id"}
                    element={<TripDetailsPage />} />

                <Route
                    path={"/admin/trips/create"}
                    element={<CreateTripPage />} />

                <Route 
                path="*" 
                element={<ErrorPage/>} />
                
            </Routes>
        </BrowserRouter>
    );
}

export default Router;