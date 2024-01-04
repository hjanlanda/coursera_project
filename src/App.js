import './App.css';
import Nav from './components/sections/Nav';
import HomePage from './pages/HomePage';
import Footer from './components/sections/Footer';
import styled from 'styled-components';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuPage from './pages/MenuPage';
import ReservationsPage from './pages/ReservationsPage';
import OrderPage from './pages/OrderPage';
import LoginPage from './pages/LoginPage';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 800px;
  overflow-x: scroll;
  align-items: center;
  margin: auto;
`;

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/menu" element={<MenuPage />}></Route>
            <Route path="/reservations" element={<ReservationsPage />}></Route>
            <Route path="/order_online" element={<OrderPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
          </Routes>
        </main>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
