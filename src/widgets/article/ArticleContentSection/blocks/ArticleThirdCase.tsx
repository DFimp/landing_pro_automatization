"use client"

import ArticleSubtitle from "../ui/ArticleSubtitle";
import ArticleBlockWrapper from "../ui/ArticleBlockWrapper";
import ArticleAccentBlock from "../ui/ArticleAccentBlock";
import ArticleImageWrapper from "../ui/ArticleImageWrapper";
import ArticleList from "../ui/ArticleList";
import Image from "next/image";
import { detectMobile } from '@/shared/utils/detectMobile';

export default function ArticleThirdCase() {
    const { isMobileView } = detectMobile()
    const workflowExample = [
        "Клиент пришёл, ему провели презентацию, но цена показалась слишком высокой.",
        "Менеджер отработал возражения, но до сделки не дошло. Контакт закрыли как «Нереализовано».",
        "Через полгода клиент передумал и снова оставил заявку на сайте."
    ]
    const correctWorkflow = [
        "«Успешно реализовано»",
        "«Закрыто и нереализовано»"
    ]
    return (
        <ArticleBlockWrapper>
        <ArticleSubtitle title="Кейс 3." subtitle="“Как не потерять клиента”"></ArticleSubtitle>
        <p>
            В виджете можно настроить блоки объединения сделок.
        </p>
        <ArticleImageWrapper>
            <Image
                src="/article_case_3_image_1.webp"
                alt="настройка блоков"
                width={1097}
                height={0}
            ></Image>
        </ArticleImageWrapper>
        <p>
            Это нужно для того, чтобы гибко управлять этапами воронки и выбирать те, на которых сделки<br/>
            будут объединяться. Однако здесь важно быть внимательным: если выбрать все этапы подряд,<br/>
            это может привести к нежелательным результатам.
        </p>
        <ArticleImageWrapper>
            <Image
                src="/article_case_3_image_2.webp"
                alt="не склеивание внутри блока"
                width={414}
                height={0}
            ></Image>
        </ArticleImageWrapper>
        <p>
            Например, некоторые компании включают в объединение даже этапы «Успешно<br/>
            реализовано» и «Закрыто и нереализовано».
        </p>
        <p>
            <span className="font-semibold sm:mb-0 block mb-[20px] sm:text-[20px] text-[16px]">Почему так делать не стоит?</span>
            Такой сценарий объединения может фактически «убить» повторные продажи. Представьте:
        </p>
        <ArticleList items={workflowExample}></ArticleList>
        {isMobileView ? (<>
        <ArticleAccentBlock>
            <p>
                В нормальной ситуации это должна быть новая сделка на этапе «Первичный контакт».<br/>
                Но если в настройках блока объединения выбран этап «Закрыто», виджет автоматически объединит новую заявку с закрытой сделкой. 
            </p>
        </ArticleAccentBlock>
        <p className="text-[#3760E7]">
            Менеджер просто не заметит нового обращения, а компания потеряет клиента и прибыль.
        </p>
        </>
        )
        : (<p>
            В нормальной ситуации это должна быть новая сделка на этапе «Первичный контакт». Но если в<br/>
            настройках блока объединения выбран этап «Закрыто», виджет автоматически объединит новую заявку<br/>
            с закрытой сделкой. Менеджер просто не заметит нового обращения, а компания потеряет клиента и<br/>
            прибыль.
        </p>)}
        <ArticleImageWrapper>
            <Image
                src="/article_case_3_image_3.webp"
                alt="урезанноене склеивание внутри блока"
                width={414}
                height={0}
            ></Image>
        </ArticleImageWrapper>
        <p>
            <span className="font-semibold sm:mb-0 block mb-[20px] sm:text-[20px] text-[16px]">Правильные настройки</span>
            Для большинства случаев в блок объединения не стоит включать этапы:
        </p>
        <ArticleList items={correctWorkflow}></ArticleList>
        <p>
            Так вы сохраните повторные продажи и не потеряете клиентов, которые возвращаются.
        </p>
        </ArticleBlockWrapper>
    )
}