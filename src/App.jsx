import React, { useEffect } from "react";
// pages for this kit
import Index from "./views/Index";
import IndexView from "./views/IndexView";
import ContentPage from "./views/index-sections/ContentPage";

import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import TagContentsPage from "./views/index-sections/TagContentsPage";

export default function App() {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/')
        // navigate('/content/63e31e0c1ab9109e2432270f')
        // navigate('/content/tag/iPhone')
    }, []);
 
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Index />}>
                    <Route index element={<IndexView />} />
                    <Route path="content/:id" element={(<ContentPage />)} />
                    <Route path="content/tag/:tagName" element={(<TagContentsPage />)} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            </Routes>
        </>
    )
}