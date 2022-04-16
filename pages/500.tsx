import { errorPage as ErrorPage } from 'pages/misc/components'

export default function Error404() {
  return <ErrorPage err='500' msg='Internal Server Error' />
}