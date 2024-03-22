const checkInput = () => {
    // Получаем значения всех полей
    const nameInput = document.querySelector('.task-name').value;
    const phoneInput = document.querySelector('.task-phone').value;
    const commentInput = document.querySelector('.task-comment').value;
    const streetInput = document.querySelector('.task-street').value;
    const imageInput = document.querySelector('.task-image').value;
    
    // Получаем кнопку
    const button = document.querySelector('.task-button');
    
    // Проверяем, заполнены ли все поля
    if (nameInput !== "" && phoneInput !== "" && commentInput !== "" && streetInput !== "" && imageInput !== "") {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}


const addTask = () => {
    const name = document.querySelector('.task-name').value;
    const phone = document.querySelector('.task-phone').value;
    const comment = document.querySelector('.task-comment').value;
    const street = document.querySelector('.task-street').value;
    const imageInput = document.querySelector('.task-image');
    const file = imageInput.files[0];

    let li = document.createElement("li");
    let img = document.createElement("img");

    img.src = URL.createObjectURL(file);
    img.alt = "Выбранное изображение";
    li.appendChild(img);

    // Создание div-контейнера для текстовых данных
    let div = document.createElement("div");
    div.classList.add("task-details");

    // Создание отдельных элементов для каждого текстового поля
    let nameSpan = document.createElement("span");
    let phoneSpan = document.createElement("span");
    let commentSpan = document.createElement("span");
    let streetSpan = document.createElement("span");

    // Заполнение текстовых полей
    nameSpan.textContent = `Имя: ${name}`;
    phoneSpan.textContent = `Контактные данные: ${phone}`;
    commentSpan.textContent = `Коммент: ${comment}`;
    streetSpan.textContent = `Адрес: ${street}`;

    // Добавление текстовых полей в div-контейнер
    div.appendChild(nameSpan);
    div.appendChild(phoneSpan);
    div.appendChild(commentSpan);
    div.appendChild(streetSpan);

    // Добавление div-контейнера в элемент списка
    li.appendChild(div);

    // Добавление элемента списка в список
    document.querySelector('.task-list').appendChild(li);

    // Очистка значений полей ввода
    document.querySelector('.task-name').value = "";
    document.querySelector('.task-phone').value = "";
    document.querySelector('.task-comment').value = "";
    document.querySelector('.task-street').value = "";
    imageInput.value = "";

    // Отключение кнопки добавления
    document.querySelector('.task-button').disabled = true;
}

