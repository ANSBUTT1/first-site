import React, { useEffect, useState } from "react";

const CursorWithSnapEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // ماؤس کی حرکت پر کرسر کی پوزیشن اپڈیٹ کریں
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      // ایونٹ لسٹنر ختم کریں
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // کرسر اسٹائل کی تفصیلات
  const cursors = [
    { size: 6, color: "#f97316", delay: 0 }, // پہلا کرسر
    { size: 8, color: "#22d3ee", delay: 50 }, // دوسرا کرسر
    { size: 12, color: "#a3e635", delay: 100 }, // تیسرا کرسر
    { size: 16, color: "#f43f5e", delay: 150 }, // چوتھا کرسر
    { size: 20, color: "#3b82f6", delay: 200 }, // پانچواں کرسر
  ];

  return (
    <>
      {cursors.map((cursor, index) => (
        <div
          key={index}
          className={`fixed rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-500 ease-in-out`}
          style={{
            width: `${cursor.size}px`, // کرسر کا سائز
            height: `${cursor.size}px`,
            backgroundColor: cursor.color, // کرسر کا رنگ
            boxShadow: `0 0 10px ${cursor.color}`, // شیڈو کلر
            top: `${position.y}px`,
            left: `${position.x}px`,
            transitionDelay: `${cursor.delay}ms`, // اینیمیشن میں تاخیر
          }}
        ></div>
      ))}
    </>
  );
};

export default CursorWithSnapEffect;
