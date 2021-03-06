import React, { Component } from 'react'
import Container  from "react-bootstrap/Container";
import axios from 'axios';

export default class AddPanel extends Component {

    constructor(props){
        super(props);
        this.state={
            panelID:"",
            member1:"",
            member2:"",
            member3:"",
            panelType:""
        }
    }

    handleInputChange = (e) => {
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const {panelID,member1,member2,member3,panelType} = this.state;
        const data = {
            panelID:panelID,
            member1:member1,
            member2:member2,
            member3:member3,
            panelType:panelType
        }
        console.log(data);

        axios.post("http://localhost:5000/panel/add",data).then((res) => {
            if(res.data.success){
                alert("Panel Added Successfully!")
                this.setState(
                    {
                        panelID:"",
                        member1:"",
                        member2:"",
                        member3:"",
                        panelType:""
                    }
                )
            }
        })
    }

    render() {
        return (
            <Container>
                <br></br><br></br><h4>ADD NEW PANEL</h4><br></br><hr></hr><br></br>
            <form className="row g-3">
                    <div className="col-md-6">
                        <label className="form-label">Panel ID</label>
                        <input type="text" className="form-control" name="panelID" placeholder="Enter Panel ID"
                            value={this.state.panelID}
                            onChange={this.handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Member 01 Name</label>
                        <input type="text" className="form-control" name="member1" placeholder="Member 01 Name"
                            value={this.state.member1}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Member 02 Name</label>
                        <input type="text" className="form-control" name="member2" placeholder="Member 02 Name"
                            value={this.state.member2}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Member 03 Name</label>
                        <input type="text" className="form-control" name="member3" placeholder="Member 03 Name"
                            value={this.state.member3}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Panel Type</label>
                        <input type="text" className="form-control" name="panelType" placeholder="Panel Type"
                            value={this.state.panelType}
                            onChange={this.handleInputChange} />
                    </div>

                    <br/><br/>
                    <hr/>
                    <br></br><br></br>

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>ADD PANEL</button>
                    </div>
            </form>
            <br/><br/><br/><br/>
            </Container>
            
        )
    }
}