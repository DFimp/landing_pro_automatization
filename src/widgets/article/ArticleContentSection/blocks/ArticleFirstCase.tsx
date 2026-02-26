import ArticleSubtitle from "../ui/ArticleSubtitle";
import ArticleBlockWrapper from "../ui/ArticleBlockWrapper";
import ArticleAccentBlock from "../ui/ArticleAccentBlock";
import ArticleImageWrapper from "../ui/ArticleImageWrapper";
import ArticleList from "../ui/ArticleList";
import Image from "next/image";
import ScrollReveal from "@/shared/ui/scrollReveal/ScrollReveal";

export default function ArticleFirstCase() {
    const companyObtainings = [
        "единое представление о клиенте во всех каналах",
        "чистую базу без дублей",
        "автоматизацию рутинной квалификации",
        "экономию времени менеджеров и ускорение обработки заявок"
    ]
    return (
        <ArticleBlockWrapper>
        <ScrollReveal as="div" variant="typeFast">
          <ArticleSubtitle title="Кейс 1." subtitle="“Как не терять время менеджеров”"></ArticleSubtitle>
        </ScrollReveal>
        <ScrollReveal as="p" variant="typeFast">
            Клиент оставляет 2 заявки. В первом случае пишет в мессенджер, во втором случае звонит.<br/><br/>
            <span className="sm:font-semibold">Создается 2 сделки.</span>
        </ScrollReveal>
        <ScrollReveal as="div" variant="dropZ">
          <ArticleImageWrapper>
            <Image
                src="/articles/WorkDuplicatingTransactions/case1/article_case_1_image_1.jpeg"
                alt="заявка из телеграм бота"
                width={462}
                height={0}
            ></Image>
            <Image
                src="/articles/WorkDuplicatingTransactions/case1/article_case_1_image_2.jpeg"
                alt="клиент позвонил на номер"
                width={462}
                height={0}
            ></Image>
          </ArticleImageWrapper>
        </ScrollReveal>
        <ScrollReveal as="div" variant="typeFast">
          <ArticleAccentBlock>
            <p>
                Распространённый кейс: клиент оставляет несколько заявок в разных каналах — на сайте,<br/>
                в мессенджерах, по телефону. В итоге в CRM появляются разные контакты и разные<br/>
                сделки, хотя это один и тот же человек.<span className="sm:font-semibold"> Главная проблема здесь — отсутствие «сущности<br/>объединения».</span>
            </p>
          </ArticleAccentBlock>
        </ScrollReveal>
        <ScrollReveal as="div" variant="typeFast">
          <h4 className="sm:text-[24px] text-[16px] font-semibold">Как решить задачу?</h4>
        </ScrollReveal>
        <ScrollReveal as="p" variant="typeFast">
            <span className="font-semibold">Ключ</span> — номер телефона. Это <span className="font-semibold">единственный стабильный идентификатор</span>, по которому<br/>
            можно связать все заявки между собой.
        </ScrollReveal>
        <ScrollReveal as="p" variant="typeFast">
            <span className="font-semibold">Но важный момент</span> — уточнять номер телефона вовсе не обязательно вручную. Мы<br/>
            можем подключить бота, который <span className="font-semibold">сам напишет</span> клиенту в мессенджере, <span className="font-semibold">уточнит номер</span><br/>
            телефона и <span className="font-semibold">автоматически распознает</span> его в сообщении. После этого бот добавит номер в<br/>
            карточку контакта, и все сделки будут объединены.<span className="text-[#3760E7] sm:inline sm:mt-0 mt-[20px] block">Менеджеру не придётся тратить<br/>
            время на рутинные действия.</span>
        </ScrollReveal>
        <ScrollReveal as="div" variant="typeFast">
          <p>Таким образом, компания получает:</p>
        </ScrollReveal>
        <ScrollReveal as="div" variant="typeFast">
          <ArticleList items={companyObtainings}></ArticleList>
        </ScrollReveal>
        </ArticleBlockWrapper>
    )
}
