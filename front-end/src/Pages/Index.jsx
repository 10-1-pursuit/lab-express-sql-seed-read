import Songs from '../Components/Songs'

function Index() {
    return (
        <div className="index">
        <h1 className="text-center" style={{ background: "violet", color: "black", padding: "10px" }}>
          Songs
        </h1>
            <Songs />
        </div>
    )
}

export default Index;