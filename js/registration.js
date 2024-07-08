document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию

    // Получаем значения полей формы
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var phone = document.getElementById("phone").value;
    var city = document.getElementById("city").value;
    var agree = document.getElementById("agree").checked;

    // Проверка согласия с пользовательским соглашением
    if (!agree) {
        alert("Для регистрации необходимо согласиться с пользовательским соглашением.");
        return;
    }

    // Получаем сохраненные данные из локального хранилища
    var clients = JSON.parse(localStorage.getItem("clients")) || [];

    // Добавляем нового клиента в массив
    clients.push({ email, password, phone, city });

    // Сохраняем обновленный массив в локальное хранилище
    localStorage.setItem("clients", JSON.stringify(clients));

    // Создаем массив данных для Excel
    var data = [["Email", "Пароль", "Номер телефона", "Город"]];

    clients.forEach(function(client) {
        data.push([client.email, client.password, client.phone, client.city]);
    });

    // Создаем книгу и добавляем данные
    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, "Регистрация");

    // Генерируем файл Excel и загружаем его
    XLSX.writeFile(wb, "registration_data.xlsx");
});