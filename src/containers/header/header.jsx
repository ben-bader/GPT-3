import people from'../../assets/people.png'

import './header.css'
const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className="gpt3__header-content">
<h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-3 Open AI</h1>
        
        

        <div className="gpt3__header-container-content"> 
          <p>Yet bed any for travelling assistance indulgence unpleasing.
             Not thoughts all exercise blessing. 
             Indulgence way everything joy alteration boisterous the attachment.
             Party we years to order allow asked of.</p>
            
             
          </div> 
          <div className="gpt3__header-content__input">
              <input type="email" name="" id="" placeholder='your adress Email' />
             <button type="button">Get Stated</button></div>
          <div className="gpt3__header-content_people">
            <img src={people} alt="people" />
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
          
      </div>
     
     </div>
  )
}

export default Header
