import React , {useEffect} from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import aos from 'aos';
import "aos/dist/aos.css"
import { Button } from 'bootstrap';
import DrawerAppBar from './component/nav';


export default function App() {
  useEffect(()=>{
    aos.init({duration : 1000})
  },[])

  return (
    <>
    <DrawerAppBar/>
    <br />
    <br />
    <br />
    <div className='row  mt-5' data-aos="fade-up">
      <div className="col-lg-4 col-md-4 col-xs-6 mb-3">
    <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>       
      </MDBCardBody>
    </MDBCard></div>
    <div className="col-lg-4 col-md-4 col-xs-6 mb-3">
    <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard></div>
    <div className="col-lg-4 col-md-4 col-xs-6 mb-3" >
    <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard></div>
    </div>
    <div className='row  mt-5'data-aos="fade-down">
      <div className="col-lg-4 col-md-4 col-xs-6 mb-3">
    <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard></div>
    <div className="col-lg-4 col-md-4 col-xs-6 mb-3">
    <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard></div>
    <div className="col-lg-4 col-md-4 col-xs-6 mb-3" >
    <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard></div>
    </div> <div className='row  mt-5'data-aos="fade-right">
      <div className="col-lg-4 col-md-4 col-xs-6 mb-3">
    <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard></div>
    <div className="col-lg-4 col-md-4 col-xs-6 mb-3">
    <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard></div>
    <div className="col-lg-4 col-md-4 col-xs-6 mb-3" >
    <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard></div>
    </div> 
    <div className='row  mt-5'data-aos="zoom-in">
      <div className="col-lg-4 col-md-4 col-xs-6 mb-3">
    <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard></div>
    <div className="col-lg-4 col-md-4 col-xs-6 mb-3">
    <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard></div>
    <div className="col-lg-4 col-md-4 col-xs-6 mb-3" >
    <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard></div>
    
    </div>
    
    
    
    


    </>
  );
}