/* Preconfigured App.tsx — modify only routes */
    
import React from 'react';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './src/pages/Home.tsx';
import Teams from './src/pages/Teams.tsx';
import News from './src/pages/News.tsx';
import Matches from './src/pages/Matches.tsx';
import Players from './src/pages/Players.tsx';
import Tournaments from './src/pages/Tournaments.tsx';
import NotFound from './src/pages/NotFound.tsx';
import TeamRussia from './src/pages/TeamRussia.tsx';
import TeamBelarus from './src/pages/TeamBelarus.tsx';
import TeamFrance from './src/pages/TeamFrance.tsx';

const App: React.FC = () => {
  return (
    <Theme appearance="inherit" radius="large" scaling="100%">
      <Router>
        <main className="min-h-screen font-inter">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/teams/russia" element={<TeamRussia />} />
            <Route path="/teams/belarus" element={<TeamBelarus />} />
            <Route path="/teams/france" element={<TeamFrance />} />
            <Route path="/news" element={<News />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/players" element={<Players />} />
            <Route path="/tournaments" element={<Tournaments />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            newestOnTop
            closeOnClick
            pauseOnHover
          />
        </main>
      </Router>
    </Theme>
  );
}

export default App;