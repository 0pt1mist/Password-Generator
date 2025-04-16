import React, { useEffect } from 'react';

import '../styles/main-app.css';

export function PasswordList({ allGeneratedPass }) {

    useEffect(() => {
        console.log(allGeneratedPass)
    }, [allGeneratedPass])

    return (
        <div className='SaveWin'>
            {/* <p style={{color: 'white'}}>{allGeneratedPass}</p> */}
            <label className='SaveWinTitle' >Избранные пароли</label>
            <ul>
                {(() => {
                    const list = [];
                    for (var i = 0; i < allGeneratedPass.length; i++) {
                        list.push(<li>{allGeneratedPass[i]}</li>);
                    };
                    // console.log(list)
                    return list;
                })()}
            </ul>
            <button className='DownloadBtn'  onClick={() => {
                const text = allGeneratedPass.join('\n');
                const blob = new Blob([text], { type: 'text/plain' });
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = 'passwords.txt';
                link.click();
                URL.revokeObjectURL(link.href);
            }}>Сохранить</button>
            {/* <button onClick={() => {
                setAllGeneratedPass([])
                }}>Очистить
            </button> */}
        </div>
    )
}
