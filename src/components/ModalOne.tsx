import classes from './ModalOne.module.css'

export default function ModalOne(props:{enableOne:boolean,setEnableOne:(value:boolean)=>void})
{
    return <div className={`${classes.modal} ${props.enableOne ? classes.modalOpen : classes.modalClose}`}>
        <p>Modal One</p>
        <button onClick={_=>props.setEnableOne(!props.enableOne)}>Close</button>
    </div>
}