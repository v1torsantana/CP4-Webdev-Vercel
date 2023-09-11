import {} from 'react'
import './sobre.css'
import cbf from '../images/cbf.png'

function Sobre(){
  return(
    <>
    <div className='title_cont_sob'>
    <h1 id='title_sob'>Sobre</h1>
    </div>
    <div className='sob_cont'>
      <div id="img_cbf">
        <img src={cbf} alt="CBF_logo" id='cbf_logo' />
      </div>
      <p id='lorem_sob'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a turpis non massa tempor porttitor pellentesque tristique velit. Sed vitae arcu quis enim lacinia porta fermentum vitae massa. Donec vel elit felis. Pellentesque luctus felis at elit consequat, vel facilisis ex porta. Pellentesque sit amet turpis sapien. Quisque sagittis hendrerit feugiat. Mauris pellentesque metus dolor, at tincidunt ex pellentesque in. Fusce imperdiet tortor ac magna sollicitudin, a posuere ante tempor. Phasellus dignissim rutrum tortor, a placerat nibh vehicula in. Nulla eget ultrices nunc. Morbi vitae posuere orci. Morbi sed eleifend magna.

      Donec ornare pretium nisi, non volutpat turpis vulputate sed. Quisque vulputate ante velit, ac congue dui elementum non. Etiam ac justo eu augue convallis euismod sed eget leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur porttitor diam eget ipsum consectetur sagittis. Integer non accumsan lorem. Suspendisse ultricies fermentum sem eu efficitur. Duis eleifend mi at ex maximus auctor.

      Praesent faucibus felis elit, a ullamcorper tortor blandit non. Proin in blandit nulla, id egestas metus. Nulla ultricies ac urna quis gravida. Mauris laoreet mi sed aliquet imperdiet. Mauris malesuada nunc id massa egestas pretium. Nulla ex justo, bibendum id ullamcorper et, dignissim sit amet libero. Praesent sed neque interdum, semper justo quis, posuere elit. Donec suscipit quam quis tellus interdum feugiat. Nunc elementum, purus ac rhoncus feugiat, leo massa sollicitudin velit, quis aliquet nisl diam a nulla. Phasellus semper pellentesque augue, sit amet mattis nisi laoreet a. Nullam dictum lorem vel ante dapibus consequat. Integer fermentum, dolor sed semper placerat, lectus nunc sodales est, eget porttitor tellus mauris at tortor. Cras non odio interdum metus egestas tempor. Sed sit amet porta lectus.</p>
    </div>
    </>
  )
}

export default Sobre