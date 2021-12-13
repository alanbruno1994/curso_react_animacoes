import classes from './ModalTwo.module.css'
import { CSSTransition } from 'react-transition-group'

const animationTiming = {// O tempo de entrada e saida da animacao
    enter: 1000,
    exit: 1000
};

export default function ModalTwo(props:{enable:boolean,setEnable:(value:boolean)=>void})
{
    return   <CSSTransition 
    mountOnEnter //isso aqui e usado para que componente aparece na dom na hora de exibir
    unmountOnExit // Isso aqui e para tiar da dom na hora de esconder
    in={props.enable} //Aqui serve para controlar quando esconde e quando mostrar
    timeout={animationTiming}
    classNames={{
        enter: '',
        enterActive: classes.modalOpen,
        exit: '',
        exitActive: classes.modalClose
    }}>
    <div className={classes.modal}>
        <p>Modal Two</p>
        <button onClick={_=>props.setEnable(!props.enable)}>Close</button>
    </div>
    </CSSTransition>
}