export const StarshipCard = ({ starship }) => {
  return (
    <div className="starship">
      <div className="name">{starship.name}</div>
      <div className="info">Model: {starship.model}</div>
      <div className="info">Manufacturer: {starship.manufacturer}</div>
    </div>
  );
};
