const express = require('express');
const port = 7000;
const XLSX = require('xlsx');
const cors = require('cors');
const Excel= require('exceljs');
const bodyParser = require('body-parser');
const app = express();
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() })
const formidable = require('formidable');

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(fileUpload());

app.use(cors(
    {
        origin:'http://localhost:3000',
        optionsSuccessStatus: 200
    }
));

app.set("views", "./views");
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html');

app.use(express.static(__dirname + 'outputxlsx'));

app.get('/', (req, res) => {
    res.render("index.html");
})

app.get('/getxlsx', (req, res) => {
    //sending download file
    res.download(__dirname+'/outputxlsx/pump.xlsx','pump.xlsx')
})

app.post('/submitForm', async (req, res) => {
    var formdata=req.body;
    const workbook= new Excel.Workbook();
    await workbook.xlsx.readFile('./xlsxformats/pumpformat.xlsx');
    var worksheet = workbook.worksheets[0];
    //reading workbook;
    // var workbook = XLSX.readFile('./xlsxformats/pump.xls');
    // XLSX.writeFile(workbook,'./outputxlsx/check.xls');
    // console.log(workbook);
    // console.log(workbook);
    // var worksheet = workbook.Sheets[workbook.SheetNames[0]];
    worksheet.getCell("C5").value=formdata.Tag;
    worksheet.getCell("G5").value=formdata.Project     
    worksheet.getCell("C6").value=formdata.MainName   
    worksheet.getCell("C10").value=formdata.Name        
    worksheet.getCell("H10").value=formdata.FlowRate    
    worksheet.getCell("C11").value=formdata.Density     
    worksheet.getCell("H11").value=formdata.Head        
    worksheet.getCell("C12").value=formdata.Viscosity   
    worksheet.getCell("H12").value=formdata.OperatingT  
    worksheet.getCell("C13").value=formdata.Ph
    worksheet.getCell("H13").value=formdata.NPSHRequired
    worksheet.getCell("C14").value=formdata.MeltingPoint
    worksheet.getCell("H14").value=formdata.JacketingFluid
    worksheet.getCell("C15").value=formdata.BoilingPointAtAtmPress
    worksheet.getCell("H15").value=formdata.JacketPressure
    worksheet.getCell("C16").value=formdata.SolidsContent
    worksheet.getCell("H16").value=formdata.JacketTemperature
    worksheet.getCell("C17").value=formdata.TypeOfSolids
    worksheet.getCell("H17").value=formdata.Location
    worksheet.getCell("C18").value=formdata.CorrosivityOfLiquid
    worksheet.getCell("H18").value=formdata.Duty
    worksheet.getCell("C19").value=formdata.Toxicity
    worksheet.getCell("H19").value=formdata.OperationViaVFD
    worksheet.getCell("C22").value=formdata.PumpDirectionOfRotation
    worksheet.getCell("H22").value=formdata.NoLoadCurrent
    worksheet.getCell("C23").value=formdata.MechanicalSeal
    worksheet.getCell("H23").value=formdata.WaterTrialCurrent
    worksheet.getCell("C24").value=formdata.FlushingPlan
    worksheet.getCell("H24").value=formdata.MaterialTrialCurrent
    worksheet.getCell("C25").value=formdata.APIConnections
    worksheet.getCell("H25").value=formdata.Efficiency
    worksheet.getCell("C26").value=formdata.OilLevel
    worksheet.getCell("H26").value=formdata. Temperature
    worksheet.getCell("C27").value=formdata.SealPotPressure
    worksheet.getCell("H27").value=formdata.MotorDirectionOfRotation
    worksheet.getCell("C28").value=formdata.NoiseLevel
    worksheet.getCell("B35").value=formdata.VibPumpDEA
    worksheet.getCell("C35").value=formdata.VibPumpDEH
    worksheet.getCell("D35").value=formdata.VibPumpDEV
    worksheet.getCell("G35").value=formdata.VibMotorDEA
    worksheet.getCell("H35").value=formdata.VibMotorDEH
    worksheet.getCell("I35").value=formdata.VibMotorDEV
    worksheet.getCell("B40").value=formdata.VibPumpNDEA
    worksheet.getCell("C40").value=formdata.VibPumpNDEH
    worksheet.getCell("D40").value=formdata.VibPumpNDEV
    worksheet.getCell("G40").value=formdata.VibMotorNDEA
    worksheet.getCell("H40").value=formdata.VibMotorNDEH
    worksheet.getCell("I40").value=formdata.VibMotorNDEV
    worksheet.getCell("B47").value=formdata.SerPumpDEA
    worksheet.getCell("C47").value=formdata.SerPumpDEH
    worksheet.getCell("D47").value=formdata.SerPumpDEV
    worksheet.getCell("G47").value=formdata.SerMotorDEA
    worksheet.getCell("H47").value=formdata.SerMotorDEH
    worksheet.getCell("I47").value=formdata.SerMotorDEV
    worksheet.getCell("B52").value=formdata.SerPumpNDEA
    worksheet.getCell("C52").value=formdata.SerPumpNDEH
    worksheet.getCell("D52").value=formdata.SerPumpNDEV;
    worksheet.getCell("G52").value=formdata.SerMotorNDEA
    worksheet.getCell("H52").value=formdata.SerMotorNDEH
    worksheet.getCell("I52").value=formdata.SerMotorNDEV
    worksheet.getCell("B55").value=formdata.Note1
    worksheet.getCell("B56").value=formdata.Note2
    worksheet.getCell("B57").value=formdata.Note3
    worksheet.getCell("B58").value=formdata.Note4
    worksheet.getCell("B59").value=formdata.Note5
    worksheet.getCell("F61").value=formdata.Satisfaction
    // worksheet.getCell("C5"").value=formdata.Tag
    // worksheet.getCell("G5"").value=formdata.Project     
    // worksheet.getCell("C6"").value=formdata.MainName   
    // worksheet.getCell("C10").value=formdata.Name        
    // worksheet.getCell("H10").value=formdata.FlowRate    
    // worksheet.getCell("C11").value=formdata.Density     
    // worksheet.getCell("H11").value=formdata.Head        
    // worksheet.getCell("C12").value=formdata.Viscosity   
    // worksheet.getCell("H12").value=formdata.OperatingT  
    // worksheet.getCell("C13").value=formdata.Ph
    // worksheet.getCell("H13").value=formdata.NPSHRequired
    // worksheet.getCell("C14").value=formdata.MeltingPoint
    // worksheet.getCell("H14").value=formdata.JacketingFluid
    // worksheet.getCell("C15").value=formdata.BoilingPointAtAtmPress
    // worksheet.getCell("H15").value=formdata.JacketPressure
    // worksheet.getCell("C16").value=formdata.SolidsContent
    // worksheet.getCell("H16").value=formdata.JacketTemperature
    // worksheet.getCell("C17").value=formdata.TypeOfSolids
    // worksheet.getCell("H17").value=formdata.Location
    // worksheet.getCell("C18").value=formdata.CorrosivityOfLiquid
    // worksheet.getCell("H18").value=formdata.Duty
    // worksheet.getCell("C19").value=formdata.Toxicity
    // worksheet.getCell("H19").value=formdata.OperationViaVFD
    // worksheet.getCell("C22").value=formdata.PumpDirectionOfRotation
    // worksheet.getCell("H22").value=formdata.NoLoadCurrent
    // worksheet.getCell("C23").value=formdata.MechanicalSeal
    // worksheet.getCell("H23").value=formdata.WaterTrialCurrent
    // worksheet.getCell("C24").value=formdata.FlushingPlan
    // worksheet.getCell("H24").value=formdata.MaterialTrialCurrent
    // worksheet.getCell("C25").value=formdata.APIConnections
    // worksheet.getCell("H25").value=formdata.Efficiency
    // worksheet.getCell("C26").value=formdata.OilLevel
    // worksheet.getCell("H26").value=formdata. Temperature
    // worksheet.getCell("C27").value=formdata.SealPotPressure
    // worksheet.getCell("H27").value=formdata.MotorDirectionOfRotation
    // worksheet.getCell("C28").value=formdata.NoiseLevel
    // worksheet.getCell("B35").value=formdata.VibPumpDEA
    // worksheet.getCell("C35").value=formdata.VibPumpDEH
    // worksheet.getCell("D35").value=formdata.VibPumpDEV
    // worksheet.getCell("G35").value=formdata.VibMotorDEA
    // worksheet.getCell("H35").value=formdata.VibMotorDEH
    // worksheet.getCell("I35").value=formdata.VibMotorDEV
    // worksheet.getCell("B40").value=formdata.VibPumpNDEA
    // worksheet.getCell("C40").value=formdata.VibPumpNDEH
    // worksheet.getCell("D40").value=formdata.VibPumpNDEV
    // worksheet.getCell("G40").value=formdata.VibMotorNDEA
    // worksheet.getCell("H40").value=formdata.VibMotorNDEH
    // worksheet.getCell("I40").value=formdata.VibMotorNDEV
    // worksheet.getCell("B47").value=formdata.SerPumpDEA
    // worksheet.getCell("C47").value=formdata.SerPumpDEH
    // worksheet.getCell("D47").value=formdata.SerPumpDEV
    // worksheet.getCell("G47").value=formdata.SerMotorDEA
    // worksheet.getCell("H47").value=formdata.SerMotorDEH
    // worksheet.getCell("I47").value=formdata.SerMotorDEV
    // worksheet.getCell("B52").value=formdata.SerPumpNDEA
    // worksheet.getCell("C52").value=formdata.SerPumpNDEH
    // worksheet.getCell("D52").value=formdata.SerPumpNDEV;
    // worksheet.getCell("G52").value=formdata.SerMotorNDEA
    // worksheet.getCell("H52").value=formdata.SerMotorNDEH
    // worksheet.getCell("I52").value=formdata.SerMotorNDEV
    // worksheet.getCell("B55").value=formdata.Note1
    // worksheet.getCell("B56").value=formdata.Note2
    // worksheet.getCell("B57").value=formdata.Note3
    // worksheet.getCell("B58").value=formdata.Note4
    // worksheet.getCell("B59").value=formdata.Note5
    // worksheet.getCell("F61").value=formdata.Satisfaction
    //workbook.Sheets[workbook.SheetNames[0]]=worksheet;
    // XLSX.writeFile(workbook,'./outputxlsx/pump.xls',{bookType : "biff8"});
    await workbook.xlsx.writeFile('./outputxlsx/pump.xlsx');
    res.send(200);
})

app.post('/submitFile', upload.single('excelFile'), async (req, res) => {
    var workbook = XLSX.read(req.file.buffer);
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
    res.send({
        msg: "File Import successful",
        status: 200,
        data: data
    });
})

app.listen(port, () => {
    console.log(`server started on port ${port}`);
})