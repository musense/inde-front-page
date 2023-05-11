import React, { useEffect } from "react";
// pages for this kit
import Index from "./views/Index";
import IndexView from "./views/pages/IndexView.jsx";
import Category from "./views/pages/category";
import { Routes, Route, useNavigate, Navigate, useLocation } from "react-router-dom";
import ContentPage from "./views/index-sections/ContentPage";
import TagPage from "./views/pages/tagPage";


export default function App() {

    const navigate = useNavigate()
    const location = useLocation()

    localStorage.setItem('pathname', location.pathname)
    useEffect(() => {
        navigate(localStorage.getItem('pathname'))
    }, []);

    return (
        <>
            <Routes>
                <Route path="/" element={<Index />}>
                    <Route index element={<IndexView />} />
                    <Route path="/c/:categoryName" element={<Category />} />
                    <Route path="/c/:categoryName/p/:id" element={<ContentPage />} />
                    <Route path="/t/:tag" element={<TagPage />} />
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}