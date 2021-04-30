import React, { useState, useEffect } from "react";
import Page from '../../components/Page/Page';
import "./Opus.css";

export default function Opus({ opus, makeChanges, getUpdatedElement, current}) {

  const [pageNumber, setPageNumber] = useState(0)
  const [data, setData] = useState(opus.music.split('_p'))

  return (
    <div className="page">
      <Page pageNumber={pageNumber} data={data[pageNumber]} opus={opus} makeChanges={makeChanges} getUpdatedElement={getUpdatedElement, current={current} } />
    </div>
  );
}