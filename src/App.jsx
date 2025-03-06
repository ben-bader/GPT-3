
import Footer from './containers/footer/footer';
import Features from './containers/features/features';
import Header from './containers/header/header';
import Blog from './containers/blog/blog';
import Possibility from './containers/possibility/possibility';
import Cta from './components/cta/cta';
import Brand from './components/brand/brand';
import Navbar from './components/navbar/navbar';


import './App.css';
const App = () => {
  return (
    <>
  
      <div className="gradient__bg">
        <Navbar/>
        <Header />
      </div>
      <Brand/>
      <Features/>
      <Possibility/>
      <Cta/>
      
      <Blog/>
      <Footer/>
    </>
  )
}

export default App

