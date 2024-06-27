
import Navbar from './required/Navbar'


import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
import { Box, Grid ,TextField, Typography} from '@mui/material';



function Akash(){
    return(
        <>
            <Navbar />


            <Grid container spacing={2}>
                <Grid item xs={12} sx={{'alignContent':'center' , 'textAlign':'center' , backgroundColor:'yellow'}}>
                
                <Typography>PUMP</Typography>
                </Grid>

                <Grid item xs={6} sx={{alignContent:'center' , padding:'2 2 2 2'}}>
                
                <Box>
                    <TextField id="outlined-basic" label="Tag #" variant="outlined"   />
                </Box>
                

                </Grid>

                

                <Grid item xs={6}>
                
                    <TextField id="outlined-basic" label="Project" variant="outlined" />
                </Grid>

                <Grid item xs={6}>
                
                    <TextField id="outlined-basic" label="Name" variant="outlined" />
                </Grid>

                <Grid item xs={6}>
                Document #
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />  
                </Grid>

                <Grid item xs={12} sx={{'alignContent':'center' , 'textAlign':'center' , backgroundColor:'yellow'}}>
                O P E R A T I N G    D A T A 
                </Grid>

                <Grid item xs={5} sx={{'alignContent':'center' , 'textAlign':'center' , backgroundColor:'blue'}} >
                L I Q U I D   P A R A M E T E R S
                </Grid>

                <Grid item xs={6} sx={{'alignContent':'center' , 'textAlign':'center' , backgroundColor:'yellow'}} mx={1}>
                P R O C E S S   P A R A M E T E R S
                </Grid>

                <Grid item xs={6}>
                Name
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </Grid>

                <Grid item xs={6}>
                Flow rate

                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                            'aria-label': 'weight',
                            }}
                        />
          
                    </FormControl>
                </Grid>

                <Grid item xs={6}>
                Density

                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                            'aria-label': 'weight',
                            }}
                        />
          
                    </FormControl>
                </Grid>

                <Grid item xs={6}>
                Head
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                            'aria-label': 'weight',
                            }}
                        />
          
                    </FormControl>
                </Grid>

                <Grid item xs={6}>
                Viscosity

                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                            'aria-label': 'weight',
                            }}
                        />
          
                    </FormControl>
                </Grid>

                <Grid item xs={6}>
                Operating T
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                            'aria-label': 'weight',
                            }}
                        />
          
                    </FormControl>
                </Grid>

                <Grid item xs={6}>
                pH
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </Grid>

                <Grid item xs={6}>
                NPSH required
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                            'aria-label': 'weight',
                            }}
                        />
          
                    </FormControl>
                </Grid>

                <Grid item xs={6}>
                Melting point
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                            'aria-label': 'weight',
                            }}
                        />
          
                    </FormControl>
                </Grid>

                <Grid item xs={6}>
                Jacketing fluid
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </Grid>

                <Grid item xs={6}>
                Boiling point @ atm press
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                            'aria-label': 'weight',
                            }}
                        />
          
                    </FormControl>
                </Grid>

                <Grid item xs={6}>
                Jacket pressure
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                            'aria-label': 'weight',
                            }}
                        />
          
                    </FormControl>
                </Grid>

                <Grid item xs={6}>
                Solids content
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                            'aria-label': 'weight',
                            }}
                        />
          
                    </FormControl>
                </Grid>

                <Grid item xs={6}>
                Jacket temperature
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                            'aria-label': 'weight',
                            }}
                        />
          
                    </FormControl>
                </Grid>



                <Grid item xs={6}>
                Type of solids
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </Grid>

                <Grid item xs={6}>
                Location
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </Grid>

                <Grid item xs={6}>
                Corrosivity of liquid
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </Grid>

                <Grid item xs={6}>
                Duty
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </Grid>

                <Grid item xs={6}>
                Toxicity
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </Grid>

                <Grid item xs={6}>
                Operation via VFD
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </Grid>



            </Grid>

           

        </>
        
    );
}

export default Akash;