export default function eventhandle() {
  const fun1 = () => {
    alert("BtnClicked-1");
  };
  function data() {
    alert("Btn-clicked-2");
  }
  const fun3 = (id) => {
    const val = 5 + id;
    alert(val);
  };
  return (
    <div className="btn-size">
      <li>
        <div>
          <button onClick={fun1}> Click - 1 </button>
        </div>
        <br />
        <div>
          <button onClick={data}> Click - 2 </button>
        </div>
        <br />
        <div>
          <button onClick={() => fun3(19)}> Click - 3 </button>
        </div>
        <br />
        <div>
          <button> Click - 4 </button>
        </div>
        <br />
        <div>
          <button> Click - 5 </button>
        </div>
        <br />
      </li>
    </div>
  );
}
