export default function Salat({ name, istrue, isvalue }) {
  if (isvalue > 0 && isvalue < 5) {
    if (istrue && isvalue === 5) {
      return (
        <p>
          {name} Today You Complete {isvalue}.{" "}
        </p>
      );
    } else if (istrue && isvalue === 4) {
      return (
        <p>
          {name} Today You Complete {isvalue}.{" "}
        </p>
      );
    } else if (istrue && isvalue === 3) {
      return (
        <p>
          {name} Today You Complete {isvalue}.{" "}
        </p>
      );
    } else if (istrue && isvalue === 2) {
      return (
        <p>
          {name} Today You Complete {isvalue}.{" "}
        </p>
      );
    } else if (istrue && isvalue === 1) {
      return (
        <p>
          {name} Today You Complete {isvalue}.{" "}
        </p>
      );
    }
  } else {
    return (
      <p>
        {name} Today You Complete {isvalue}.{" "}
      </p>
    );
  }
}
