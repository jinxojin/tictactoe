const tilesCollection = document.getElementsByClassName("tile");
const tiles = [...tilesCollection];

let isPlayerX = true;

const checkHorizontal = () => {
  const tileArr = [0, 3, 6];

  for (let i = 0; i < 3; i++) {
    const tempArr = [];

    for (let j = 0; j < 3; j++) {
      tempArr.push(tiles[tileArr[i] + j].textContent);
    }

    if (
      tempArr[0] !== "" &&
      tempArr[0] === tempArr[1] &&
      tempArr[0] === tempArr[2]
    ) {
      alert("horizontal");
      return true;
    }
  }
  return false;
};

const checkVertical = () => {
  for (let i = 0; i < 3; i++) {
    const tempArr = [];

    for (let j = 0; j < 9; j += 3) {
      tempArr.push(tiles[i + j].textContent);
    }

    console.log(tempArr);

    if (
      tempArr[0] !== "" &&
      tempArr[0] === tempArr[1] &&
      tempArr[0] === tempArr[2]
    ) {
      alert("vertical");
      return true;
    }
  }
  return false;
};

const draw = (event) => {
  const el = event.target;
  if (el.textContent.length === 0) {
    if (isPlayerX) {
      el.textContent = "x";
      isPlayerX = !isPlayerX;
    } else {
      el.textContent = "o";
      isPlayerX = !isPlayerX;
    }
    checkHorizontal();
    checkVertical();
  }
};

tiles.forEach((el, index) => {
  el.addEventListener("click", draw);
});
