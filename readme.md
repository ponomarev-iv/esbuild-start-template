# Описание

Стартовый шаблон для верстки

# Сборка проекта Gulp и esbuild

### Сборка и запуск отслеживания изменений

## serve для разработки фронта

```npm run serve```

Запускается сборка html, css, js и browser-sync

## prod сборка
```npm run build```

Устанавливает `NODE_ENV = production` и запускаются те же задачи сборки что и для serve,
но не запускается browser-sync и отслеживание изменений.

Удалется все из `build/` и `public/`

Статика, css и js собираются в `build/`

html собирается в `public/`.

## demo сборка
Если нужно например собрать все и передать в архиве, чтобы можно было посмотреть
верстку не запуская локальный сервер.

Запускается сборка html, css, js и собирается в `public/`


## Особенности сборки
При сборке html используется шаблонизатор - pug.

```pug``` - для верстки, разделение кода на шаблоны, компоненты и т.д.
