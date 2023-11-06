import Songs from '../Components/Songs'

function Index() {
    const h2Style = {
        textAlign: 'center',
    };
    return (
        <div className="Index" >
            <h2 style={h2Style}>Index</h2>
            <Songs />
        </div>
    )
}

export default Index;