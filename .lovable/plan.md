
## Что делаем

Добавляем секцию FAQ из присланного сниппета на главную, между `RoiCalculator` и `CtaFooter` (логично закрывать возражения перед финальной CTA).

## Файлы

1. **Создать `src/components/landing/Faq.tsx`** — на базе присланного кода, с правками:
   - Named export `Faq` (как у остальных секций: `Hero`, `Quiz`, `RoiCalculator`).
   - Обернуть в `<section id="faq" className="relative py-24 sm:py-32">`, чтобы попадало в общий ритм (как `Quiz`/`RoiCalculator`), и убрать локальный `bg-[#060a13]` (фон задаётся глобально).
   - Заменить хардкод-цвета (`bg-[#0b1329]`, `text-slate-400`, `border-slate-900`) на токены дизайн-системы: `glass`, `border-border`, `text-muted-foreground`, `text-foreground`, `bg-card/40`, активное состояние — `border-primary/50` + `shadow-neon-violet`, акценты градиента — `text-gradient-cv` (вместо `from-cyan-400 via-indigo-400 to-purple-500`).
   - Иконку `HelpCircle` подсвечивать `text-secondary`/`text-primary` через токены.
   - Заголовок-чип «FAQ» оформить как в `Quiz` (`text-sm text-secondary mb-3`) для единообразия, без cyan-плашки.
   - Контент вопросов/ответов оставить **без изменений** — текст пользователя.
   - Добавить аккуратную анимацию раскрытия через `framer-motion` `AnimatePresence` + `motion.div` (height/opacity), как в `Quiz`, вместо `max-h` трюка — это плавнее и не «рубит» длинные ответы.

2. **`src/routes/index.tsx`** — импорт `Faq` и вставка `<Faq />` между `<RoiCalculator />` и `<CtaFooter />`.

3. **`src/components/landing/Nav.tsx`** — если в навигации есть пункты-якоря, добавить ссылку «FAQ» → `#faq`. (Проверю при сборке; если навигация без якорей — пропускаю.)

## Дизайн-инварианты

- Без хардкод-цветов в JSX — только токены из `src/styles.css`.
- Ширина контейнера — `max-w-4xl`, как в сниппете (хорошо читается).
- Соблюдаем тёмную тему и эстетику остальных секций (glass + neon-glow на активном элементе).

## Открытых вопросов нет — делаю.
