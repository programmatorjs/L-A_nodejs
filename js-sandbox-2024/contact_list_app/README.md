# Приложение "Список контактов"

Это приложение на React для управления списком контактов.

## Особенности

- Получение контактов из локального API
- Добавление новых контактов
- Удаление существующих контактов
- Обновление информации о контактах
- Поиск контакта

## Компоненты

- `App`: Это основной компонент приложения. Он управляет состоянием приложения и включает методы для получения, добавления, удаления и обновления контактов.
- `ListItem`: Этот компонент представляет один контакт в списке. Он получает имя, номер телефона и id контакта, а также методы для удаления и обновления контакта.
- `AddContacts`: Этот компонент включает форму для добавления нового контакта. Он получает метод для добавления контакта.
- `SearchContacts`: Этот компонент включает строку поиска для поиска контакта. Он получает метод для поиска контакта.

## Использование

Для запуска приложения используйте следующую команду:

npm start