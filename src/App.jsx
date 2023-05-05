import './App.css'
import img from './assets/image-qr-code.png'

function App() {
 

  return (
    <>
      <section className=" w-screen h-screen flex justify-center items-center bg-[#d5e1ef] ">
        <div className=" bg-white w-[320px] shadow-md rounded-lg">
          <img src={img} alt="qr code" className=" self-center rounded-3xl p-4"  />
          <h1 className="font-bold text-xl text-center px-6 text-[#131e31]"> Improve your front-end skills by building projects</h1>
          <p className=" text-[#95989e] text-center pb-6 px-6 pt-4">Scan the QR code ti visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </section>
    </>
  )
}

export default App
