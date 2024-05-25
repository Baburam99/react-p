import "./home.css"
function Home(){
    return(
        <div id="home" className="home">
            <div className="home-texts">
            <h2>Hey, I am <span className="highlight">Yash</span> and I am  enthusiastic <span className="highlight"> web developer</span>.</h2>
            <div className="home-links">
               <a href="https://github.com/Baburam99" target="_blank"><button>GitHub</button></a>
               <a href="https://www.fiverr.com/baburam1221" target="_blank"><button>  Fiver</button></a>
            </div>
            </div>
            <div className="home-img">
                <img src="https://braincavesoft.com/main/images/web-development.png" alt="developer png" />
            </div>
        </div>
    )
}
export default Home