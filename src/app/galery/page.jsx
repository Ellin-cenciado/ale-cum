import PictureComponent from './fotos/PictureComponent'
import images from './fotos/pictureData.js'

export default function Album() {
  return (
    <div className='flex p-[10vw] h-screen w-screen justify-between items-center'>
      <PictureComponent src={images}/>
    </div>
  );
}
