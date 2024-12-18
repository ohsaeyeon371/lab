import React from "react";
import "./Apple.css"; // 스타일을 적용하기 위한 CSS 파일

const Apple = () => {
    return (
      <div className="page-content">
        <h1>Apple</h1>
        <img
          src="https://via.placeholder.com/600x400" // 사과 이미지 URL을 삽입
          alt="사과"
          className="content-image"
        />
      </div>
    );
  };
  
export default Apple;
