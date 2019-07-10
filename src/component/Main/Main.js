import React from 'react';
import info from 'resource/info.png';
import Member from './Member';
import './Main.css'
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className="App">
      <div className="Introduce">
        <div className="Introduce-club">
            <Link to="/"><img src={info} alt="info" className="Logo"/></Link>
            <div className="Introduce-description">
              <h2 className="Introduce-title" id="Club-title">동아리 소개</h2>
              <p>INFO 동아리는 대덕소프트웨어마이스터고등학교에서 정보보안에 관심있는 학생들의 Long run을 위한 기반지식 습득 가이드라인을 제작하는 동아리입니다.</p>
            </div>
        </div>
        <div className="Introduce-wrapper">
          <div className="Introduce-member">
            <h2 className="Introduce-title">동아리원 소개</h2>
            <Member />
          </div>
          <div className="Introduce-history">
            <h2 className="Introduce-title">동아리 활동</h2>
            <p>2017년 동아리 설립</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;