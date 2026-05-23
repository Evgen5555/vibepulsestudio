Переименовать бренд в навигации с `NEXUS.studio` на `VibePulse studio`.

## Изменения

**`src/components/landing/Nav.tsx`** — заменить логотип-ссылку:
- Было: `<span className="text-gradient-cv">N</span>EXUS<span className="text-foreground/60">.studio</span>`
- Станет: `<span className="text-gradient-cv">Vibe</span>Pulse<span className="text-foreground/60"> studio</span>`

Первая часть `Vibe` подсвечивается фирменным cyan→violet градиентом, `Pulse` — основным цветом, ` studio` — приглушённым, сохраняя текущую визуальную иерархию.

## Проверка

Открыть превью и убедиться, что новое название корректно отображается в шапке на десктопе и мобильном.
