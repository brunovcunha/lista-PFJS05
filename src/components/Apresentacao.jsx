import '../css/style.css'
import BoxInfo from './BoxInfo'
import Secao from './Secao'

const Apresentacao = () => {
    return (
        <div className="apresentacao">
        <Secao/>
        <BoxInfo texto="Plano de Desenvolvimento Institucional"/>
        </div>
    )
}

export default Apresentacao