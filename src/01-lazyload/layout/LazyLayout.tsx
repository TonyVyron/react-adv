import { NavLink, Route, Routes } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";

export const LazyLayout = () => {
    return (
        <div>
            <h1>Lazy Layout</h1>
            <ul>
                <li>
                    <NavLink to="/LazyLoad/LazyPage1">Lazy Page 1</NavLink>
                </li>
                <li>
                    <NavLink to="/LazyLoad/LazyPage2">Lazy Page 2</NavLink>
                </li>
                <li>
                    <NavLink to="/LazyLoad/LazyPage3">Lazy Page 3</NavLink>
                </li>
            </ul>
            <Routes>
                <Route index element={<LazyPage1 />} />
                <Route path="LazyPage1" element={<LazyPage1 />} />
                <Route path="LazyPage2" element={<LazyPage2 />} />
                <Route path="LazyPage3" element={<LazyPage3 />} />
            </Routes>
        </div>
    );
}
export default LazyLayout;