export default function food({ name, istrue, food }) {
  return istrue ? (
    <li>
      {name} Take it Your {food}
    </li>
  ) : (
    <li> {name} You Complete Your Dinner</li>
  );
  //   return (
  // //     istrue &&
  // //     (<li>
  // //       {name} Take it Your {food}
  // //     </li>)(<li> {name} You Complete Your Dinner</li>)
  // //   );
  //   return istrue || (
  //     <li>
  //       {name} Take it Your {food}
  //     </li>
  //   )  (
  //     <li> {name} You Complete Your Dinner</li>
  //   );
}
