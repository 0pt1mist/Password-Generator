import "../styles/main-app.css";

export function OtherOptions({id, value, name}) {
    return(
        <div className="OtherOpt">
            <input type="checkbox" id={id} value={value}/>
            <label htmlFor={id}>{name}</label> 
        </div>
    );
};
