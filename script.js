window.onload = () => {
    const validation = new JustValidate('form',
        {
            validateBeforeSubmitting: true,
        }
        );

    validation
        .addField('#input1', [
            {
                rule: 'minLength',
                value: 3,
                errorMessage: 'Минимальная длина 3 символа!',
            }
        ])
        .addField('#input3', [
            {
                rule: 'required',
                errorMessage: 'Email обязателен!',
            },
            {
                rule: 'email',
                errorMessage: 'Email не корректный!',
            },
        ]);
}