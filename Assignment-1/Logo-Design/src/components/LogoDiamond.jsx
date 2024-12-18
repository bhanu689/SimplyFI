function LogoDiamond() {
  return (
    <div className="absolute w-64 h-64 transform -rotate-45">
      {/* Top bar - Green */}
      <div className="absolute top-0 left-0 w-full h-[1.7rem] bg-gradient-to-r from-[#98FB98] to-[#98FB98] mix-blend-multiply" />
      
      {/* Right bar - Orange/Salmon */}
      <div className="absolute top-0 right-0 w-[1.7rem] h-full bg-gradient-to-b from-[#f28053] to-[#f28053] mix-blend-multiply" />
      
      {/* Left bar - Blue */}
      <div className="absolute top-0 left-0 w-[1.7rem] h-full bg-gradient-to-b from-[#5e9eb7] to-[#5e9eb7] mix-blend-multiply" />
      
      {/* Bottom bar - Gray/Beige */}
      <div className="absolute bottom-0 left-0 w-full h-[1.7rem] bg-gradient-to-r from-[#D3D3D3] to-[#D3D3D3] mix-blend-multiply" />
    </div>
  )
}

export default LogoDiamond