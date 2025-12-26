import ArticleSubtitle from "../ui/ArticleSubtitle";
import ArticleBlockWrapper from "../ui/ArticleBlockWrapper";
import ArticleList from "../ui/ArticleList";
import ArticleImageWrapper from "../ui/ArticleImageWrapper";
import Image from "next/image";

export default function ArticleSecondCase() {
    const neededDuplicates = [
        "клиент хочет приобрести несколько разных товаров и оставляет несколько заявок;",
        "покупатель оформляет новый заказ спустя время, хотя контакт у него тот же;",
        "компания работает по разным направлениям, и каждая заявка должна идти отдельной сделкой."
    ]
    const wrongExamples = [
        "первая сделка находится на этапе «Принимают решение», и менеджер уже работает с клиентом;",
        "вторая сделка остаётся на этапе «Первичный контакт», и её ещё предстоит обработать."
    ]
    const correctExamples = [
        "контакты клиента объединяются, чтобы мы видели единую историю взаимодействия;",
        "сделки остаются отдельными, ведь у клиента может быть несколько разных интересов или покупок."
    ]
    return (
        <ArticleBlockWrapper>
        <ArticleSubtitle title="Кейс 2." subtitle="“Как не потерять клиента”"></ArticleSubtitle>
        <p>
            Иногда <span className="font-semibold">дубли</span> в воронке действительно <span className="font-semibold">нужны</span>. Звучит необычно, но такие ситуации<br/>
            встречаются часто. Например:
        </p>
        <ArticleList items={neededDuplicates}></ArticleList>
        <ArticleImageWrapper>
            <Image
                    src="/article_case_2_image_1.png"
                    alt="клиент с двумя разными услугами"
                    width={1097}
                    height={100}
                ></Image>
        </ArticleImageWrapper>
        <p>
            На скриншоте видно, что один и тот же клиент обратился сразу за двумя разными услугами.<br/>
            В первом случае его интересует <span className="font-semibold">«Консультация по виджету»</span>, во втором — <span className="font-semibold">«Автоматизация»</span>.
        </p>
        <p>
            При этом ситуация в CRM складывается следующим образом:
        </p>
        <ArticleList items={wrongExamples}></ArticleList>
        <p>
            Если такие сделки объединить, мы рискуем потерять одно из обращений клиента. А это значит —<br/>
            потерять потенциальные деньги.
        </p>
        <p>
            <span className="font-semibold">Правильный подход заключается в другом:</span>
        </p>
        <ArticleList items={correctExamples}></ArticleList>
        <p>
            Так компания получает прозрачную картину: мы знаем, что это один клиент, но одновременно<br/>
            учитываем все его потребности. Это повышает вероятность успешных продаж и позволяет<br/>
            работать максимально эффективно.
        </p>
        <h4 className="sm:font-normal font-[600]! text-[24px]">Как настроить объединение правильно?</h4>
        <p>
            Необходимо в блоке “Основные настройки” выбрать поле “Услуга”, при такой настройке, если в сделке<br/>
            поле одинаковое - сделки объединятся, если разное значение поля - сделки не склеятся.
        </p>
        <ArticleImageWrapper>
            <Image
                    src="/article_case_2_image_2.png"
                    alt="основные настройки контакта"
                    width={735}
                    height={0}
                ></Image>
        </ArticleImageWrapper>
        </ArticleBlockWrapper>
    )
}