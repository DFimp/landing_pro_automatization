export function TitleH2({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <h2 className="text-h3 font-semibold text-blue mb-4">
      {children}
    </h2>
  )
}