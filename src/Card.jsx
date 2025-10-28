import profPic from './assets/profile.jpg'

function Card(){
    return (
        <div className="card">
            <img className="card-image" src={profPic} alt="image" />
            <h2 className="card-title">Masud Wubetu</h2>
            <p className="card-text">I'm Taking React Tutorial</p>
        </div>
    );
}
export default Card