import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
export function Todolist(props) {
    return (
        <div className="aaa">
        <p><span className={props.className}>{props.todo} </span>
        <span className="buttons">
        <span className="button" onClick={props.onClickedit}>< EditIcon/></span>
        <span className="button" onClick={props.onClickX}><DeleteIcon/></span></span></p>
        </div>
    )
}
