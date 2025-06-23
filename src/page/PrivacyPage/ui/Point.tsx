interface IPoint {
  title: string,
  description: string,
  className?: string,
}

export const Point: React.FC<IPoint> = ({title, description, className=""}) => {
  return (
    <p className={"text-h7 text-gray leading-relaxed mb-3" + " " + className}>
      <strong>{title}</strong>
      {description}
    </p>
  );
}
