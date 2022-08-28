const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const headings = [
  'Fungdy',
  'Baba',
  'Mummy',
  'Mama',
  'Yeye',
  'Porpor',
  'Gonggong',
  'Gorgor',
  'Jeje',
  'Kaykay',
  'Bengbeng',
  'Yummy',
];

function Card(props) {
  console.log('card' + props.index);
  return (
    <div className="card" onClick={() => props.handleOnClick({selIndex : props.index, clicked : Date.now()})} >
      <img src={images[`${props.index}.jpg`]} alt="cardimg" />
      <p>{headings[props.index]}</p>
    </div>
  );
}

export default Card;
