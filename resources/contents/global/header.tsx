import Head from 'next/head'

const titleDefault = 'IJN App Boilerplate'
const url = ''
const descriptionDefault = ''
const author = 'Jirayu Ninlapun'
const coverImgDefault = '/'

const Header = ({
  title = titleDefault,
  description = descriptionDefault,
  coverImg = coverImgDefault,
}) => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='language' content='english' />
        <meta httpEquiv='content-type' content='text/html' />
        <meta name='author' content={author} />
        <meta name='designer' content={author} />
        <meta name='publisher' content={author} />
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta
          name='keywords'
          content='TheIceJI, Jirayu Ninlapun, Web Developer'
        />
        <meta name='robots' content='index,follow' />
        <meta name='distribution' content='web' />
        <meta name='og:title' content={title} />
        <meta name='og:type' content='website' />
        <meta name='og:url' content={url} />
        <meta name='og:image' content={coverImg} />
        <meta name='og:site_name' content={title} />
        <meta name='og:description' content={description} />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:url' content={url} />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={coverImg} />
        <meta name='twitter:creator' content='@theiceji' />
        {/* PWA */}
        <meta name='application-name' content='TheIceJi' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='TheIceJi' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-TileColor' content='#FFC900' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content='#1A1A1A' />
        <link rel='icon' href='/logo_white.svg' />
        <link rel='apple-touch-icon' href='/logo_white.svg' />
        <link rel='apple-touch-startup-image' href='/logo_white.svg' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='mask-icon' color='#000000' href='/logo_white.svg' />
        <link rel='shortcut icon' href='/logo_white.svg' />
        <meta name='HandheldFriendly' content='true' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Prompt:300,400,500,700&display=swap'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
    </>
  )
}

export default Header
