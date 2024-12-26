// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';

const DummyPage = ({ title }) => (
  <div className="p-6">
    <h1 className="text-2xl font-bold">{title}</h1>
  </div>
);

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/components" element={<DummyPage title="Components" />} />
          <Route path="/elements" element={<DummyPage title="Elements" />} />
          <Route path="/forms" element={<DummyPage title="Forms" />} />
          <Route path="/advanced-ui" element={<DummyPage title="Advanced UI" />} />
          <Route path="/basic-ui" element={<DummyPage title="Basic UI" />} />
          <Route path="/nested-menu" element={<DummyPage title="Nested Menu" />} />
          <Route path="/maps" element={<DummyPage title="Maps" />} />
          <Route path="/charts" element={<DummyPage title="Charts" />} />
          <Route path="/pages" element={<DummyPage title="Pages" />} />
          <Route path="/icons" element={<DummyPage title="Icons" />} />
          <Route path="/authentication" element={<DummyPage title="Authentication" />} />
          <Route path="*" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
