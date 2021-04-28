import React from "react";
import { Container } from "semantic-ui-react";
import Title from "../../components/Title/Title";
import ScoreInfo from "../../components/ScoreInfo/ScoreInfo";
import "./Opus.css";

export default function Opus({ opus }) {
  console.log(opus)
  return (
    <div className="page">
      <Title opus={opus}/>
      <ScoreInfo />
    </div>
  );
}