import { HashRouter, Route, Routes } from "react-router-dom"
import {JobsScreen, OtherScreen} from "./screens"

export function AppRoutes(props: any) {
    return (
        <HashRouter>
            {props.children}
            <Routes>
                <Route path="/" Component={OtherScreen} />
                <Route path="/jobs" Component={JobsScreen} />
            </Routes>
        </HashRouter>
    )
}