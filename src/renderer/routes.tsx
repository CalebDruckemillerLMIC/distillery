import {Router, Route} from "electron-router-dom"
import {JobsScreen} from "./screens"

export function AppRoutes() {
    return (
        <Router 
             main={ <Route path="/" element={<JobsScreen />} />}
        />
    )
}