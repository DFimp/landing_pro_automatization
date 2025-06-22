interface IPoint {
  title: string,
  description: string,
}

export const Point: React.FC<IPoint> = ({title, description}) => {
  return (
    <p className="text-h7 text-gray leading-relaxed mb-3">
      <strong>{title}</strong>
      {description}
    </p>
  );
}
