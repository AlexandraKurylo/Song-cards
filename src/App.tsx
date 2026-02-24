import { useState, useEffect } from "react";
import type { CardData } from "./types/types";
import { SongList } from "./components/SongList";
import { Button } from "./components/Button";
import { TabControls } from "./components/TabControls";
import { NavigationControls } from "./components/NavigationControls";
import "./index.css";

export default function App() {
  const [songs, setSongs] = useState<CardData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<number>(0);

  const itemsPerPage = 2;
  const totalTabs = Math.ceil(songs.length / itemsPerPage);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch("http://localhost:3001/songs");
        if (!res.ok) throw new Error("Server error");
        const data = await res.json();
        setSongs(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  const currentSongs = songs.slice(activeTab * itemsPerPage, activeTab * itemsPerPage + itemsPerPage);

  return (
    <div className="app-container">
      {isOpen && (
        <div className="start-screen">
          <Button onClick={() => setIsOpen(false)} variant="start">
            Start Exploring
          </Button>
        </div>
      )}

      {!isOpen && (
        <div className="app">
          <span className="close" onClick={() => setIsOpen(true)}>
            &times;
          </span>

          <h1>Spotify Top Songs</h1>

          <TabControls totalTabs={totalTabs} activeTab={activeTab} onTabChange={setActiveTab} />

          {isLoading ? <div className="loading">Loading music...</div> : <SongList items={currentSongs} />}

          <NavigationControls
            onPrev={() => setActiveTab((p) => p - 1)}
            onNext={() => setActiveTab((p) => p + 1)}
            isPrevDisabled={activeTab === 0}
            isNextDisabled={activeTab === totalTabs - 1}
          />

          <footer className="footer">
            <p>
              <strong>Stack:</strong> React, TypeScript, JSON Server
            </p>
          </footer>
        </div>
      )}
    </div>
  );
}
