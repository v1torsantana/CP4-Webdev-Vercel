import {} from 'react'
import './produtos.css'
import fiap from '../images/fiap.png'
import JS from '../images/JS.png'
import py from '../images/py.png'
import react from '../images/react.png'

function Produtos() {
  return (
    <>
      <div className='title_prod_cont'>
      <h1 id='prod_title'>Produtos</h1>
      </div>
      <div className='prod_cont'>
        <div className='cont_images'>
          <img src={fiap} alt="FIAP_logo" id='fiap_logo' />
          <p className='p_images'>FIAP</p>
        </div>
        <div className='cont_images'>
          <img src={JS} alt="JS_logo" id='js_logo' />
          <p className='p_images'>JavaScript</p>
        </div>
        <div className='cont_images'>
          <img src={py} alt="PY_logo" id='py_logo' />
          <p className='p_images'>Python</p>
        </div>
        <div className='cont_images'>
          <img src={react} alt="REACT_logo" id='react_logo' />
          <p className='p_images'>React</p>
        </div>
      </div>
    </>
  )
}

export default Produtos