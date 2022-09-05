import { useState } from "react";
import "./styles.css";

import gif1 from '../../assets/gif.gif'

export function Home() {
  const [youtubeID] = useState("sAkL2-vh2Sk");

  return (
    <div className="video-responsive">
      <h1>X-Men: The Animated Series</h1>
      <img src={gif1}/>
      <div>
        <iframe
          className="video"
          title="Youtube player"
          sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
          src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}
        ></iframe>
      </div>
    </div>
  );
}
