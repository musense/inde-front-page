import React, { useEffect } from "react";
// pages for this kit
import Index from "./views/Index";
import IndexView from "./views/pages/IndexView.jsx";
import Category from "./views/pages/category";

import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import TagContentsPage from "./views/index-sections/TagContentsPage";
import ContentPage from "./views/index-sections/ContentPage";

export default function App() {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/sports')
        // navigate('/content/63e31e0c1ab9109e2432270f')
        // navigate('/content/tag/iPhone')
    }, []);

    return (
        <>
            <Routes>
                <Route path="/" element={<Index />}>
                    <Route index element={<IndexView />} />
                    <Route path="/c/:categoryName" element={<Category />} />
                    <Route path="/c/:categoryName/p/:id" element={<ContentPage />} />
                    {/* <Route path="content/tag/:tagName" element={<TagContentsPage />} /> */}
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}