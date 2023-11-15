function Home() {
  const containerStyle = {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const textCenterStyle = {
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <div style={textCenterStyle}>
        <h2>✋ Hello 🤚</h2>
        <h3>🎹 Welcome to the Tuner App 🎸</h3>
      </div>
    </div>
  );
}
  export default Home;
  
  