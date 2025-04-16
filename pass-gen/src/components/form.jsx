import { useForm } from "react-hook-form";
import { useState } from "react";
import { genPass } from "../helper/genPass.js";

import '../style/form.css'

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
        <div>
            <form onSubmit={handleSubmit((values) => { setValue('newPassInput', genPass(values)); })}>

                <label htmlFor="">Готовый пароль</label>
                <input type="text" placeholder="--Не обязательно" {...register('newPassInput')} />
                
                <label htmlFor="">Длинна пароля</label>
                <input type="text" {...register('passLength', { required: true })} required />
                
                <label htmlFor="">Цифры</label>
                <input type="checkbox" {...register('numbers')} />

                <label htmlFor="">Заглавные буквы</label>
                <input type="checkbox" {...register('capLetters')} />

                <label htmlFor="">Специальные символы</label>
                <input type="checkbox" {...register('specSymbols')} />

                <button type="submit">Сгенерировать</button>

            </form>

            <button onClick={() => {
                setNewPassword(getValues('newPassInput'));
                setAllGeneratedPass([...allGeneratedPass, getValues('newPassInput')]);
            }}>Добавить</button>

            <button onClick={() => {
                setAllGeneratedPass([])
            }}>Очистить</button>

        </div>
    )
}
