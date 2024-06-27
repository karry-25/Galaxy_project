import * as XLSX from 'xlsx/xlsx.mjs';
import * as Excel from 'exceljs/dist/exceljs';
import pump from './xlsxformats/pumpformat.xlsx';
import axios from 'axios';
import { Buffer } from 'buffer';
import fileDownload from 'js-file-download';

import Navbar from './required/Navbar'
import { useState } from 'react';


import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import { Box, Grid, TextField, Typography, InputLabel, FormControlLabel, Radio, FormLabel, RadioGroup, Stack, Input, Button } from '@mui/material';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { importExcel, submitForm } from './services/api';


const initialValues = {
    Tag: "",
    Project: "",
    MainName: "",
    Name: "",
    FlowRate: "",
    Density: "",
    Head: "",
    Viscosity: "",
    OperatingT: "",
    Ph: "",
    NPSHRequired: "",
    MeltingPoint: "",
    JacketingFluid: "",
    BoilingPointAtAtmPress: "",
    JacketPressure: "",
    SolidsContent: "",
    JacketTemperature: "",
    TypeOfSolids: "",
    Location: "",
    CorrosivityOfLiquid: "",
    Duty: "",
    Toxicity: "",
    OperationViaVFD: "",
    PumpDirectionOfRotation: "",
    NoLoadCurrent: "",
    MechanicalSeal: "",
    WaterTrialCurrent: "",
    FlushingPlan: "",
    MaterialTrialCurrent: "",
    APIConnections: "",
    Efficiency: "",
    OilLevel: "",
    Temperature: "",
    SealPotPressure: "",
    MotorDirectionOfRotation: "",
    NoiseLevel: "",
    VibPumpDEA: "",
    VibPumpDEH: "",
    VibPumpDEV: "",
    VibMotorDEA: "",
    VibMotorDEH: "",
    VibMotorDEV: "",
    VibPumpNDEA: "",
    VibPumpNDEH: "",
    VibPumpNDEV: "",
    VibMotorNDEA: "",
    VibMotorNDEH: "",
    VibMotorNDEV: "",
    SerPumpDEA: "",
    SerPumpDEH: "",
    SerPumpDEV: "",
    SerMotorDEA: "",
    SerMotorDEH: "",
    SerMotorDEV: "",
    SerPumpNDEA: "",
    SerPumpNDEH: "",
    SerPumpNDEV: "",
    SerMotorNDEA: "",
    SerMotorNDEH: "",
    SerMotorNDEV: "",
    Note1: "",
    Note2: "",
    Note3: "",
    Note4: "",
    Note5: "",
    Satisfaction: "",


}

