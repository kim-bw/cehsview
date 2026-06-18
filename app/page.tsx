"use client";

import { useState } from "react";

const mapButtons = [
  { id: "a", label: "A동", top: "18%", left: "22%" },
  { id: "b", label: "B동", top: "48%", left: "58%" },
  { id: "c", label: "C동", top: "72%", left: "34%" },
];

const floorCards = ["1층", "2층", "3층"];

export default function Home() {
  const [activeMapId, setActiveMapId] = useState<string | null>(null);
  const [selectedFloor, setSelectedFloor] = useState("1층");

  const activeBuilding =
    mapButtons.find((button) => button.id === activeMapId) ?? mapButtons[0];

  const handleMapButtonClick = (id: string) => {
    setActiveMapId(id);
  };

  const handleFloorSelect = (floor: string) => {
    setSelectedFloor(floor);
    setActiveMapId(null);
  };

  return (
    <main className="page-shell">
      <section className="map-panel">
        <div className="map-header">
          <div>
            <p className="eyebrow">건물 위치</p>
            <h1>CEHS View</h1>
          </div>
          <span className="selected-info">
            {activeBuilding.label} · {selectedFloor}
          </span>
        </div>

        <div className="map-surface">
          {mapButtons.map((button) => (
            <button
              key={button.id}
              type="button"
              className={`map-button ${activeMapId === button.id ? "active" : ""}`}
              style={{ top: button.top, left: button.left }}
              onClick={() => handleMapButtonClick(button.id)}
            >
              {button.label}
            </button>
          ))}

          {activeMapId && (
            <div className="floor-popup">
              <div className="popup-arrow" />
              <p className="popup-title">{activeBuilding.label} 층 선택</p>
              <div className="floor-card-row">
                {floorCards.map((floor) => (
                  <button
                    key={floor}
                    type="button"
                    className={`floor-card ${selectedFloor === floor ? "selected" : ""}`}
                    onClick={() => handleFloorSelect(floor)}
                  >
                    {floor}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
