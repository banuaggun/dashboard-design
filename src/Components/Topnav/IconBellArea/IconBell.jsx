import React, { useState } from "react";

const IconBell = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="icon"
      onMouseEnter={() => setIsHovered(!isHovered)}
      onMouseLeave={() => setIsHovered(!isHovered)}
    >
      {isHovered ? (
        <i
          name="bell"
          type="solid"
          className="bx bxs-bell"
          style={{
            color: "var(--textColor3)",
            fontSize: 36,
            marginRight: 0,
            marginTop: -30
          }}
        ></i>
      ) : (
        <i
          name="bell"
          className="bx bx-bell"
          style={{
            color: "var(--textColor3)",
            fontSize: 36,
            marginRight: 0,
            marginTop: -30
          }}
        ></i>
      )}
    </div>
  );
};

export default IconBell;
