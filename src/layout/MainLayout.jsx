import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
        <div>
            <h1>Header</h1>
        </div>
        {/* Phần body của Layout là nới các root được render ra  */}
        < Outlet />
        <div>
            <h1>Footer</h1>
        </div>
    </div>

  )
}

export default MainLayout