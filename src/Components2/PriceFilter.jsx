import React, { useState, useRef, useEffect } from "react";
import "./style.css";

const PriceFilter = () => {
  const [price, setPrice] = useState({ min: 0, max: 60000 });
  const lineRef = useRef(null);
  const leftDotRef = useRef(null);
  const rightDotRef = useRef(null);
  const prices = [0, 15000, 30000, 40000, 50000, 60000, 70000];

  const minLimit = 0;
  const maxLimit = 70000;

  // --- UPDATE DOT POSITIONS BASED ON PRICE ---
  useEffect(() => {
    const line = lineRef.current;
    const leftDot = leftDotRef.current;
    const rightDot = rightDotRef.current;

    if (line && leftDot && rightDot) {
      const leftPercent = ((price.min - minLimit) / (maxLimit - minLimit)) * 100;
      const rightPercent = ((price.max - minLimit) / (maxLimit - minLimit)) * 100;

      leftDot.style.left = `calc(${leftPercent}% - 13px)`;
      rightDot.style.left = `calc(${rightPercent}% - 13px)`;

      const activeLine = line.querySelector(".filterLineTwo");
      activeLine.style.left = `${leftPercent}%`;
      activeLine.style.width = `${rightPercent - leftPercent}%`;
    }
  }, [price]);

  // --- HANDLE SELECT CHANGES ---
  const handleMinChange = (e) => {
    const newMin = Number(e.target.value);
    setPrice((prev) => ({
      ...prev,
      min: Math.min(newMin, prev.max - 5000),
    }));
  };

  const handleMaxChange = (e) => {
    const newMax = Number(e.target.value);
    setPrice((prev) => ({
      ...prev,
      max: Math.max(newMax, prev.min + 5000),
    }));
  };

  // --- DRAG LOGIC FOR DOTS (with snapping to nearest price) ---
  const startDrag = (dotType, e) => {
    e.preventDefault();
    const line = lineRef.current;
    const lineRect = line.getBoundingClientRect();

    const handleMouseMove = (moveEvent) => {
      const newX = moveEvent.clientX - lineRect.left;
      let newPercent = (newX / lineRect.width) * 100;
      newPercent = Math.max(0, Math.min(100, newPercent));

      // Convert to price value
      const newValue = Math.round(
        minLimit + ((maxLimit - minLimit) * newPercent) / 100
      );

      // Snap to nearest valid price step from `prices`
      const closestPrice = prices.reduce((prev, curr) =>
        Math.abs(curr - newValue) < Math.abs(prev - newValue) ? curr : prev
      );

      setPrice((prev) => {
        if (dotType === "min") {
          return {
            ...prev,
            min: Math.min(closestPrice, prev.max - 5000),
          };
        } else {
          return {
            ...prev,
            max: Math.max(closestPrice, prev.min + 5000),
          };
        }
      });
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="filterPrice">
      <div className="filterPriceOne">
        <div className="filterPriceName">
          <span>Price</span>
        </div>
      </div>

      <div className="filterPriceThree">
        <div className="priceLine" ref={lineRef}>
          <div className="filterLineOne"></div>
          <div className="filterLineTwo"></div>

          <div
            className="leftRound"
            ref={leftDotRef}
            onMouseDown={(e) => startDrag("min", e)}
          >
            <div className="lRound"></div>
          </div>

          <div
            className="rightRound"
            ref={rightDotRef}
            onMouseDown={(e) => startDrag("max", e)}
          >
            <div className="rRound"></div>
          </div>
        </div>

        {/* Dots below slider */}
        <div className="pricedots">
          {prices.map((_, i) => (
            <div key={i} className="priceDot">.</div>
          ))}
        </div>
      </div>

      <div className="filterPriceFour">
        <div className="priceMenuOne">
          <select
            className="selecetMinPrice"
            value={price.min}
            onChange={handleMinChange}
          >
            {prices.slice(0, -1).map((p) => (
              <option key={p} value={p}>
                {p === 0 ? "Min" : `₹${p}`}
              </option>
            ))}
          </select>
        </div>
        <div className="priceMid">to</div>
        <div className="priceMenuTwo">
          <select
            className="selectMaxPrice"
            value={price.max}
            onChange={handleMaxChange}
          >
            {prices.slice(1).map((p) => (
              <option key={p} value={p}>
                ₹{p === 70000 ? "60000+" : p}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;//sss