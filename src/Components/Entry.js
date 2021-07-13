import react, { Component } from 'react';
import './Entry.css';
import axios from 'axios';
class Entry extends Component {
    

    constructor() {
        super()
        this.state = {
            Entry: "",
            Margin: "",
            foreColor: "",
            bgColor: "",
            size: "",
            divcontainer: false

        }
        this.handleChange = this.handleChange.bind(this)
        
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
   
    
    render() {
        var handleshow = e => {{
            e.preventDefault();
            this.setState({divcontainer:!this.state.divcontainer});
        }}
        
        {
            var input = this.state.Entry;
            var Margin = this.state.Margin;
            var fcolor = this.state.foreColor;
            var bcolor = this.state.bgColor;
            var leng = this.state.size;
            var size = leng + "x" + leng;
            var urll="http://api.qrserver.com/v1/create-qr-code/?data=" + input + "&size=" + size + "&margin=" + Margin + "&color=" + fcolor + "&bgcolor=" + bcolor;
        }
        
        var download = e =>{
            e.preventDefault();
        
            axios({
                
                  url: urll,
                  method: 'GET',
                  responseType: 'blob'
            })
                  .then((response) => {
                        const url = window.URL
                              .createObjectURL(new Blob([response.data]));
                        const link = document.createElement('a');
                        link.href = url;
                        link.setAttribute('download', 'image.jpg');
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                  })
      }
        const x=this.state.divcontainer;
        return (
            <div className="form">
                <br /><br />
                <form>
                    <h1>Enter Data </h1>
                    <p><input type="text" name="Entry" placeholder="&nbsp;&nbsp;Enter data" onChange={this.handleChange} />
                    <br/><br/><font size="5" color="grey">[Text,&nbsp;URL,&nbsp;Number,&nbsp;Message]</font>
                   
                    </p>


                    <br />
                    <hr />
                    <div>
                        <h1><font face="Courier New"><b>CUSTOMIZE (OPTIONAL)</b></font></h1>
                        <br />
                        <div>
                            <h3>FOREGROUND COLOUR</h3>
                            <p>
                                <input type="radio" name="foreColor" value="0000ff" checked={this.state.foreColor == "0000ff"} onChange={this.handleChange} />&nbsp;Blue
                                <br /><input type="radio" name="foreColor" value="00ff00" checked={this.state.foreColor == "00ff00"} onChange={this.handleChange} />&nbsp;Green
                                <br /><input type="radio" name="foreColor" value="f00" checked={this.state.foreColor == "f00"} onChange={this.handleChange} />&nbsp;Red
                                <br /><input type="radio" name="foreColor" value="ffff00" checked={this.state.foreColor == "ffff00"} onChange={this.handleChange} />&nbsp;Yellow
                                <br /><input type="radio" name="foreColor" value={this.state.foptional} checked={this.state.foreColor == this.state.foptional} onChange={this.handleChange} />&nbsp;Other colour
                                &nbsp;<input type="text" name="foptional" placeholder="Colour Code without #" onChange={this.handleChange} />

                            </p></div>

                        <br />
                        <center>
                            <hr width="800" /></center>
                        <div>
                            <h3>BACKGROUND COLOUR</h3><p>
                                <input type="radio" name="bgColor" value="0000ff" checked={this.state.bgColor == "0000ff"} onChange={this.handleChange} />&nbsp;Blue
                                <br /><input type="radio" name="bgColor" value="00ff00" checked={this.state.bgColor == "00ff00"} onChange={this.handleChange} />&nbsp;Green
                                <br /><input type="radio" name="bgColor" value="f00" checked={this.state.bgColor == "f00"} onChange={this.handleChange} />&nbsp;Red
                                <br /><input type="radio" name="bgColor" value="ffff00" checked={this.state.bgColor == "ffff00"} onChange={this.handleChange} />&nbsp;Yellow
                                <br /><input type="radio" name="bgColor" value={this.state.boptional} checked={this.state.bgColor == this.state.boptional} onChange={this.handleChange} />&nbsp;Other colour
                                &nbsp;<input type="text" name="boptional" placeholder="Colour Code without #" onChange={this.handleChange} />


                            </p></div>

                        <br />
                        <center>
                            <hr width="800" /></center>
                        <div>
                            <h3>ADDITIONAL PROPERTIES</h3><p>
                                MARGIN: &nbsp;<input type="text" name="Margin" placeholder="&nbsp;&nbsp;Enter margin(0-50)" onChange={this.handleChange} />
                                <br /><br />SIZE: &nbsp;<input type="text" name="size" placeholder="&nbsp;&nbsp;Enter size(10-1000)" onChange={this.handleChange} />
                                <br />
                                <br/>
                                <hr />
                            </p></div>
                            <button className="button" onClick={handleshow}>{x?'NEW':'GENERATE'}</button>
                    </div>
                    <br/><br/>

                     { 
                     x &&(<div><img src={urll} /><br/><br/>
                     <button calssName="download" onClick={download}>DOWNLOAD</button>
                     </div>)
                     }
                </form>
                <br /> <br /><br />
                <br /> <br />
                <a target="_blank" href="mailto:ddnirvan@gmail.com">CONTACT THE DEVELOPER</a><br /><hr /><br />

            </div>
        );
    }
} 

export default Entry;
