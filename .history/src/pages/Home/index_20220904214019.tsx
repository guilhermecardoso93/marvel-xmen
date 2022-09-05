import { useState } from 'react';
import "./styles.css";

export function Home() {
  const [youtubeID] = useState("VttrlthDJTs");

  return (
    <div>
      <h1>X-Men: The Animated Series</h1>
      <div className="video-responsive">
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
