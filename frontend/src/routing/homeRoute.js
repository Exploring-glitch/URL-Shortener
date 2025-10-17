import { createRoute } from "@tanstack/react-router";
import HomePage from "../pages/HomePage";
import { rootRoute } from "./routeTree";

export const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: HomePage,
})