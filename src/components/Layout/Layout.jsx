import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from 'components/AppBar/AppBar';

export function Layout() {
    return (
        <div>
            <AppBar />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </div>
    );
}