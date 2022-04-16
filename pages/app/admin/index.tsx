import Layout from 'views/app/layouts'

const Dashboard = () => {
  return <div>Welcome to Admin Dashboard</div>
}

const App = () => {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  )
}

App.auth = true

export default App