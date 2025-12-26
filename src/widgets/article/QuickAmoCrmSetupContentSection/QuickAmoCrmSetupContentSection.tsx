import ArticleBlockWrapper from "@/widgets/article/ArticleContentSection/ui/ArticleBlockWrapper";
import ArticleSubtitle from "@/widgets/article/ArticleContentSection/ui/ArticleSubtitle";
import ArticleList from "@/widgets/article/ArticleContentSection/ui/ArticleList";
import ArticleAccentBlock from "@/widgets/article/ArticleContentSection/ui/ArticleAccentBlock";

import Reveal from "@/shared/ui/Reveal/Reveal";
import styles from "@/page/Article/QuickAmoCrmSetup/QuickAmoCrmSetup.module.css";

function ImagePlaceholder() {
  return (
    <div className={styles.figure}>
      <div className={styles.placeholder}>
        <div className={styles.placeholderInner} />
      </div>
    </div>
  );
}

function ImagePlaceholderRow() {
  return (
    <div className={styles.figure}>
      <div className={styles.figureRow}>
        <div className={styles.placeholder}>
          <div className={styles.placeholderInner} />
        </div>
        <div className={styles.placeholder}>
          <div className={styles.placeholderInner} />
        </div>
      </div>
    </div>
  );
}

export default function QuickAmoCrmSetupContentSection() {
  return (
    <div>
      <Reveal className={styles.reveal} shownClassName={styles.revealShown} delayMs={0}>
        <ArticleBlockWrapper>
          <p>
            <strong>Быстрая настройка amoCRM</strong> возможна — систему действительно можно
            запустить за один день. Но важно сразу сделать базу правильно.
            <br />
            Ниже — короткий чеклист настройки amoCRM для новичков, без воды и лишних действий.
          </p>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal className={styles.reveal} shownClassName={styles.revealShown} delayMs={60}>
        <ImagePlaceholder />
      </Reveal>

      <Reveal className={styles.reveal} shownClassName={styles.revealShown} delayMs={80}>
        <ArticleBlockWrapper>
          <ArticleSubtitle title="Шаг 1. Определите цель CRM" />

          <p>Перед настройкой ответьте на три вопроса:</p>
          <ArticleList
            items={[
              "откуда приходят заявки",
              "кто с ними работает",
              "какой результат считается продажей",
            ]}
          />

          <ArticleAccentBlock>
            <p>
              <strong>Важно:</strong> без этого CRM быстро превращается в обычный список
              контактов.
            </p>
          </ArticleAccentBlock>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal className={styles.reveal} shownClassName={styles.revealShown} delayMs={60}>
        <ImagePlaceholder />
      </Reveal>

      <Reveal className={styles.reveal} shownClassName={styles.revealShown} delayMs={120}>
        <ArticleBlockWrapper>
          <ArticleSubtitle title="Шаг 2. Создайте воронку продаж" />

          <h3>Одна воронка = один путь клиента.</h3>

          <h3>Минимальный вариант:</h3>
          <ArticleList
            items={[
              "Новая заявка",
              "Контакт установлен",
              "Переговоры",
              "Счёт / предложение",
              "Успешно / Отказ",
            ]}
          />

          <h3>Совет:</h3>
          <ArticleList
            items={[
              "не больше 7–9 этапов",
              "каждый этап = конкретное действие менеджера",
            ]}
          />
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal className={styles.reveal} shownClassName={styles.revealShown} delayMs={60}>
        <ImagePlaceholder />
      </Reveal>

      <Reveal className={styles.reveal} shownClassName={styles.revealShown} delayMs={80}>
        <ArticleBlockWrapper>
          <ArticleSubtitle title="Шаг 3. Настройте источники заявок" />

          <h3>Подключите все каналы, откуда приходят лиды:</h3>
          <ArticleList items={["сайт", "формы", "телефония", "WhatsApp", "Telegram"]} />

          <h3>Проверьте:</h3>
          <ArticleList
            items={[
              "создаётся ли сделка",
              "фиксируется ли источник",
              "сохраняется ли история общения",
            ]}
          />
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal className={styles.reveal} shownClassName={styles.revealShown} delayMs={60}>
        <ImagePlaceholderRow />
      </Reveal>

      <Reveal className={styles.reveal} shownClassName={styles.revealShown} delayMs={120}>
        <ArticleBlockWrapper>
          <ArticleSubtitle title="Шаг 4. Добавьте обязательные поля" />

          <p>В карточке сделки должны быть только действительно нужные данные.</p>

          <h3>Минимум:</h3>
          <ArticleList
            items={["имя клиента", "телефон", "источник", "ответственный менеджер"]}
          />

          <p>Не перегружайте форму — менеджеры не любят лишние поля.</p>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal className={styles.reveal} shownClassName={styles.revealShown} delayMs={60}>
        <ImagePlaceholder />
      </Reveal>

      <Reveal className={styles.reveal} shownClassName={styles.revealShown} delayMs={80}>
        <ArticleBlockWrapper>
          <ArticleSubtitle title="Шаг 5. Включите базовую автоматизацию" />

          <p>Даже новичкам нужна автоматизация — без неё CRM не экономит время.</p>

          <h3>Обязательно:</h3>
          <ArticleList
            items={[
              "автоназначение менеджера",
              "автоматическая задача при новой сделке",
              "напоминание, если клиенту долго не отвечают",
            ]}
          />

          <p>Это уже снижает потери лидов и экономит часы работы.</p>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal className={styles.reveal} shownClassName={styles.revealShown} delayMs={60}>
        <ImagePlaceholder />
      </Reveal>

      <Reveal className={styles.reveal} shownClassName={styles.revealShown} delayMs={120}>
        <ArticleBlockWrapper>
          <ArticleSubtitle title="Шаг 6. Настройте задачи для менеджеров" />

          <p>CRM без задач не работает.</p>

          <ArticleAccentBlock>
            <p>
              <strong>Правило простое:</strong> нет задачи → сделка зависла.
            </p>
          </ArticleAccentBlock>

          <h3>Настройте:</h3>
          <ArticleList
            items={[
              "задачу при создании сделки",
              "задачу при смене этапа",
              "контроль просроченных задач",
            ]}
          />
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal className={styles.reveal} shownClassName={styles.revealShown} delayMs={60}>
        <ImagePlaceholderRow />
      </Reveal>

      <Reveal className={styles.reveal} shownClassName={styles.revealShown} delayMs={80}>
        <ArticleBlockWrapper>
          <ArticleSubtitle title="Шаг 7. Проверьте аналитику" />

          <h3>Минимум, который нужно видеть:</h3>
          <ArticleList
            items={[
              "количество заявок",
              "конверсию по этапам",
              "источники лидов",
              "сделки без движения",
            ]}
          />

          <p>Если этого нет — CRM настроена неправильно.</p>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal className={styles.reveal} shownClassName={styles.revealShown} delayMs={60}>
        <ImagePlaceholder />
      </Reveal>

      <Reveal className={styles.reveal} shownClassName={styles.revealShown} delayMs={120}>
        <ArticleBlockWrapper>
          <ArticleSubtitle title="Шаг 8. Протестируйте путь клиента" />

          <h3>Сделайте тест:</h3>
          <ArticleList
            items={[
              "оставьте заявку",
              "пройдите весь путь клиента",
              "проверьте задачи",
              "проверьте уведомления",
            ]}
          />

          <p>Исправьте ошибки сразу — после запуска их становится больше.</p>
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal className={styles.reveal} shownClassName={styles.revealShown} delayMs={60}>
        <ImagePlaceholder />
      </Reveal>

      <Reveal className={styles.reveal} shownClassName={styles.revealShown} delayMs={80}>
        <ArticleBlockWrapper>
          <ArticleSubtitle title="Типичные ошибки новичков" />
          <ArticleList
            items={[
              "слишком сложная воронка",
              "нет автоматизации",
              "менеджеры работают в чатах, а не в CRM",
              "нет задач",
              "нет аналитики",
            ]}
          />
        </ArticleBlockWrapper>
      </Reveal>

      <Reveal className={styles.reveal} shownClassName={styles.revealShown} delayMs={60}>
        <ImagePlaceholder />
      </Reveal>

      <Reveal className={styles.reveal} shownClassName={styles.revealShown} delayMs={120}>
        <ArticleBlockWrapper>
          <ArticleSubtitle title="Итог" />

          <p>
            <strong>Быстрая настройка amoCRM</strong> — это:
          </p>

          <ArticleList
            items={[
              "логичная воронка",
              "подключённые источники",
              "базовая автоматизация",
              "контроль задач",
            ]}
          />

          <p>Этого достаточно, чтобы CRM начала работать и приносить результат.</p>

          <ArticleAccentBlock>
            <p>
              <strong>👉 Закажите аудит или быструю настройку amoCRM</strong> — покажем, как
              сделать CRM удобной с первого дня.
            </p>
          </ArticleAccentBlock>
        </ArticleBlockWrapper>
      </Reveal>
    </div>
  );
}
