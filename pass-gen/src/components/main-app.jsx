import "../styles/main-app.css";
import { MainInput } from "./main-input";
import { PassLength } from "./pass-length";
import { OtherOptions } from "./other-opt";
import { genPass } from "../helper/genPass.js";
import { GenPassFormF } from './form';

export function MainWin() {

    return(
        <main className="Main">
            <div className="MainWin">
                <div className="MainWinTitle">
                    <p>Готовый пароль</p>
                </div>
                <GenPassFormF />
                {/* <MainInput />
                <PassLength />
                <div className="Other">
                    <OtherOptions
                        id="NumCheckbox"
                        value="Numbers"
                        name="Цифры"
                    />
                    <OtherOptions
                        id="CapLetCheckbox"
                        value="CapLetters"
                        name="Заглавные буквы"
                    />
                    <OtherOptions
                        id="SpecSymCheckbox"
                        value="SpecSymbols"
                        name="Специальные символы"
                    />
                </div> */}
            </div>
            <div className="SaveWin">
                <div className="SaveWinTitle">
                    <p>Сохранёные пароли</p>
                </div>

            </div>
        </main>
    )
};