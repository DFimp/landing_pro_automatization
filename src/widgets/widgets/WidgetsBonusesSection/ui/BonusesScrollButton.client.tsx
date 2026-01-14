"use client";

export default function BonusesScrollButton() {
    const handleClick = () => {
        const TARGET_ID = "special_offer_calculator";
        const el = document.getElementById(TARGET_ID);
        if (!el) return;

        const y = el.getBoundingClientRect().top + window.pageYOffset - 200;

        window.scrollTo({
            top: Math.max(0, y),
            behavior: "smooth",
        });
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            className="
        inline-flex items-center justify-center
        px-8 py-4
        rounded-full
        bg-[#3F5FEA]
        text-white
        text-[16px] sm:text-[18px]
        font-semibold
        leading-none
        hover:bg-[#3554D6]
        transition-colors
      "
        >
            Ознакомиться с тарифом
        </button>
    );
}
