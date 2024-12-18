import LogoDiamond from './LogoDiamond'
import LogoText from './LogoText'

function Logo() {
  return (
    <div className="relative w-96 h-96 flex items-center justify-center">
      <LogoDiamond />
      <LogoText />
    </div>
  )
}

export default Logo