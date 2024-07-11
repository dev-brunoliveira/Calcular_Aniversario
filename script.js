document.getElementById('birthdayForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();

    // Ajusta o ano da data de nascimento para o ano atual
    birthdate.setFullYear(today.getFullYear());

    // Verifica se o aniversário já ocorreu este ano ou não
    if (birthdate > today) {
        // Se ainda não ocorreu este ano, mantém o ano do nascimento
        birthdate.setFullYear(today.getFullYear());
    } else {
        // Se já ocorreu este ano, calcula para o próximo ano
        birthdate.setFullYear(today.getFullYear() + 1);
    }

    // Calcula o tempo restante até o próximo aniversário em milissegundos
    const timeUntilBirthday = birthdate.getTime() - today.getTime();
    
    // Calcula os dias até o próximo aniversário
    const daysUntilBirthday = Math.ceil(timeUntilBirthday / (1000 * 3600 * 24));

    // Calcula os segundos restantes até o próximo aniversário
    let secondsUntilBirthday = Math.floor(timeUntilBirthday / 1000);

    // Elementos onde serão mostrados o countdown e os dias restantes
    const countdownElement = document.getElementById('countdown');
    const daysElement = document.getElementById('days');

    function updateCountdown() {
        const hours = Math.floor(secondsUntilBirthday / 3600) % 24;
        const minutes = Math.floor(secondsUntilBirthday / 60) % 60;
        const seconds = secondsUntilBirthday % 60;

        daysElement.textContent = `Faltam ${daysUntilBirthday} dias para o seu próximo aniversário.`;

        // Decremente os segundos restantes
        secondsUntilBirthday--;

        // Atualiza a cada segundo
        if (secondsUntilBirthday >= 0) {
            setTimeout(updateCountdown, 1000); // Utiliza setTimeout para chamar a função a cada segundo
        }
    }

    // Chamada inicial para atualizar o countdown
    updateCountdown();
});