// const fileData={
//     excelFile:"",
// }
function Form() {


    const [Data, setData] = useState(initialValues);
    const { Tag, Project, MainName, Name } = Data;
    //console.log(Tag);
    const onValueChange = (e) => {
        setData({ ...Data, [e.target.name]: e.target.value });
        console.log(e.target.value)

    }

    const submitData = async (e) => {
        e.preventDefault();
        console.log(Data);
        const workbook = new Excel.Workbook();
        // await workbook.xlsx.readFile('../public/xlsxformats/pumpformat.xlsx');
        // const buffer = await pumpformat.arrayBuffer();
        // await workboo1.xlsx.readFile(buffer);
        // fetch(pump).then(async (r)=>{ await r.arrayBuffer() }).then(async (data)=>{
        // var buffer;
        // await workbook.xlsx.read('http://localhost:3000/pumpformat.xlsx');
        const response = await axios.get('http://localhost:3000/pumpformat.xlsx',  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "base64")

        console.log(buffer);
        await workbook.xlsx.load(buffer);
        console.log(workbook);
        
        var worksheet = workbook.worksheets[0];
        console.log(worksheet);
        worksheet.getCell("C5").value = Data.Tag;
        worksheet.getCell("G5").value = Data.Project
        worksheet.getCell("C6").value = Data.MainName
        worksheet.getCell("C10").value = Data.Name
        worksheet.getCell("H10").value = Data.FlowRate
        worksheet.getCell("C11").value = Data.Density
        worksheet.getCell("H11").value = Data.Head
        worksheet.getCell("C12").value = Data.Viscosity
        worksheet.getCell("H12").value = Data.OperatingT
        worksheet.getCell("C13").value = Data.Ph
        worksheet.getCell("H13").value = Data.NPSHRequired
        worksheet.getCell("C14").value = Data.MeltingPoint
        worksheet.getCell("H14").value = Data.JacketingFluid
        worksheet.getCell("C15").value = Data.BoilingPointAtAtmPress
        worksheet.getCell("H15").value = Data.JacketPressure
        worksheet.getCell("C16").value = Data.SolidsContent
        worksheet.getCell("H16").value = Data.JacketTemperature
        worksheet.getCell("C17").value = Data.TypeOfSolids
        worksheet.getCell("H17").value = Data.Location
        worksheet.getCell("C18").value = Data.CorrosivityOfLiquid
        worksheet.getCell("H18").value = Data.Duty
        worksheet.getCell("C19").value = Data.Toxicity
        worksheet.getCell("H19").value = Data.OperationViaVFD
        worksheet.getCell("C22").value = Data.PumpDirectionOfRotation
        worksheet.getCell("H22").value = Data.NoLoadCurrent
        worksheet.getCell("C23").value = Data.MechanicalSeal
        worksheet.getCell("H23").value = Data.WaterTrialCurrent
        worksheet.getCell("C24").value = Data.FlushingPlan
        worksheet.getCell("H24").value = Data.MaterialTrialCurrent
        worksheet.getCell("C25").value = Data.APIConnections
        worksheet.getCell("H25").value = Data.Efficiency
        worksheet.getCell("C26").value = Data.OilLevel
        worksheet.getCell("H26").value = Data.Temperature
        worksheet.getCell("C27").value = Data.SealPotPressure
        worksheet.getCell("H27").value = Data.MotorDirectionOfRotation
        worksheet.getCell("C28").value = Data.NoiseLevel
        worksheet.getCell("B35").value = Data.VibPumpDEA
        worksheet.getCell("C35").value = Data.VibPumpDEH
        worksheet.getCell("D35").value = Data.VibPumpDEV
        worksheet.getCell("G35").value = Data.VibMotorDEA
        worksheet.getCell("H35").value = Data.VibMotorDEH
        worksheet.getCell("I35").value = Data.VibMotorDEV
        worksheet.getCell("B40").value = Data.VibPumpNDEA
        worksheet.getCell("C40").value = Data.VibPumpNDEH
        worksheet.getCell("D40").value = Data.VibPumpNDEV
        worksheet.getCell("G40").value = Data.VibMotorNDEA
        worksheet.getCell("H40").value = Data.VibMotorNDEH
        worksheet.getCell("I40").value = Data.VibMotorNDEV
        worksheet.getCell("B47").value = Data.SerPumpDEA
        worksheet.getCell("C47").value = Data.SerPumpDEH
        worksheet.getCell("D47").value = Data.SerPumpDEV
        worksheet.getCell("G47").value = Data.SerMotorDEA
        worksheet.getCell("H47").value = Data.SerMotorDEH
        worksheet.getCell("I47").value = Data.SerMotorDEV
        worksheet.getCell("B52").value = Data.SerPumpNDEA
        worksheet.getCell("C52").value = Data.SerPumpNDEH
        worksheet.getCell("D52").value = Data.SerPumpNDEV;
        worksheet.getCell("G52").value = Data.SerMotorNDEA
        worksheet.getCell("H52").value = Data.SerMotorNDEH
        worksheet.getCell("I52").value = Data.SerMotorNDEV
        worksheet.getCell("B55").value = Data.Note1
        worksheet.getCell("B56").value = Data.Note2
        worksheet.getCell("B57").value = Data.Note3
        worksheet.getCell("B58").value = Data.Note4
        worksheet.getCell("B59").value = Data.Note5
        worksheet.getCell("F61").value = Data.Satisfaction
        // worksheet.getCell("C5"").value=Data.Tag
        // worksheet.getCell("G5"").value=Data.Project     
        // worksheet.getCell("C6"").value=Data.MainName   
        // worksheet.getCell("C10").value=Data.Name        
        // worksheet.getCell("H10").value=Data.FlowRate    
        // worksheet.getCell("C11").value=Data.Density     
        // worksheet.getCell("H11").value=Data.Head        
        // worksheet.getCell("C12").value=Data.Viscosity   
        // worksheet.getCell("H12").value=Data.OperatingT  
        // worksheet.getCell("C13").value=Data.Ph
        // worksheet.getCell("H13").value=Data.NPSHRequired
        // worksheet.getCell("C14").value=Data.MeltingPoint
        // worksheet.getCell("H14").value=Data.JacketingFluid
        // worksheet.getCell("C15").value=Data.BoilingPointAtAtmPress
        // worksheet.getCell("H15").value=Data.JacketPressure
        // worksheet.getCell("C16").value=Data.SolidsContent
        // worksheet.getCell("H16").value=Data.JacketTemperature
        // worksheet.getCell("C17").value=Data.TypeOfSolids
        // worksheet.getCell("H17").value=Data.Location
        // worksheet.getCell("C18").value=Data.CorrosivityOfLiquid
        // worksheet.getCell("H18").value=Data.Duty
        // worksheet.getCell("C19").value=Data.Toxicity
        // worksheet.getCell("H19").value=Data.OperationViaVFD
        // worksheet.getCell("C22").value=Data.PumpDirectionOfRotation
        // worksheet.getCell("H22").value=Data.NoLoadCurrent
        // worksheet.getCell("C23").value=Data.MechanicalSeal
        // worksheet.getCell("H23").value=Data.WaterTrialCurrent
        // worksheet.getCell("C24").value=Data.FlushingPlan
        // worksheet.getCell("H24").value=Data.MaterialTrialCurrent
        // worksheet.getCell("C25").value=Data.APIConnections
        // worksheet.getCell("H25").value=Data.Efficiency
        // worksheet.getCell("C26").value=Data.OilLevel
        // worksheet.getCell("H26").value=Data. Temperature
        // worksheet.getCell("C27").value=Data.SealPotPressure
        // worksheet.getCell("H27").value=Data.MotorDirectionOfRotation
        // worksheet.getCell("C28").value=Data.NoiseLevel
        // worksheet.getCell("B35").value=Data.VibPumpDEA
        // worksheet.getCell("C35").value=Data.VibPumpDEH
        // worksheet.getCell("D35").value=Data.VibPumpDEV
        // worksheet.getCell("G35").value=Data.VibMotorDEA
        // worksheet.getCell("H35").value=Data.VibMotorDEH
        // worksheet.getCell("I35").value=Data.VibMotorDEV
        // worksheet.getCell("B40").value=Data.VibPumpNDEA
        // worksheet.getCell("C40").value=Data.VibPumpNDEH
        // worksheet.getCell("D40").value=Data.VibPumpNDEV
        // worksheet.getCell("G40").value=Data.VibMotorNDEA
        // worksheet.getCell("H40").value=Data.VibMotorNDEH
        // worksheet.getCell("I40").value=Data.VibMotorNDEV
        // worksheet.getCell("B47").value=Data.SerPumpDEA
        // worksheet.getCell("C47").value=Data.SerPumpDEH
        // worksheet.getCell("D47").value=Data.SerPumpDEV
        // worksheet.getCell("G47").value=Data.SerMotorDEA
        // worksheet.getCell("H47").value=Data.SerMotorDEH
        // worksheet.getCell("I47").value=Data.SerMotorDEV
        // worksheet.getCell("B52").value=Data.SerPumpNDEA
        // worksheet.getCell("C52").value=Data.SerPumpNDEH
        // worksheet.getCell("D52").value=Data.SerPumpNDEV;
        // worksheet.getCell("G52").value=Data.SerMotorNDEA
        // worksheet.getCell("H52").value=Data.SerMotorNDEH
        // worksheet.getCell("I52").value=Data.SerMotorNDEV
        // worksheet.getCell("B55").value=Data.Note1
        // worksheet.getCell("B56").value=Data.Note2
        // worksheet.getCell("B57").value=Data.Note3
        // worksheet.getCell("B58").value=Data.Note4
        // worksheet.getCell("B59").value=Data.Note5
        // worksheet.getCell("F61").value=Data.Satisfaction
        const finalbuffer = await workbook.xlsx.writeBuffer();
        fileDownload(finalbuffer,'pump.xlsx');
    }


    const [Date, setDate] = useState(null);

    const [File, setFile] = useState(null);

    const AddFile = async (e) => {

    }

    const fileChange = async (e) => {
        // setFile({ ...File, [e.target.name]: e.target.files[0] });
        const file = e.target.files[0];
        // we need to get the raw bytes
        const buffer = await file.arrayBuffer();
        console.log(typeof buffer)
        var workbook = XLSX.read(buffer);
        var dqsheet = workbook.Sheets[workbook.SheetNames[0]];
        console.log(dqsheet);
        var data = {
            Tag: dqsheet.C5.v,
            Project: dqsheet.G5.v,
            MainName: dqsheet.C6.v,
            Name: dqsheet.C11.v,
            Density: dqsheet.C12.v,
            Viscosity: dqsheet.C13.v,
            Ph: dqsheet.C14.v,
            MeltingPoint: dqsheet.C15.v,
            BoilingPointAtAtmPress: dqsheet.C16.v,
            SolidsContent: dqsheet.C17.v,
            TypeOfSolids: dqsheet.C18.v,
            CorrosivityOfLiquid: dqsheet.C19.v,
            Toxicity: dqsheet.C20.v
        }

        // console.log(workbook.Sheets[workbook.SheetNames[0]].C5.v);
        // console.log(workbook.Sheets[workbook.SheetNames[0]].G5.v);
        console.log(data);

        setData((previousInputs) => ({ ...previousInputs, Tag: data.Tag }));
        setData((previousInputs) => ({ ...previousInputs, Project: data.Project }));
        setData((previousInputs) => ({ ...previousInputs, MainName: data.MainName }));
        setData((previousInputs) => ({ ...previousInputs, Name: data.Name }));
        setData((previousInputs) => ({ ...previousInputs, Density: data.Density }));
        setData((previousInputs) => ({ ...previousInputs, Viscosity: data.Viscosity }));
        setData((previousInputs) => ({ ...previousInputs, Ph: data.Ph }));
        setData((previousInputs) => ({ ...previousInputs, MeltingPoint: data.MeltingPoint }));
        setData((previousInputs) => ({ ...previousInputs, BoilingPointAtAtmPress: data.BoilingPointAtAtmPress }))
        setData((previousInputs) => ({ ...previousInputs, SolidsContent: data.SolidsContent }))
        setData((previousInputs) => ({ ...previousInputs, TypeOfSolids: data.TypeOfSolids }));
        setData((previousInputs) => ({ ...previousInputs, CorrosivityOfLiquid: data.CorrosivityOfLiquid }));
        setData((previousInputs) => ({ ...previousInputs, Toxicity: data.Toxicity }));
    }

    return (
        <>
            <Navbar />



            <Grid container spacing={2} sx={{ padding: '2px 4px 2px 4px' }}>



                <Grid item xs={5} sx={{ 'alignContent': 'center', 'textAlign': 'center', }} m={2}>

                    <Button variant="contained" component="label">
                        Import DQ sheet
                        <Input
                            style={{
                                display: "none"
                            }}
                            accept=".xlsx"  // specify the file type that you wanted to accept
                            id="choose-file"
                            type="file"
                            name="excelFile"
                            onChange={(e) => fileChange(e)}
                            inputProps={{ accept: 'file/xlsx' }}
                        />
                    </Button>

                </Grid>

                <Grid item xs={1} sx={{ 'alignContent': 'center', 'textAlign': 'center', }} m={2}>

                    <Button variant='outlined' color='success' type="submit" onClick={(e) => AddFile(e)}>Import</Button>
                </Grid>

                <Grid item xs={12} sx={{ 'alignContent': 'center', 'textAlign': 'center', backgroundColor: 'yellow', border: 5, fontWeight: 'bold' }}>

                    <Typography>PUMP</Typography>
                </Grid>

                <Grid item xs={6} sx={{ alignContent: 'center', padding: '2 2 2 2' }}>

                    <Box>
                        <TextField id="outlined-basic" label="Tag #" variant="outlined" value={Data.Tag} name='Tag' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '30ch' }} />
                    </Box>


                </Grid>



                <Grid item xs={6}>

                    <TextField id="outlined-basic" label="Project" variant="outlined" value={Data.Project} name='Project' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '30ch' }} />
                </Grid>

                <Grid item xs={6}>

                    <TextField id="outlined-basic" label="Name" variant="outlined" value={Data.MainName} name='MainName' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '30ch' }} />
                </Grid>

                <Grid item xs={6}>

                    <TextField id="outlined-basic" label="Document #" variant="outlined" value={Data.Document} name='Document' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '30ch' }} />
                </Grid>

                <Grid item xs={12} sx={{ 'alignContent': 'center', 'textAlign': 'center', backgroundColor: 'yellow', border: 2, fontWeight: 'bold' }}>
                    O P E R A T I N G    D A T A
                </Grid>

                <Grid item xs={6} sx={{ 'alignContent': 'center', 'textAlign': 'center', backgroundColor: '#90caf9', border: 1, fontWeight: 'bold' }} >
                    L I Q U I D   P A R A M E T E R S
                </Grid>

                <Grid item xs={6} sx={{ 'alignContent': 'center', 'textAlign': 'center', backgroundColor: '#90caf9', border: 1, fontWeight: 'bold' }} >
                    P R O C E S S   P A R A M E T E R S
                </Grid>

                <Grid item xs={6}>

                    <TextField id="outlined-basic" label="Name" variant="outlined" value={Data.Name} name='Name' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '30ch' }} />
                </Grid>

                <Grid item xs={6}>

                    <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">Flow rate</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            name='FlowRate'
                            onChange={(e) => onValueChange(e)}
                            label="With normal TextField"
                            endAdornment={<InputAdornment position="start" >cum/h</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />

                    </FormControl>

                </Grid>

                <Grid item xs={6}>


                    <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">Density</InputLabel>

                        <OutlinedInput
                            id="outlined-adornment-weight"
                            name='Density'
                            value={Data.Density}
                            onChange={(e) => onValueChange(e)}
                            label="With normal TextField"
                            endAdornment={<InputAdornment position="start">kg/cum</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />

                    </FormControl>
                </Grid>

                <Grid item xs={6}>

                    <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">Head</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            name='Head'
                            onChange={(e) => onValueChange(e)}
                            label="With normal TextField"
                            endAdornment={<InputAdornment position="end">m</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />

                    </FormControl>
                </Grid>

                <Grid item xs={6}>


                    <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">Viscosity</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            name='Viscosity'
                            value={Data.Viscosity}
                            onChange={(e) => onValueChange(e)}
                            label="With normal TextField"
                            endAdornment={<InputAdornment position="end">cp</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />

                    </FormControl>
                </Grid>

                <Grid item xs={6}>

                    <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">Operating T</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            name='OperatingT'
                            onChange={(e) => onValueChange(e)}
                            label="With normal TextField"
                            endAdornment={<InputAdornment position="end">degC</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />

                    </FormControl>
                </Grid>

                <Grid item xs={6}>

                    <TextField id="outlined-basic" label="pH" variant="outlined" value={Data.Ph} name='Ph' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '30ch' }} />
                </Grid>

                <Grid item xs={6}>

                    <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">NPSH required</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            name='NPSHRequired'
                            onChange={(e) => onValueChange(e)}
                            label="With normal TextField"
                            endAdornment={<InputAdornment position="end">m</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />

                    </FormControl>
                </Grid>

                <Grid item xs={6}>

                    <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">Melting point</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            name='MeltingPoint'
                            value={Data.MeltingPoint}
                            onChange={(e) => onValueChange(e)}
                            label="With normal TextField"
                            endAdornment={<InputAdornment position="end">degC</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />

                    </FormControl>
                </Grid>

                <Grid item xs={6}>

                    <TextField id="outlined-basic" label="Jacketing fluid" variant="outlined" name='JacketingFluid' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '30ch' }} />
                </Grid>

                <Grid item xs={6}>

                    <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">Boiling point @ atm press</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            name='BoilingPointAtAtmPress'
                            value={Data.BoilingPointAtAtmPress}
                            onChange={(e) => onValueChange(e)}
                            label="With normal TextField yess"
                            endAdornment={<InputAdornment position="end">degC</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />

                    </FormControl>
                </Grid>

                <Grid item xs={6}>

                    <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">Jacket pressure</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            name='JacketPressure'
                            onChange={(e) => onValueChange(e)}
                            label="With normal TextField"
                            endAdornment={<InputAdornment position="end">bar</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />

                    </FormControl>
                </Grid>

                <Grid item xs={6}>

                    <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">Solids content</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            name='SolidsContent'
                            value={Data.SolidsContent}
                            onChange={(e) => onValueChange(e)}
                            label="With normal TextField"
                            endAdornment={<InputAdornment position="end">%</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />

                    </FormControl>
                </Grid>

                <Grid item xs={6}>

                    <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">Jacket temperature</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            name='JacketTemperature'
                            onChange={(e) => onValueChange(e)}
                            label="With normal TextField"
                            endAdornment={<InputAdornment position="end">degC</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />

                    </FormControl>
                </Grid>



                <Grid item xs={6}>

                    <TextField id="outlined-basic" label="Type of solids" variant="outlined" value={Data.TypeOfSolids} name='TypeOfSolids' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '30ch' }} />
                </Grid>

                <Grid item xs={6}>

                    <TextField id="outlined-basic" label="Location" variant="outlined" name='Location' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '30ch' }} />
                </Grid>

                <Grid item xs={6}>

                    <TextField id="outlined-basic" label="OuCorrosivity of liquidtlined" variant="outlined" value={Data.CorrosivityOfLiquid} name='CorrosivityOfLiquid' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '30ch' }} />
                </Grid>

                <Grid item xs={6}>

                    <TextField id="outlined-basic" label="Duty" variant="outlined" name='Duty' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '30ch' }} />
                </Grid>

                <Grid item xs={6}>

                    <TextField id="outlined-basic" label="Toxicity" variant="outlined" value={Data.Toxicity} name='Toxicity' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '30ch' }} />
                </Grid>

                <Grid item xs={6}>

                    <TextField id="outlined-basic" label="Operation via VFD" variant="outlined" name='OperationViaVFD' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '30ch' }} />
                </Grid>

                <Grid item xs={12} sx={{ 'alignContent': 'center', 'textAlign': 'center', backgroundColor: 'yellow', border: 2, fontWeight: 'bold' }}>
                    R U N N I N G    P A R A M E T E R S
                </Grid>

                <Grid item xs={6} sx={{ 'alignContent': 'center', 'textAlign': 'center', backgroundColor: '#90caf9', border: 1, fontWeight: 'bold' }} >
                    P U M P
                </Grid>

                <Grid item xs={6} sx={{ 'alignContent': 'center', 'textAlign': 'center', backgroundColor: '#90caf9', border: 1, fontWeight: 'bold' }} >
                    M O T O R
                </Grid>

                <Grid item xs={6}>

                    <TextField id="outlined-basic" label="Direction of rotation" variant="outlined" name='PumpDirectionOfRotation' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '30ch' }} />
                </Grid>

                <Grid item xs={6}>

                    <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">No load current</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            name='NoLoadCurrent'
                            onChange={(e) => onValueChange(e)}
                            label="With normal TextField"
                            endAdornment={<InputAdornment position="end">amp</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />

                    </FormControl>
                </Grid>

                <Grid item xs={6}>

                    <TextField id="outlined-basic" label="Mechanical seal" variant="outlined" name='MechanicalSeal' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '30ch' }} />
                </Grid>

                <Grid item xs={6}>

                    <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">Water trial current</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            name='WaterTrialCurrent'
                            onChange={(e) => onValueChange(e)}
                            label="With normal TextField"
                            endAdornment={<InputAdornment position="end">amp</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />

                    </FormControl>
                </Grid>

                <Grid item xs={6}>

                    <TextField id="outlined-basic" label="Flushing plan" variant="outlined" name='FlushingPlan' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '30ch' }} />
                </Grid>

                <Grid item xs={6}>

                    <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">Material trial current</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            name='MaterialTrialCurrent'
                            onChange={(e) => onValueChange(e)}
                            label="With normal TextField"
                            endAdornment={<InputAdornment position="end">amp</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />

                    </FormControl>
                </Grid>

                <Grid item xs={6}>

                    <TextField id="outlined-basic" label="API connections" variant="outlined" name='APIConnections' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '30ch' }} />
                </Grid>

                <Grid item xs={6}>

                    <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">Efficiency</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            onChange={(e) => onValueChange(e)}
                            name='Efficiency'
                            label="With normal TextField"
                            endAdornment={<InputAdornment position="end">%</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />

                    </FormControl>
                </Grid>

                <Grid item xs={6}>

                    <TextField id="outlined-basic" label="Oil level" variant="outlined" name='OilLevel' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '30ch' }} />
                </Grid>

                <Grid item xs={6}>

                    <TextField id="outlined-basic" label="Temperature" variant="outlined" name='Temperature' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '30ch' }} />
                </Grid>

                <Grid item xs={6}>

                    <TextField id="outlined-basic" label="Seal pot pressure" variant="outlined" name='SealPotPressure' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '30ch' }} />
                </Grid>

                <Grid item xs={6}>

                    <TextField id="outlined-basic" label="Direction of rotation" variant="outlined" name='MotorDirectionOfRotation' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '30ch' }} />
                </Grid>

                <Grid item xs={6}>

                    <TextField id="outlined-basic" label="Noise level" variant="outlined" name='NoiseLevel' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '30ch' }} />
                </Grid>

                <Grid item xs={12} sx={{ 'alignContent': 'center', 'textAlign': 'center', backgroundColor: 'yellow', border: 2, fontWeight: 'bold' }}>
                    V I B R A T I O N    R E A D I N G
                </Grid>

                <Grid item xs={12} sx={{ 'alignContent': 'center', 'textAlign': 'center', backgroundColor: '#c5cae9', border: 2, fontWeight: 'bold' }}>
                    WATER TRIAL
                </Grid>

                <Grid item xs={6} sx={{ 'alignContent': 'center', 'textAlign': 'center', backgroundColor: '#90caf9', border: 1, fontWeight: 'bold' }} >
                    P U M P
                </Grid>

                <Grid item xs={6} sx={{ 'alignContent': 'center', 'textAlign': 'center', backgroundColor: '#90caf9', border: 1, fontWeight: 'bold' }} >
                    M O T O R
                </Grid>

                <Grid item xs={2}>

                    <Typography variant='h4' mt={1}>DE</Typography>
                    <Typography variant='h6' mt={1}>mm/sec</Typography>


                </Grid>

                <Grid item xs={4}>

                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <TextField id="outlined-basic" label="A" variant="outlined" name='VibPumpDEA' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '10ch' }} />
                        </Grid>

                        <Grid item xs={4}>
                            <TextField id="outlined-basic" label="H" variant="outlined" name='VibPumpDEH' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '10ch' }} />
                        </Grid>

                        <Grid item xs={4}>
                            <TextField id="outlined-basic" label="V" variant="outlined" name='VibPumpDEV' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '10ch' }} />
                        </Grid>

                    </Grid>
                </Grid>

                <Grid item xs={2}>

                    <Typography variant='h4' mt={1}>DE</Typography>
                    <Typography variant='h6' mt={1}>mm/sec</Typography>


                </Grid>

                <Grid item xs={4}>

                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <TextField id="outlined-basic" label="A" variant="outlined" name='VibMotorDEA' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '10ch' }} />
                        </Grid>

                        <Grid item xs={4}>
                            <TextField id="outlined-basic" label="H" variant="outlined" name='VibMotorDEH' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '10ch' }} />
                        </Grid>

                        <Grid item xs={4}>
                            <TextField id="outlined-basic" label="V" variant="outlined" name='VibMotorDEV' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '10ch' }} />
                        </Grid>

                    </Grid>
                </Grid>

                <Grid item xs={2}>

                    <Typography variant='h4' mt={1}>NDE</Typography>
                    <Typography variant='h6' mt={1}>mm/sec</Typography>


                </Grid>

                <Grid item xs={4}>

                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <TextField id="outlined-basic" label="A" variant="outlined" name='VibPumpNDEA' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '10ch' }} />
                        </Grid>

                        <Grid item xs={4}>
                            <TextField id="outlined-basic" label="H" variant="outlined" name='VibPumpNDEH' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '10ch' }} />
                        </Grid>

                        <Grid item xs={4}>
                            <TextField id="outlined-basic" label="V" variant="outlined" name='VibPumpNDEV' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '10ch' }} />
                        </Grid>

                    </Grid>
                </Grid>

                <Grid item xs={2}>

                    <Typography variant='h4' mt={1}>NDE</Typography>
                    <Typography variant='h6' mt={1}>mm/sec</Typography>


                </Grid>

                <Grid item xs={4}>

                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <TextField id="outlined-basic" label="A" variant="outlined" name='VibMotorNDEA' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '10ch' }} />
                        </Grid>

                        <Grid item xs={4}>
                            <TextField id="outlined-basic" label="H" variant="outlined" name='VibMotorNDEH' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '10ch' }} />
                        </Grid>

                        <Grid item xs={4}>
                            <TextField id="outlined-basic" label="V" variant="outlined" name='VibMotorNDEV' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '10ch' }} />
                        </Grid>

                    </Grid>
                </Grid>

                <Grid item xs={12} sx={{ 'alignContent': 'center', 'textAlign': 'center', backgroundColor: '#c5cae9', border: 2, fontWeight: 'bold' }}>
                    SERVICE FLUID TRIAL
                </Grid>

                <Grid item xs={6} sx={{ 'alignContent': 'center', 'textAlign': 'center', backgroundColor: '#90caf9', border: 1, fontWeight: 'bold' }} >
                    P U M P
                </Grid>

                <Grid item xs={6} sx={{ 'alignContent': 'center', 'textAlign': 'center', backgroundColor: '#90caf9', border: 1, fontWeight: 'bold' }} >
                    M O T O R
                </Grid>

                <Grid item xs={2}>

                    <Typography variant='h4' mt={1}>DE</Typography>
                    <Typography variant='h6' mt={1}>mm/sec</Typography>


                </Grid>

                <Grid item xs={4}>

                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <TextField id="outlined-basic" label="A" variant="outlined" name='SerPumpDEA' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '10ch' }} />
                        </Grid>

                        <Grid item xs={4}>
                            <TextField id="outlined-basic" label="H" variant="outlined" name='SerPumpDEH' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '10ch' }} />
                        </Grid>

                        <Grid item xs={4}>
                            <TextField id="outlined-basic" label="V" variant="outlined" name='SerPumpDEV' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '10ch' }} />
                        </Grid>

                    </Grid>
                </Grid>

                <Grid item xs={2}>

                    <Typography variant='h4' mt={1}>DE</Typography>
                    <Typography variant='h6' mt={1}>mm/sec</Typography>


                </Grid>

                <Grid item xs={4}>

                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <TextField id="outlined-basic" label="A" variant="outlined" name='SerMotorDEA' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '10ch' }} />
                        </Grid>

                        <Grid item xs={4}>
                            <TextField id="outlined-basic" label="H" variant="outlined" name='SerMotorDEH' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '10ch' }} />
                        </Grid>

                        <Grid item xs={4}>
                            <TextField id="outlined-basic" label="V" variant="outlined" name='SerMotorDEV' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '10ch' }} />
                        </Grid>

                    </Grid>
                </Grid>

                <Grid item xs={2}>

                    <Typography variant='h4' mt={1}>NDE</Typography>
                    <Typography variant='h6' mt={1}>mm/sec</Typography>


                </Grid>

                <Grid item xs={4}>

                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <TextField id="outlined-basic" label="A" variant="outlined" name='SerPumpNDEA' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '10ch' }} />
                        </Grid>

                        <Grid item xs={4}>
                            <TextField id="outlined-basic" label="H" variant="outlined" name='SerPumpNDEH' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '10ch' }} />
                        </Grid>

                        <Grid item xs={4}>
                            <TextField id="outlined-basic" label="V" variant="outlined" name='SerPumpNDEV' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '10ch' }} />
                        </Grid>

                    </Grid>
                </Grid>

                <Grid item xs={2}>

                    <Typography variant='h4' mt={1}>NDE</Typography>
                    <Typography variant='h6' mt={1}>mm/sec</Typography>


                </Grid>

                <Grid item xs={4}>

                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <TextField id="outlined-basic" label="A" variant="outlined" name='SerMotorNDEA' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '10ch' }} />
                        </Grid>

                        <Grid item xs={4}>
                            <TextField id="outlined-basic" label="H" variant="outlined" name='SerMotorNDEH' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '10ch' }} />
                        </Grid>

                        <Grid item xs={4}>
                            <TextField id="outlined-basic" label="V" variant="outlined" name='SerMotorNDEV' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '10ch' }} />
                        </Grid>

                    </Grid>
                </Grid>


                <Grid item xs={12} sx={{ 'alignContent': 'center', 'textAlign': 'center', backgroundColor: 'yellow', border: 2, fontWeight: 'bold' }}>
                    R E M A R K S
                </Grid>

                <Grid item xs={3}>
                    <Typography variant='h5' mt={1}>NOTE 1</Typography>
                </Grid>

                <Grid item xs={9}>
                    <TextField id="outlined-basic" label="" variant="outlined" name='Note1' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '130ch' }} />
                </Grid>

                <Grid item xs={3}>
                    <Typography variant='h5' mt={1}>NOTE 2</Typography>
                </Grid>

                <Grid item xs={9}>
                    <TextField id="outlined-basic" label="" variant="outlined" name='Note2' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '130ch' }} />
                </Grid>

                <Grid item xs={3}>
                    <Typography variant='h5' mt={1}>NOTE 3</Typography>
                </Grid>
                <Grid item xs={9}>

                    <TextField id="outlined-basic" label="" variant="outlined" name='Note3' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '130ch' }} />
                </Grid>

                <Grid item xs={3}>
                    <Typography variant='h5' mt={1}>NOTE 4</Typography>
                </Grid>

                <Grid item xs={9}>
                    <TextField id="outlined-basic" label="" variant="outlined" name='Note4' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '130ch' }} />
                </Grid>

                <Grid item xs={3}>
                    <Typography variant='h5' mt={1}>NOTE 5</Typography>
                </Grid>
                <Grid item xs={9}>
                    <TextField id="outlined-basic" label="" variant="outlined" name='Note5' onChange={(e) => onValueChange(e)} sx={{ m: 1, width: '130ch' }} />
                </Grid>

                <Grid item xs={2}>
                    <Typography variant='h5' mt={1}>The equipment is operating to satisfaction</Typography>

                </Grid >

                <Grid item xs={4}>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"

                        >
                            <Stack direction='row'>
                                <FormControlLabel value="yes" control={<Radio />} label="Yes" name='Satisfaction' onChange={(e) => onValueChange(e)} />
                                <FormControlLabel value="no" control={<Radio />} label="No" name='Satisfaction' onChange={(e) => onValueChange(e)} />
                            </Stack>

                        </RadioGroup>
                    </FormControl>
                </Grid>

                <Grid item xs={1}>
                    <Typography variant='h5' mt={1}>Date :</Typography>
                </Grid>


                <Grid item xs={3}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker value={Date} onChange={(e) => setDate(e)} />
                    </LocalizationProvider>
                </Grid>

                <Grid item xs={2}>

                </Grid>

                <Grid item xs={12} my={5}>

                </Grid>

                <Grid item xs={4}>
                    <Typography variant='h5' mt={1}>Mechanical </Typography>
                </Grid>

                <Grid item xs={4}>
                    <Typography variant='h5' mt={1}>Electrical </Typography>
                </Grid>

                <Grid item xs={4}>
                    <Typography variant='h5' mt={1}>NPT </Typography>
                </Grid>

                <Grid item xs={12} sx={{ 'alignContent': 'center', 'textAlign': 'center' }} m={5}>
                    <Button variant='contained' color="success" onClick={(e) => submitData(e)}>Submit</Button>
                </Grid>








            </Grid>



        </>

    );
}

export default Form;