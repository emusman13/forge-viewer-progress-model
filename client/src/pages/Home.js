import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, FormControl, Select, Dialog,
    MenuItem, DialogTitle, DialogContentText, DialogContent, DialogActions, InputLabel } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Viewer from './Viewer/Viewer';
import { getSelection } from './Viewer/ViewerFunctions';



class Home extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            open: false,
            Phase: "Constructed"
        };
    };

    handleClose = () => {
        this.setState({
            open: false
        })
    };

    handleChange = (event) => {
        this.setState({
            Phase: event.target.value
        })
    };

    handleClickOpen = () => {
        this.setState({
            open: true
        })

     };

    render(){

        const {Phase, open} = this.state;

        return(
            <div>
                
            <div className='viewer-home'>
                 <AppBar position="static" style={{marginBottom: 50}}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Usman The BIM Dev
                        </Typography>
                        <Typography display="block" variant="h9" component="div" sx={{ flexGrow: 1 }} color="#00FF00">
                            Green = Constructed
                        </Typography>
                        <Typography display="block" variant="h9" component="div" sx={{ flexGrow: 1 }} color="#FFCCCB">
                            Red = Designed but not constructed
                        </Typography>
                        <Button color="inherit" onClick={this.handleClickOpen}>Update</Button>
                    </Toolbar>
                </AppBar>
            <Viewer/>




            <Dialog
                    open={open}
                    onClose={this.handleClose}
                >
                <DialogTitle>Element Finish Update</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please select element finish value.
                    </DialogContentText>
                    <FormControl sx={{ m: 2, minWidth: 200 }} size="small">
                    <InputLabel>Element Finish</InputLabel>
                    <Select
                        value={Phase}
                        label="Eleement Finish"
                        onChange={this.handleChange}
                    >
                        <MenuItem value="Constructed">Constructed</MenuItem>
                        <MenuItem value="Designed">Designed</MenuItem>
                        
                    </Select>
                    </FormControl>

                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose}>Cancel</Button>
                    <Button onClick={() => getSelection(Phase)}>Save</Button>
                </DialogActions>
            </Dialog>

            
            

            </div>
          
            </div>
        )
        
    }
    
};

export default Home;