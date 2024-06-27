import * as XLSX from 'xlsx/xlsx.mjs';
import * as Excel from 'exceljs/dist/exceljs';
import {
  View, StyleSheet, Button, Alert, useColorScheme, SafeAreaView,
  ScrollView
} from 'react-native';
import * as React from 'react';
import { TextInput, Text, Divider, RadioButton } from 'react-native-paper';
import { Buffer } from 'buffer';
import DatePicker from 'react-native-date-picker';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { read } from 'xlsx';
import DocumentPicker from 'react-native-document-picker';
import { readFile, DownloadDirectoryPath } from 'react-native-fs';
import RNFS from 'react-native-fs';

import { Dropdown } from 'react-native-element-dropdown';

import { Button as PButton } from 'react-native-paper';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import {BsFillCalendarDateFill} from 'react-icons/bs'


async function pickAndParse() {

  try {
    const doc = await DocumentPicker.pickSingle({

      allowMultiSelection: false,
      copyTo: "cachesDirectory",
      mode: "open",
      type: [DocumentPicker.types.xlsx]
    })
    const bstr = await readFile(doc.fileCopyUri, 'ascii');
    return read(bstr, { type: 'binary' });
  }
  catch (err) {
    if (DocumentPicker.isCancel(err)) {
      console.log("User canseled the upload", err);
    } else {
      console.log("Standard error", err);
    }
  }
}

// async function writeWorkbook(wb) {
//   // request(Platform.OS === 'ios' ? PERMISSIONS.IOS.WRITE_EXTERNAL_STORAGE : PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE).then((result) => {
//   //   setPermissionResult(result)
//   //   console.log(result)
//   // });
//   // const wbout = write(wb, { type: 'binary', bookType: "xlsx" });
//   const databuffer = await wb.xlsx.writeBuffer();
//   const datastring = databuffer.toString('base64');
//   var filename = `/${Data.Tag}_${Data.Rivision}`;
//   var date = new Date();
//   var datestr = date.toLocaleDateString();
//   datestr = datestr.replace('/', '').replace('/', '');
//   var time = date.toTimeString();
//   time = time.split(' ');
//   time = time[0];
//   time = time.replace(':', '');
//   time = time.replace(':', '');
//   filename = filename + datestr + time + '.xlsx';
//   const file = DownloadDirectoryPath + filename;
//   await RNFS.writeFile(file, datastring, 'base64');
//   return file;
// }

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
  Note6: "",
  Note7: "",
  Note8: "",
  Note9: "",
  Note10: "",
  Satisfaction: "",
  Date: "",
  Writer: "",
  Rivision: "0",
  // New Fields
  Parameter:"",
  Fluid:"",
  FlowRate:"",
  OpeartingTemperature:"",
  OperatingPressure:"",
  HeatTransferArea:"",
  SurfaceTemperature:"",
  Leaktest:"",
  InletOutletConnections:"",
} 

const satisfactionDrop = [
  { label: 'Yes', value: 'Yes' },
  { label: 'No', value: 'No' },

];

const directionOfRotationDrop = [
  { label: 'Clockwise', value: 'Clockwise' },
  { label: 'Anticlockwise', value: 'Anticlockwise' },

];

