export default function Usersval({ val }) {
  console.log(val);
  const { userId, id, title } = val;
  return (
    <div>
      <ul>
        <li>Name : {val.userId} </li>
        <li>id : {val.id} </li>
        <li>title : {val.title} </li>
      </ul>
    </div>
  );
}
