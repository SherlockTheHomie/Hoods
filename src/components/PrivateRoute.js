import React from "react";
import { Route, Link } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';

export default function PrivateRoute({ children, role }) {
    const { currentUser, isAdmin } = useAuth();

    if (currentUser === undefined ) {
        return (
            <div>NOT REAL</div>
        )
    } else {
        return children;
    }
}