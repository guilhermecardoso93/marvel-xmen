import "./styles.css";

export function Home() {
  return (
    <div>
      <h1>X-Men: The Animated Series</h1>
      <div className="video-responsive">
        <iframe
          width="853"
          height="480"
          src={'https://www.youtube.com/watch?v=sAkL2-vh2Sk'}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="X-MEN Animated Series Opening"
        />
      </div>
    </div>
  );
}
