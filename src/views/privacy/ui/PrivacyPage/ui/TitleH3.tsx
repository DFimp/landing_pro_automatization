export function TitleH3({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <h3 className="text-h4 font-semibold text-violet mb-3">
      {children}
    </h3>
  )
}