function PictureComponent({ src }) {
 
  

  return src.path.map((titles, index) => (
    <div>
      <h1>{src.titles[index]}</h1>
      <img className="hover:w-[50vw] min-w-10 hover:p-0 p-4 w-[10vw]" key={index} src={src.path[index]} />
      <h2>{src.description[index]}</h2>
    </div>
  ));
}
export default PictureComponent;
