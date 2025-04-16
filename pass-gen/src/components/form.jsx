import { useForm } from "react-hook-form";
import { useState } from "react";
import { genPass } from "../helper/genPass.js";

import '../styles/main-app.css'

export function GenPassFormF({ allGeneratedPass, setAllGeneratedPass }) {
    const [newPassword, setNewPassword] = useState('')

    // console.error(newPassword);

    const {register, handleSubmit, setValue, getValues} = useForm({
        defaultValues: {
            passLength: '8',
            // numbers: '6',
        }
    })

    return (
            <form className="MainWin" onSubmit={handleSubmit((values) => { setValue('newPassInput', genPass(values)); })}>
                <label className="MainWinTitle" htmlFor="">Готовый пароль</label>
                <div className="MainInput">
                    <input type="text" placeholder="Ваш пароль" {...register('newPassInput')} />
                    <div className="MainBtn">
                        <button className="GenBtn" type="submit">Создать</button>

                        <button className="SaveBtn" onClick={() => {
                            setNewPassword(getValues('newPassInput'));
                            setAllGeneratedPass([...allGeneratedPass, getValues('newPassInput')]);
                            }}><img src="/image/favBtn.png" alt="Сохранить" />
                        </button>
                    </div>               
                </div>
                
                <div className="PassLen">
                    <label htmlFor="">Длинна пароля</label>
                    <input type="text" {...register('passLength', { required: true })} required />
                    <p>до 20 символов!</p>
                </div>

                <div className="Other">
                    <div className="OtherOpt">
                        <input type="checkbox" {...register('numbers')} />
                        <label htmlFor="">Цифры</label>
                    </div>
                    <div className="OtherOpt">
                        <input type="checkbox" {...register('capLetters')} />
                        <label htmlFor="">Заглавные буквы</label>
                    </div>
                    <div className="OtherOpt">
                        <input type="checkbox" {...register('specSymbols')} />
                        <label htmlFor="">Специальные символы</label>
                    </div>
                </div>
            </form>
    )
}
