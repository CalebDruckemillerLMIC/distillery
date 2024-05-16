import { HashRouter, Route, Routes } from "react-router-dom"
import {JobsScreen, OtherScreen, AdminScreen} from "./screens"

export function AppRoutes(props: any) {
    return (
        <HashRouter>
            {props.children}
            <Routes>
                <Route path="/" Component={OtherScreen} />
                <Route path="/jobs" Component={JobsScreen} />
                <Route path="/admin" Component={AdminScreen} />
            </Routes>
        </HashRouter>
    )
}