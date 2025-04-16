export const genPass = (values) => {
    // console.log(values)
    let charset = 'abcdefghijklmnopqrstuvwxyz';
    if (values.numbers) charset += '0123456789';
    if (values.capLetters) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (values.specSymbols) charset += '!@#$%^&*()_+=-';

    var newPassword = '';

    for (var i = 0; i < parseInt(values.passLength); i++) {
        newPassword += charset[Math.floor(Math.random() * charset.length)]
    };

    return newPassword;
}