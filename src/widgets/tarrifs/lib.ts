import {Tariff} from "@/widgets/tarrifs/models";

export const tariffs: Tariff[] = [
    {
        title: "Малый бизнес",
        price: "20 000р",
        features: [
            "для компаний до 5 сотрудников",
            "включено 6 часов работы",
            "бизнес-аналитика"
        ]
    },
    ...Array(2).fill({
        title: "Малый бизнес",
        price: "20 000р",
        features: [
            "для компаний до 5 сотрудников",
            "включено 6 часов работы",
            "бизнес-аналитика"
        ]
    })
];