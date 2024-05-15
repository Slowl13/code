import './App.css';

export default function Form(){
    return(
        <div className="Form">
            <p>Форма обратной связи</p>
            
            <lable>Ваше имя  <input></input></lable>
            <br></br>
            <lable>Ваш email  <input></input></lable>
            <br></br>
            <lable> <input type="button" value="Отправить"></input></lable>
        </div>
    )
}