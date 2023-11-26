
import YouTube from 'react-youtube';
import Youtube from 'react-youtube';



const Home = () => {



  return (
    <div className="home">
      <h1 style={{ textAlign: "center" }}>
        <em> ♪♩ Tuner App 🎶</em>
      </h1>
      <div className="quote">
        <p
          style={{
            textTransform: "uppercase",
            borderBlock: ".44rem solid",
            borderBlockColor: "rgba(128, 0, 60, 0.531)",
            padding: "80px",
            margin: "105px",
            color: "purple",
            fontStyle: "oblique",
            fontSize: "20px",
            fontWeight: "bolder",
            textAlign: "center",
          }}
        >
          Welcome to Atlanta where the players play
          <br />
          And we ride on them things like every day
          <br />
          Big beats, hit streets, see gangsters roamin'
          <br />
          And parties don't stop 'til eight in the mornin'
        </p>
      </div>

      <YouTube videoId={'3k0cYQTlkQ4'}/>
    </div>
  );
};

export default Home;



// grab the ids from yt urls and add to videoId in column
// prop will be song.video_id