export function Bottes({ data }) {
  console.log(data);
  return (
    <ol>
      <li> Name : {data.name} </li>
      <li> Brand : {data.brand} </li>
      <img src={data.image} alt="Img" />
      <li>Colour : {data.colour} </li>
    </ol>
  );
}
