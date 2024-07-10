import '../css/style.css'

const BoxInfo = (props) => {
    return (
        <div className="boxInfo">
            <p className="corDestaque">{props.texto}</p>
        </div>
    );
}


export default BoxInfo