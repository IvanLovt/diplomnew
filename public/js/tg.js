// Отправка сообщения бота в лс тееб

const token ="6457989437:AAH3a1VHPOD5ZsvIWRv8WXMbAoF9Xo0fjAo";
const CHAT_ID ="707985459";
const URI_IP = `https://api.telegram.org/bot${token}/sendMessage`;
const success = document.getElementById('success');

document.getElementById('tgAp').addEventListener('submit', function(e) {
    e.preventDefault();

    let message = `<b>Заявка с сайта!!</b> \n`;
    message +=  `<b>Имя заказчика:</b> ${this.name.value } \n`;
    message +=  `<b>Почта заказчика:</b> ${this.email.value } \n`;
    message +=  `<b>Телефон:</b> ${this.telephone.value } \n`;
    message +=  `<b>Что он выбрал:</b> ${this.people.value }`;

    axios.post(URI_IP, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
        this.name.value = "";
        this.name.value = "";
        this.telephone.value = "";
        this.people.value = "";
        success.innerHTML = "Сообщение отправлено!";
        success.style.display = "block";

    })
    .catch((err) =>{
        console.warn(err);
    })
    .finally(() =>{
        alert(`Успешно!`);
    })
})

// кнопку в id="tgAp" 