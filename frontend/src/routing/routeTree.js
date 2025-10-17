import { createRootRoute } from "@tanstack/react-router";
import App from "../App"
import { authRoute } from "./authRoute";
import { homeRoute } from "./homeRoute";
import { dashboardRoute } from "./dashboardRoute";


export const rootRoute = createRootRoute({
    component: App 
})

export const routeTree =rootRoute.addChildren([
    homeRoute, 
    authRoute, 
    dashboardRoute
])