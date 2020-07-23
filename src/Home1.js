import React , { Component } from "react";
import fire from "./config/fire";
import firebase from 'firebase';

class Home1 extends Component{
constructor(props)
{
    super(props)
    this.state={
        
            NAME_ID:"",
            firstName: "",
            lastName: "",
            PhoneNumber: "",
            
    }

    this.handleSubmit=this.handleSubmit.bind(this)

    this.handleRetreive=this.handleRetreive.bind(this)




    }

    NAME_IDhandler = (event) => {
        this.setState({
            NAME_ID: event.target.value
        })
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
                         
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    phonehandler = (event) => {
        this.setState({
            phone: event.target.value
        })
    }

    handleRetreive = (event) =>{

        var users = document.getElementById("users").value;

        var userID = firebase.auth().currentUser.uid;

        

        firebase.database().ref('users/'+users).once('value').then(function (snapshot){
            


            var name_id1 = snapshot.val().NAME_ID;
            var fname1 = snapshot.val().NAME;
            var lname1 = snapshot.val().FAMILY;
            var cell1 = snapshot.val().CELL;
            var auth = snapshot.val().authID;


            if(userID = auth){
        
            document.getElementById("name_id2").innerHTML = name_id1;
            document.getElementById("fname2").innerHTML = fname1;
            document.getElementById("lname2").innerHTML = lname1;
            document.getElementById("cell2").innerHTML = cell1;
            document.getElementById("auth_id").innerHTML = auth;
            
            }
            
            else{
                alert(`${this.state.firstName} ${this.state.lastName}  errrorr  !!!!`)
                console.log(this.state);
            }

        })
        
        
                alert(`${this.state.firstName} ${this.state.lastName}  Retrieving Successfully  !!!!`)
                console.log(this.state);
                
             event.preventDefault()
    
             
             
    
    }
          
    
    
    handleSubmit = (event) => {

      var name_id = document.getElementById("NAME_ID").value;
      var fname = document.getElementById("NAME").value;
      var lname = document.getElementById("FAMILY").value;
      var cell = document.getElementById("CELL").value;
      

      var userID = firebase.auth().currentUser.uid;

      
        fire.database().ref('users/' + userID).set({
            
            NAME_ID: name_id,
            NAME: fname,
            FAMILY: lname,
            CELL: cell,
            authID : userID
            
            
        });

        
      
        alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully goneeeeee  !!!!`)
        console.log(this.state);
        this.setState({
            NAME_ID: "",
            firstName: "",
            lastName: "",
            phone: "",
            
        })
     event.preventDefault()
        
    
}
logout(){
    fire.auth().signOut();
}



render()
{
    return(
        <div>
           <h1>You are logged in !!!
               plz choose your option: logout, add or retreive data
           </h1>
            <button onClick={this.logout}>Logout</button>
            
            

            <form onSubmit={this.handleSubmit}>
                    <h1>User Registration </h1>
                    <label>NAME_ID:</label> <input type="text" id="NAME_ID" required="required" value={this.state.NAME_ID} onChange={this.NAME_IDhandler} placeholder="NAME ID..." /><br />
                    <label>FirstName :</label> <input type="text" id="NAME" required="required" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." /><br />
                    <label>LastName :</label> <input type="text" id="FAMILY"  required="required" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName..." /><br />
                    <label>Phone Number :</label> <input type="text" id="CELL" required="required" value={this.state.phone} onChange={this.phonehandler} placeholder="Phone Number..." /><br />
                    
                    <input type="submit" value="register data" />
                </form>



                <form onSubmit={this.handleRetreive}>

                <h1>user's data Retrieving </h1>
                <label>NAME_ID:</label>  <input type= "text" id= "users" required = "required"/><br/>
                    <p>Name id: <strong id = "name_id2"></strong></p>
                    <p>first name: <strong id = "fname2"></strong></p>
                    <p>last name: <strong id = "lname2"></strong></p>
                    <p>phone number: <strong id = "cell2"></strong></p>
                    <p>auth id: <strong id = "auth_id"></strong></p>
                    
                <input type="submit" value="retreive data" />
            
                </form>


    
        </div>
    )
}
}
export default Home1;