const handleFilter = (e) => {
  setAnimal(e.target.value);
  changeColor(e.target.value);
};

const changeColor = (animal) => {
  if (animal === "cat") {
    setFilterClass("catFilter");
  }
  if (animal === "cow") {
    setFilterClass("cowFilter");
  }
  if (animal === "whale") {
    setFilterClass("whaleFilter");
  }
  if (animal === "bee") {
    setFilterClass("beeFilter");
  }
};

<Button
  className="choiceBtn"
  variant="transparent"
  onClick={handleFilter}
  checked={animal === "cat"}
  value="cat"
>
  Cat <img className="cat" alt="" src={catImage} />
</Button>;

//   const [image, setImage] = useState(null);

//   const backToDefImg = () => {
//     setImage(null);
//   };
{
  /* <div className="row">
  <Button
    className="col resetBtn"
    variant="info"
    size="lg"
    onClick={backToDefImg}
    value="default"
  >
    Come back, Pablita!
  </Button>
</div>; */
}
