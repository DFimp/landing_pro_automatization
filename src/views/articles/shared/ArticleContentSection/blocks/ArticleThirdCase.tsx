"use client"

import ArticleSubtitle from "../ui/ArticleSubtitle";
import ArticleBlockWrapper from "../ui/ArticleBlockWrapper";
import ArticleAccentBlock from "../ui/ArticleAccentBlock";
import ArticleImageWrapper from "../ui/ArticleImageWrapper";
import ArticleList from "../ui/ArticleList";
import Image from "next/image";
import { detectMobile } from '@/shared/utils/detectMobile';
import ScrollReveal from "@/shared/ui/scrollReveal/ScrollReveal";

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
        <ScrollReveal as="div" variant="typeFast">
          <ArticleSubtitle title="Кейс 3." subtitle="“Как не потерять клиента”"></ArticleSubtitle>
        </ScrollReveal>
        <ScrollReveal as="p" variant="typeFast">
            В виджете можно настроить блоки объединения сделок.
        </ScrollReveal>
        <ScrollReveal as="div" variant="dropZ">
          <ArticleImageWrapper>
            <Image
                src="/articles/WorkDuplicatingTransactions/case3/article_case_3_image_1.jpeg"
                alt="настройка блоков"
                width={1097}
                height={0}
            ></Image>
          </ArticleImageWrapper>
        </ScrollReveal>
        <ScrollReveal as="p" variant="typeFast">
            Это нужно для того, чтобы гибко управлять этапами воронки и выбирать те, на которых сделки<br/>
            будут объединяться. Однако здесь важно быть внимательным: если выбрать все этапы подряд,<br/>
            это может привести к нежелательным результатам.
        </ScrollReveal>
        <ScrollReveal as="div" variant="dropZ">
          <ArticleImageWrapper>
            <Image
                src="/articles/WorkDuplicatingTransactions/case3/article_case_3_image_2.jpeg"
                alt="не склеивание внутри блока"
                width={414}
                height={0}
            ></Image>
          </ArticleImageWrapper>
        </ScrollReveal>
        <ScrollReveal as="p" variant="typeFast">
            Например, некоторые компании включают в объединение даже этапы «Успешно<br/>
            реализовано» и «Закрыто и нереализовано».
        </ScrollReveal>
        <ScrollReveal as="p" variant="typeFast">
            <span className="font-semibold sm:mb-0 block mb-[20px] sm:text-[20px] text-[16px]">Почему так делать не стоит?</span>
            Такой сценарий объединения может фактически «убить» повторные продажи. Представьте:
        </ScrollReveal>
        <ScrollReveal as="div" variant="typeFast">
          <ArticleList items={workflowExample}></ArticleList>
        </ScrollReveal>
        {isMobileView ? (<>
        <ScrollReveal as="div" variant="typeFast">
          <ArticleAccentBlock>
            <p>
                В нормальной ситуации это должна быть новая сделка на этапе «Первичный контакт».<br/>
                Но если в настройках блока объединения выбран этап «Закрыто», виджет автоматически объединит новую заявку с закрытой сделкой. 
            </p>
          </ArticleAccentBlock>
        </ScrollReveal>
        <ScrollReveal as="p" variant="typeFast" className="text-[#3760E7]">
            Менеджер просто не заметит нового обращения, а компания потеряет клиента и прибыль.
        </ScrollReveal>
        </>
        )
        : (<ScrollReveal as="p" variant="typeFast">
            В нормальной ситуации это должна быть новая сделка на этапе «Первичный контакт». Но если в<br/>
            настройках блока объединения выбран этап «Закрыто», виджет автоматически объединит новую заявку<br/>
            с закрытой сделкой. Менеджер просто не заметит нового обращения, а компания потеряет клиента и<br/>
            прибыль.
        </ScrollReveal>)}
        <ScrollReveal as="div" variant="dropZ">
          <ArticleImageWrapper>
            <Image
                src="/articles/WorkDuplicatingTransactions/case3/article_case_3_image_3.jpeg"
                alt="урезанноене склеивание внутри блока"
                width={414}
                height={0}
            ></Image>
          </ArticleImageWrapper>
        </ScrollReveal>
        <ScrollReveal as="p" variant="typeFast">
            <span className="font-semibold sm:mb-0 block mb-[20px] sm:text-[20px] text-[16px]">Правильные настройки</span>
            Для большинства случаев в блок объединения не стоит включать этапы:
        </ScrollReveal>
        <ScrollReveal as="div" variant="typeFast">
          <ArticleList items={correctWorkflow}></ArticleList>
        </ScrollReveal>
        <ScrollReveal as="p" variant="typeFast">
            Так вы сохраните повторные продажи и не потеряете клиентов, которые возвращаются.
        </ScrollReveal>
        </ArticleBlockWrapper>
    )
}
