import React from 'react'
import axios from 'axios'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBBox, MDBIcon, MDBBadge, MDBContainer   } from 'mdbreact';

export default class User extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        img:'',
        user:'',
        bio:'',
        name:'',
        location:''

      }
    }
  
    componentDidMount() {
      axios.get(`https://api.github.com/users/dualshockmaster`)
        .then(res => {
          console.log(res.data)
          this.setState({ 
            img: res.data.avatar_url,
            user: res.data.login,
            bio:res.data.bio,
            name: res.data.name,
            location: res.data.location
           });
        })
    }
   
    render() {
      const { user,bio,name,location, img } = this.state
      return (
        <div>
            <MDBBox justifyContent="center" display="flex mt-5" >
                <MDBCard style={{ width: "22rem" }} className="text-center">
                  <MDBCardImage className="img-fluid" src={img}waves />
                  <MDBCardBody>
                    <MDBCardTitle>
                        <MDBBadge pill color="light">{user}</MDBBadge>
                    </MDBCardTitle>
                    <h5>{ name }</h5>
                    <h6><MDBIcon icon="map-marker-alt" className="red-text" /> { location }</h6>
                    <hr />
                    <MDBCardText>
                    <h5>Biografia</h5>
                     {bio}
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
            </MDBBox>
        </div>
      )
    }
  }


    

