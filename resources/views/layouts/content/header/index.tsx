import * as CSS from './styles'
import Image from 'next/image'

const Header = ({ Title, Img, Tags, lang = 'en' }) => (
  <div className={CSS.Header}>
    <div className={CSS.HeaderContainer}>
      <div className={CSS.Tags}>
        {Tags.map((v: string, i: number) => (
          <button key={i}>{v}</button>
        ))}
      </div>
      <h1 style={{ fontFamily: lang === 'en' ? 'poppins' : 'athiti' }}>
        {Title}
      </h1>
    </div>
    <Image
      src={Img}
      alt={Title}
      layout='fill'
      objectFit='cover'
      quality={100}
      placeholder='blur'
      blurDataURL={
        'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
      }
    />
    <div className={CSS.HeaderFade}></div>
  </div>
)

export default Header