function OQToDQForm({ navigation, route }) {


  //-----------------for date picker-----------------
  //const [date, setDate] = React.useState(new Date())
  const date = new Date()
  const [open, setOpen] = React.useState(false)
  //-----------------------------------------------------

  const [Data, setData] = React.useState(initialValues);


  //-------------------------for dropdown-------------------------------
  const [isFocus, setIsFocus] = React.useState(false);
  //-----------------------------------------------------------------------

  const goBack = () => {

  }
  const onValueChange = (name) => {

    // setData({ ...Data, [e]: value });
    // console.log(e.target.value)
    return (text) => {
      setData({ ...Data, [name]: text })
      console.log(Data);
    }

  }

  async function writeWorkbook(wb) {
    // request(Platform.OS === 'ios' ? PERMISSIONS.IOS.WRITE_EXTERNAL_STORAGE : PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE).then((result) => {
    //   setPermissionResult(result)
    //   console.log(result)
    // });
    // const wbout = write(wb, { type: 'binary', bookType: "xlsx" });
    const databuffer = await wb.xlsx.writeBuffer();
    const datastring = databuffer.toString('base64');
    var filename = `/${Data.Tag}_${Data.Rivision}_`;
    var date = new Date();
    console.log(date)
    //let tempDate = date.getDate() + '/' + Number(Number(date.getMonth()) + 1) + '/' + date.getFullYear();

    var datestr = date.toLocaleDateString();
    datestr = datestr.replace('/', '').replace('/', '');
    var time = date.toTimeString();
    time = time.split(' ');
    time = time[0];
    time = time.replace(':', '');
    time = time.replace(':', '');
    //Filename with date and time
    filename = filename + datestr + time + '.xlsx';
    //Directory Creation
    const directoryName= `/${Data.Tag}_${datestr}_${time}`;
    const absolutedirpath = DownloadDirectoryPath + directoryName;
    RNFS.mkdir(absolutedirpath);
    //File Creation
    const file = DownloadDirectoryPath + directoryName + filename;
    
    //store Images
    // React.useEffect(() => {
    if (route.params?.post) {
        // console.log(route.params.post);
        
        route.params.post.map(img => {
          // const filePath = img.uri;
          console.log("Saving Images");
          console.log(img);
          const filePath = img.filePath;
          // var imgfilename = "/PUMP_OQ_";
          // var imgdate = new Date();
          // var imgdatestr = imgdate.toLocaleDateString();
          // imgdatestr = imgdatestr.replace('/', '').replace('/', '');
          // var imgtime = imgdate.toTimeString();
          // imgtime = imgtime.split(' ');
          // imgtime = imgtime[0];
          // imgtime = imgtime.replace(':', '');
          // imgtime = imgtime.replace(':', '');
          // imgfilename = imgfilename + imgdatestr + imgtime + '.jpg';
          // const newFilePath = RNFS.DownloadDirectoryPath + directoryName + imgfilename;
          const newFilePath = RNFS.DownloadDirectoryPath + directoryName + img.fileName;
          RNFS.moveFile(filePath, newFilePath)
            .then(() => {
              // Alert.alert("Image Saved", ' IMAGE MOVED' + filePath + '-- to --' + newFilePath);
            })
            .catch(error => {
              console.log(error);
            })
        });
    }
    // }, [route.params?.post]);
    await RNFS.writeFile(file, datastring, 'base64');
    return file;
  }

  const selectDoc = async () => {
    const wb = await pickAndParse();

    /* convert first worksheet to AOA */
    const wsname = wb.SheetNames[0];
    const dqsheet = wb.Sheets[wsname];

    // console.log(dqsheet);

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

    setData((previousInputs) => ({ ...previousInputs, Tag: data.Tag }));
    setData((previousInputs) => ({ ...previousInputs, Project: data.Project }));
    setData((previousInputs) => ({ ...previousInputs, MainName: data.MainName }));
    setData((previousInputs) => ({ ...previousInputs, Name: data.Name }));
    setData((previousInputs) => ({ ...previousInputs, Density: String(data.Density) }));
    setData((previousInputs) => ({ ...previousInputs, Viscosity: String(data.Viscosity) }));
    setData((previousInputs) => ({ ...previousInputs, Ph: String(data.Ph) }));
    setData((previousInputs) => ({ ...previousInputs, MeltingPoint: String(data.MeltingPoint) }));
    setData((previousInputs) => ({ ...previousInputs, BoilingPointAtAtmPress: String(data.BoilingPointAtAtmPress) }))
    setData((previousInputs) => ({ ...previousInputs, SolidsContent: String(data.SolidsContent) }))
    setData((previousInputs) => ({ ...previousInputs, TypeOfSolids: String(data.TypeOfSolids) }));
    setData((previousInputs) => ({ ...previousInputs, CorrosivityOfLiquid: String(data.CorrosivityOfLiquid) }));
    setData((previousInputs) => ({ ...previousInputs, Toxicity: String(data.Toxicity) }));
  }

  const exportFile = async (e) => {
    RNFS.readFileAssets('pumpformat.xlsx', 'base64').then(async (result) => {
      const wb = new Excel.Workbook();
      const databuffer = Buffer.from(result, 'base64');
      await wb.xlsx.load(databuffer);
      var worksheet = wb.worksheets[0];
      console.log(Data);
      worksheet.getCell("A4").value = Data.Rivision;
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
      worksheet.getCell("I61").value = Data.Date
      worksheet.getCell("H63").value = Data.Writer;

      const res = await writeWorkbook(wb);
      Alert.alert("File Saved Successfully", "Exported to " + res);
    })
  }

  const importPrevious = async () => {
    const wb = await pickAndParse();

    /* convert first worksheet to AOA */
    const wsname = wb.SheetNames[0];
    const dqsheet = wb.Sheets[wsname];

    // console.log(dqsheet);

    var data = {
      Rivision: dqsheet.A4.v,
      Tag: dqsheet.C5.v,
      Project: dqsheet.G5.v,
      MainName: dqsheet.C6.v,
      Name: dqsheet.C10.v,
      Density: dqsheet.C11.v,
      Viscosity: dqsheet.C12.v,
      Ph: dqsheet.C13.v,
      MeltingPoint: dqsheet.C14.v,
      BoilingPointAtAtmPress: dqsheet.C15.v,
      SolidsContent: dqsheet.C16.v,
      TypeOfSolids: dqsheet.C17.v,
      CorrosivityOfLiquid: dqsheet.C18.v,
      Toxicity: dqsheet.C19.v,
      FlowRate: dqsheet.H10.v,
      Head: dqsheet.H11.v,
      OperatingT: dqsheet.H12.v,
      NPSHRequired: dqsheet.H13.v,
      JacketingFluid: dqsheet.H14.v,
      JacketPressure: dqsheet.H15.v,
      JacketTemperature: dqsheet.H16.v,
      Location: dqsheet.H17.v,
      Duty: dqsheet.H18.v,
      OperationViaVFD: dqsheet.H19.v,
      PumpDirectionOfRotation: dqsheet.C22.v,
      NoLoadCurrent: dqsheet.H22.v,
      MechanicalSeal: dqsheet.C23.v,
      WaterTrialCurrent: dqsheet.H23.v,
      FlushingPlan: dqsheet.C24.v,
      MaterialTrialCurrent: dqsheet.H24.v,
      APIConnections: dqsheet.C25.v,
      Efficiency: dqsheet.H25.v,
      OilLevel: dqsheet.C26.v,
      Temperature: dqsheet.H26.v,
      SealPotPressure: dqsheet.C27.v,
      MotorDirectionOfRotation: dqsheet.H27.v,
      NoiseLevel: dqsheet.C28.v,
      VibPumpDEA: dqsheet.B35.v,
      VibPumpDEH: dqsheet.C35.v,
      VibPumpDEV: dqsheet.D35.v,
      VibMotorDEA: dqsheet.G35.v,
      VibMotorDEH: dqsheet.H35.v,
      VibMotorDEV: dqsheet.I35.v,
      VibPumpNDEA: dqsheet.B40.v,
      VibPumpNDEH: dqsheet.C40.v,
      VibPumpNDEV: dqsheet.D40.v,
      VibMotorNDEA: dqsheet.G40.v,
      VibMotorNDEH: dqsheet.H40.v,
      VibMotorNDEV: dqsheet.I40.v,
      SerPumpDEA: dqsheet.B47.v,
      SerPumpDEH: dqsheet.C47.v,
      SerPumpDEV: dqsheet.D47.v,
      SerMotorDEA: dqsheet.G47.v,
      SerMotorDEH: dqsheet.H47.v,
      SerMotorDEV: dqsheet.I47.v,
      SerPumpNDEA: dqsheet.B52.v,
      SerPumpNDEH: dqsheet.C52.v,
      SerPumpNDEV: dqsheet.D52.v,
      SerMotorNDEA: dqsheet.G52.v,
      SerMotorNDEH: dqsheet.H52.v,
      SerMotorNDEV: dqsheet.I52.v,
      Note1: dqsheet.B55.v,
      Note2: dqsheet.B56.v,
      Note3: dqsheet.B57.v,
      Note4: dqsheet.B58.v,
      Note5: dqsheet.B59.v,
      Satisfaction: dqsheet.F61.v,
      Date: dqsheet.I61.v,
      Writer: dqsheet.H63.v,


    }
    setData((previousInputs) => ({ ...previousInputs, Rivision: String(Number(Number(data.Rivision) + 1)) }));

    setData((previousInputs) => ({ ...previousInputs, Tag: data.Tag }));
    setData((previousInputs) => ({ ...previousInputs, Project: data.Project }));
    setData((previousInputs) => ({ ...previousInputs, MainName: data.MainName }));
    setData((previousInputs) => ({ ...previousInputs, Name: data.Name }));
    setData((previousInputs) => ({ ...previousInputs, Density: String(data.Density) }));
    setData((previousInputs) => ({ ...previousInputs, Viscosity: String(data.Viscosity) }));
    setData((previousInputs) => ({ ...previousInputs, Ph: String(data.Ph) }));
    setData((previousInputs) => ({ ...previousInputs, MeltingPoint: String(data.MeltingPoint) }));
    setData((previousInputs) => ({ ...previousInputs, BoilingPointAtAtmPress: String(data.BoilingPointAtAtmPress) }))
    setData((previousInputs) => ({ ...previousInputs, SolidsContent: String(data.SolidsContent) }))
    setData((previousInputs) => ({ ...previousInputs, TypeOfSolids: String(data.TypeOfSolids) }));
    setData((previousInputs) => ({ ...previousInputs, CorrosivityOfLiquid: String(data.CorrosivityOfLiquid) }));
    setData((previousInputs) => ({ ...previousInputs, Toxicity: String(data.Toxicity) }));

    setData((previousInputs) => ({ ...previousInputs, FlowRate: String(data.FlowRate) }));
    setData((previousInputs) => ({ ...previousInputs, Head: String(data.Head) }));
    setData((previousInputs) => ({ ...previousInputs, OperatingT: String(data.OperatingT) }));
    setData((previousInputs) => ({ ...previousInputs, NPSHRequired: String(data.NPSHRequired) }));
    setData((previousInputs) => ({ ...previousInputs, JacketingFluid: String(data.JacketingFluid) }));
    setData((previousInputs) => ({ ...previousInputs, JacketPressure: String(data.JacketPressure) }));
    setData((previousInputs) => ({ ...previousInputs, JacketTemperature: String(data.JacketTemperature) }));
    setData((previousInputs) => ({ ...previousInputs, Location: String(data.Location) }));
    setData((previousInputs) => ({ ...previousInputs, Duty: String(data.Duty) }));
    setData((previousInputs) => ({ ...previousInputs, OperationViaVFD: String(data.OperationViaVFD) }));

    setData((previousInputs) => ({ ...previousInputs, PumpDirectionOfRotation: String(data.PumpDirectionOfRotation) }));
    setData((previousInputs) => ({ ...previousInputs, NoLoadCurrent: String(data.NoLoadCurrent) }));
    setData((previousInputs) => ({ ...previousInputs, MechanicalSeal: String(data.MechanicalSeal) }));
    setData((previousInputs) => ({ ...previousInputs, WaterTrialCurrent: String(data.WaterTrialCurrent) }));
    setData((previousInputs) => ({ ...previousInputs, FlushingPlan: String(data.FlushingPlan) }));
    setData((previousInputs) => ({ ...previousInputs, MaterialTrialCurrent: String(data.MaterialTrialCurrent) }));
    setData((previousInputs) => ({ ...previousInputs, APIConnections: String(data.APIConnections) }));
    setData((previousInputs) => ({ ...previousInputs, Efficiency: String(data.ToxiEfficiencycity) }));
    setData((previousInputs) => ({ ...previousInputs, OilLevel: String(data.OilLevel) }));
    setData((previousInputs) => ({ ...previousInputs, Temperature: String(data.Temperature) }));
    setData((previousInputs) => ({ ...previousInputs, SealPotPressure: String(data.SealPotPressure) }));
    setData((previousInputs) => ({ ...previousInputs, MotorDirectionOfRotation: String(data.MotorDirectionOfRotation) }));
    setData((previousInputs) => ({ ...previousInputs, NoiseLevel: String(data.NoiseLevel) }));

    setData((previousInputs) => ({ ...previousInputs, VibPumpDEA: String(data.VibPumpDEA) }));
    setData((previousInputs) => ({ ...previousInputs, VibPumpDEH: String(data.VibPumpDEH) }));
    setData((previousInputs) => ({ ...previousInputs, VibPumpDEV: String(data.VibPumpDEV) }));

    setData((previousInputs) => ({ ...previousInputs, VibMotorDEA: String(data.VibMotorDEA) }));
    setData((previousInputs) => ({ ...previousInputs, VibMotorDEH: String(data.VibMotorDEH) }));
    setData((previousInputs) => ({ ...previousInputs, VibMotorDEV: String(data.VibMotorDEV) }));

    setData((previousInputs) => ({ ...previousInputs, VibPumpNDEA: String(data.VibPumpNDEA) }));
    setData((previousInputs) => ({ ...previousInputs, VibPumpNDEH: String(data.VibPumpNDEH) }));
    setData((previousInputs) => ({ ...previousInputs, VibPumpNDEV: String(data.VibPumpNDEV) }));

    setData((previousInputs) => ({ ...previousInputs, VibMotorNDEA: String(data.VibMotorNDEA) }));
    setData((previousInputs) => ({ ...previousInputs, VibMotorNDEH: String(data.VibMotorNDEH) }));
    setData((previousInputs) => ({ ...previousInputs, VibMotorNDEV: String(data.VibMotorNDEV) }));

    setData((previousInputs) => ({ ...previousInputs, SerPumpDEA: String(data.SerPumpDEA) }));
    setData((previousInputs) => ({ ...previousInputs, SerPumpDEH: String(data.SerPumpDEH) }));
    setData((previousInputs) => ({ ...previousInputs, SerPumpDEV: String(data.SerPumpDEV) }));

    setData((previousInputs) => ({ ...previousInputs, SerMotorDEA: String(data.SerMotorDEA) }));
    setData((previousInputs) => ({ ...previousInputs, SerMotorDEH: String(data.SerMotorDEH) }));
    setData((previousInputs) => ({ ...previousInputs, SerMotorDEV: String(data.SerMotorDEV) }));

    setData((previousInputs) => ({ ...previousInputs, SerPumpNDEA: String(data.SerPumpNDEA) }));
    setData((previousInputs) => ({ ...previousInputs, SerPumpNDEH: String(data.SerPumpNDEH) }));
    setData((previousInputs) => ({ ...previousInputs, SerMotorDEV: String(data.SerMotorDEV) }));

    setData((previousInputs) => ({ ...previousInputs, SerMotorNDEA: String(data.SerMotorNDEA) }));
    setData((previousInputs) => ({ ...previousInputs, SerMotorNDEH: String(data.SerMotorNDEH) }));
    setData((previousInputs) => ({ ...previousInputs, SerMotorNDEV: String(data.SerMotorNDEV) }));

    setData((previousInputs) => ({ ...previousInputs, Note1: String(data.Note1) }));
    setData((previousInputs) => ({ ...previousInputs, Note2: String(data.Note2) }));
    setData((previousInputs) => ({ ...previousInputs, Note3: String(data.Note3) }));
    setData((previousInputs) => ({ ...previousInputs, Note4: String(data.Note4) }));
    setData((previousInputs) => ({ ...previousInputs, Note5: String(data.Note5) }));

    setData((previousInputs) => ({ ...previousInputs, Satisfaction: String(data.Satisfaction) }));
    setData((previousInputs) => ({ ...previousInputs, Date: String(data.Date) }));
    setData((previousInputs) => ({ ...previousInputs, Writer: String(data.Writer) }));


  }

  // const handlePress = () => false

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const isDarkMode = useColorScheme() === 'dark';



  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>

        <View style={[
          styles.container,
          {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: 'column',


          },
        ]}>
          <View style={[{ padding: 4 }]} >
            <TextInput
              label="Rivision"
              value={Data.Rivision}
              onChangeText={onValueChange("Tag")}
            />
          </View>

          {/* <View style={[{ padding: 4 }]}>
          <Button
            onPress={() => navigation.navigate('Home')}
            title="Go back"
            color=""
          />
        </View> */}

          <View style={[{ padding: 4 }]}>
            <Button
              onPress={importPrevious}
              title="Import Previous File"
              color=""
            />
          </View>


          <View style={[{ padding: 4 }]} >
            <Button
              onPress={selectDoc}
              title="Import File"
              color=""
            />
          </View>

          <View style={[
            styles.container,
            {
              // Try setting `flexDirection` to `"row"`.
              flexDirection: 'row',
            },
          ]}>


            <View style={{ flex: 3, paddingRight: 2 }} >
              <TextInput
                label="Tag # Heat Exchanger"
                value={Data.Tag}
                onChangeText={onValueChange("Tag")}
              />
            </View>

            <View style={{ flex: 3 }}>
              <TextInput
                label="Project"
                value={Data.Project}
                onChangeText={onValueChange("Project")}
              />

            </View>

          </View>

          <View style={[
            styles.container,
            {
              // Try setting `flexDirection` to `"row"`.
              flexDirection: 'row',
            },
          ]}>

            <View style={{ flex: 3, paddingRight: 2 }} >
              <TextInput
                label="Name"
                value={Data.MainName}
                onChangeText={onValueChange("MainName")}
              />
            </View>

            <View style={{ flex: 3 }}>
              <TextInput
                label="Document #"
              // value={text}
              // onChangeText={onValueChange("Tag")}
              />

            </View>

          </View>

          <View style={[
            styles.container,
            {
              // Try setting `flexDirection` to `"row"`.
              flexDirection: 'row',
            },
          ]}>



            <View style={[styles.Gheading, { flex: 6, backgroundColor: 'yellow' }]}>
              <Text variant="titleMedium">O P E R A T I N G    P A R A M E T E R S  </Text>


            </View>

          </View>

          <View style={[
            styles.container,
            {
              // Try setting `flexDirection` to `"row"`.
              flexDirection: 'row',
            },
          ]}>

            <View style={[styles.Gheading, { flex: 6, paddingRight: 2, backgroundColor: '#33ccff' }]} >
              <Text variant="titleMedium">DATA OF FLUIDS</Text>

            </View>

          </View>



          <View style={[
            styles.container,
            {
              // Try setting `flexDirection` to `"row"`.
              flexDirection: 'column',

            },
          ]}>

            <View style={{ flex: 6, padding: 4 }} >
              <TextInput
                label="Parameter"
                value={Data.Parameter}
                onChangeText={onValueChange("Parameter")}
              />
            </View>

            <View style={{ flex: 6, padding: 4 }} >
              <TextInput
                label="Fluid"
                keyboardType="numeric"
                value={Data.Fluid}
                onChangeText={onValueChange("Fluid")}
              />
            </View>

            <View style={{ flex: 6, padding: 4 }} >
              <TextInput
                label="Flow Rate"
                keyboardType="numeric"
                value={Data.FlowRate}
                onChangeText={onValueChange("FlowRate")}
              />
            </View>

            <View style={{ flex: 6, padding: 4 }} >
              <TextInput
                label="Opearting Temperature"
                keyboardType="numeric"
                value={Data.OpeartingTemperature}
                onChangeText={onValueChange("OpeartingTemperature")}
              />
            </View>

            <View style={{ flex: 3, padding: 4 }} >
              <TextInput
                label="Operating Pressure"
                keyboardType="numeric"
                value={Data.OperatingPressure}
                onChangeText={onValueChange("OperatingPressure")}
              />
            </View>

            <View style={{ flex: 3, padding: 4 }} >
              <TextInput
                label="Heat Transfer Area"
                keyboardType="numeric"
                value={Data.HeatTransferArea}
                onChangeText={onValueChange("HeatTransferArea")}
              />
            </View>

            
          

           

            {/* running parameters----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}






            <View style={[styles.Gheading, { flex: 6, backgroundColor: 'yellow' }]}>
              <Text variant="titleMedium"> M E C H A N I C A L   R E A D I N G</Text>


            </View>



            <View style={[

              {
                // Try setting `flexDirection` to `"row"`.
                flexDirection: 'row',
                paddingTop: 4

              },
            ]}>

              <View style={[styles.GSubheading, { flex: 6, paddingRight: 2 }]} >
                <Text variant="titleMedium">HEAT EXCHANGER</Text>

              </View>

            </View>

            <View style={[

              {
                // Try setting `flexDirection` to `"row"`.
                flexDirection: 'column',

              },
            ]}>


              


              <View style={{ flex: 6, padding: 4 }} >
                <TextInput
                  label="Surface Temperature"
                  value={Data.SurfaceTemperature}
                  onChangeText={onValueChange("SurfaceTemperature")}
                />
              </View>

              <View style={{ flex: 6, padding: 4 }} >
                <TextInput
                  label="Leak Test"
                  value={Data.Leaktest}
                  onChangeText={onValueChange("Leaktest")}
                />
              </View>

              <View style={{ flex: 6, padding: 4 }} >
                <TextInput
                  label="Inlet Outlet Connections"
                  value={Data.InletOutletConnections}
                  onChangeText={onValueChange("InletOutletConnections")}
                />
              </View>

              <View style={{ flex: 6, padding: 4 }} >
                <TextInput
                  label=""
                  keyboardType="numeric"
                  value={Data.OilLevel}
                  onChangeText={onValueChange("OilLevel")}
                />
              </View>

              <View style={{ flex: 6, padding: 4 }} >
                <TextInput
                  label=""
                  value={Data.SealPotPressure}
                  onChangeText={onValueChange("SealPotPressure")}
                />
              </View>

              <View style={{ flex: 6, padding: 4 }} >
                <TextInput
                  label=""
                  keyboardType="numeric"
                  value={Data.NoiseLevel}
                  onChangeText={onValueChange("NoiseLevel")}
                />
              </View>
            </View>


            <View style={[
              {
                // Try setting `flexDirection` to `"row"`.
                flexDirection: 'row',
                paddingTop: 4
              },
            ]}>


            </View>








          </View>

          {/* the note section-----------------------------------------------------------------------------------------------------------------------------------------------------*/}

          <View style={[
            styles.container,
            {
              // Try setting `flexDirection` to `"row"`.
              flexDirection: 'row',
            },
          ]}>

            <View style={[styles.Gheading, { flex: 6, backgroundColor: 'yellow' }]}>
              <Text variant="titleMedium">R E M A R K S</Text>


            </View>

          </View>




          <View style={[
            styles.container,
            {
              // Try setting `flexDirection` to `"row"`.
              flexDirection: 'row',
            },
          ]}>

            <View style={{ flex: 6 }}>
              <TextInput
                label="Note #1"
                value={Data.Note1}
                onChangeText={onValueChange("Note1")}
              />
            </View>

          </View>

          <View style={[
            styles.container,
            {
              // Try setting `flexDirection` to `"row"`.
              flexDirection: 'row',
            },
          ]}>

            <View style={{ flex: 6 }}>
              <TextInput
                label="Note #2"
                value={Data.Note2}
                onChangeText={onValueChange("Note2")}
              />
            </View>

          </View>

          <View style={[
            styles.container,
            {
              // Try setting `flexDirection` to `"row"`.
              flexDirection: 'row',
            },
          ]}>

            <View style={{ flex: 6 }}>
              <TextInput
                label="Note #3"
                value={Data.Note3}
                onChangeText={onValueChange("Note3")}
              />
            </View>

          </View>

          <View style={[
            styles.container,
            {
              // Try setting `flexDirection` to `"row"`.
              flexDirection: 'row',
            },
          ]}>

             <View style={{ flex: 6 }}>
              <TextInput
                label="Note #4"
                value={Data.Note3}
                onChangeText={onValueChange("Note4")}
              />
            </View>

          </View>

          <View style={[
            styles.container,
            {
              // Try setting `flexDirection` to `"row"`.
              flexDirection: 'row',
            },
          ]}>

             <View style={{ flex: 6 }}>
              <TextInput
                label="Note #5"
                value={Data.Note3}
                onChangeText={onValueChange("Note5")}
              />
            </View>

          </View>

          <View style={[
            styles.container,
            {
              // Try setting `flexDirection` to `"row"`.
              flexDirection: 'row',
            },
          ]}>

             <View style={{ flex: 6 }}>
              <TextInput
                label="Note #6"
                value={Data.Note3}
                onChangeText={onValueChange("Note6")}
              />
            </View>

          </View>

          <View style={[
            styles.container,
            {
              // Try setting `flexDirection` to `"row"`.
              flexDirection: 'row',
            },
          ]}>

             <View style={{ flex: 6 }}>
              <TextInput
                label="Note #7"
                value={Data.Note3}
                onChangeText={onValueChange("Note7")}
              />
            </View>

          </View>

          <View style={[
            styles.container,
            {
              // Try setting `flexDirection` to `"row"`.
              flexDirection: 'row',
            },
          ]}>

             <View style={{ flex: 6 }}>
              <TextInput
                label="Note #8"
                value={Data.Note3}
                onChangeText={onValueChange("Note8")}
              />
            </View>

          </View>

          <View style={[
            styles.container,
            {
              // Try setting `flexDirection` to `"row"`.
              flexDirection: 'row',
            },
          ]}>

            <View style={{ flex: 6 }}>
              <TextInput
                label="Note #9"
                value={Data.Note4}
                onChangeText={onValueChange("Note9")}
              />
            </View>

          </View>

          <View style={[
            styles.container,
            {
              // Try setting `flexDirection` to `"row"`.
              flexDirection: 'row',
            },
          ]}>

            <View style={{ flex: 6 }}>
              <TextInput
                label="Note #10"
                value={Data.Note5}
                onChangeText={onValueChange("Note10")}
              />
            </View>

            

          </View>








          <View style={[
            styles.container,
            {
              // Try setting `flexDirection` to `"row"`.
              flexDirection: 'row',
            },
          ]}>

            <View style={{ flex: 6 }}>
              <Text>The equipment is operating to satisfaction</Text>

            </View>
            <View style={{ flex: 6 }}>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={satisfactionDrop}

                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Yes/No' : '...'}
                value={Data.Satisfaction}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setData({ ...Data, "Satisfaction": item.value })
                  setIsFocus(false);
                  console.log(Data)
                }}
              />
            </View>

          </View>

          <View>

            <PButton icon="calendar" mode="contained" onPress={() => setOpen(true)}>
              CHOOSE DATE
            </PButton>

            <DatePicker
              modal
              open={open}
              date={date}
              mode="date"

              onConfirm={(date) => {
                setOpen(false)
                let tempDate = date.getDate() + '/' + Number(Number(date.getMonth()) + 1) + '/' + date.getFullYear();
                setData({ ...Data, "Date": tempDate })
              }}
              onCancel={() => {
                setOpen(false)
              }}
            />


          </View>

          <View style={[
            styles.container,
            {
              // Try setting `flexDirection` to `"row"`.
              flexDirection: 'row',
            },
          ]}>

            <View style={{ flex: 6 }}>
              <TextInput
                label="Name of Writer"
                value={Data.Writer}
                onChangeText={onValueChange("Writer")}
              />
            </View>

          </View>


          <View style={[
            styles.container,
            {
              // Try setting `flexDirection` to `"row"`.
              flexDirection: 'row',
            },
          ]}>

            <View style={{ flex: 3 }}>
              <Button
                onPress={exportFile}
                title="Export File"
                color=""
              />
            </View>

            <View style={{ flex: 3, paddingLeft: 2 }}>
              <PButton
                icon="camera"
                mode="contained"
                onPress={() => navigation.navigate('ImageCam')}
              >
                Click Photo
              </PButton>
            </View>

          </View>



        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default OQToDQForm;



const styles = StyleSheet.create({

  container: {

    flex: 1,
    padding: 20,
    marginTop: -15,
    marginBottom: -15,
    marginLeft: -10,
    marginRight: -10,
  },
  Gheading: {

    alignItems: 'center',
    justifyContent: 'center',
  },
  GSubheading: {

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray'
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },

});