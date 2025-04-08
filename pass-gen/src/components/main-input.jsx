import '../styles/main-app.css';
import { GenBtn } from "./gen-btn";
import { SaveBtn } from './save-btn';

export function MainInput(){
    return(
        <div className="MainInput">
            <input type="text" placeholder="Здесь будет пароль!" />
            <div className='MainBtn'>
                <GenBtn />
                <SaveBtn />
            </div>
            
        </div>
    )
};