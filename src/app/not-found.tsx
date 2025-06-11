export default function Page() {
  return (
    <div className="w-full h-[80vh] flex flex-col items-center justify-center">
      <h1>404 — Страница не найдена</h1>
      <p>Извините, но запрашиваемая вами страница не существует.</p>
    </div>
  );
}

export const metadata = {
  title: "Страница не найдена",
};
