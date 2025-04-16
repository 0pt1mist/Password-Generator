import React, { useEffect } from 'react';

import '../style/passwordList.css';

export function PasswordList({ allGeneratedPass }) {

    useEffect(() => {
        console.log(allGeneratedPass)
    }, [allGeneratedPass])

    return (
        <div className='aboba'>
            {/* <p style={{color: 'white'}}>{allGeneratedPass}</p> */}
            <h2 style={{marginTop: 0, color: 'white'}}>Сгенерированные пароли</h2>
            <ul style={{color: 'white'}}>
                {(() => {
                    const list = [];
                    for (var i = 0; i < allGeneratedPass.length; i++) {
                        list.push(<li>{allGeneratedPass[i]}</li>);
                    };
                    // console.log(list)
                    return list;
                })()}
            </ul>
            <button onClick={() => {
                const text = allGeneratedPass.join('\n');
                const blob = new Blob([text], { type: 'text/plain' });
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = 'passwords.jsx';
                link.click();
                URL.revokeObjectURL(link.href);
            }}>Сохранить</button>
        </div>
    )
}
