import React from 'react'
import {Text,View,TextInput,TouchableOpacity,StyleSheet} from 'react-native'
import * as Permissions from 'expo-permissions'
import{BarCodeScanner} from 'expo-barcode-scanner'
export default class Booktransactions extends React.Component{
    constructor(){
        super()
        this.state = {
            bookid:"",studentid:"",
            hasCameraPermisson:false,
            scanned:false,
            scandata:"",buttonState:"normal"
        }
    }
    getCameraPermission = async(id)=>{
        const {status} = await Permissions.askAsync(Permissions.CAMERA)
        console.log(status)
        this.setState({
            hasCameraPermisson:status === "granted",
            buttonState:id, scanned : false
        })
    }
    handleBarCode = async({type,data})=>
    {const buttonState = this.state.buttonState
    if(buttonState === "bookid"){
        this.setState({
            scanned:true, bookid:data, buttonState:"normal"
        })
    } 
    else if(buttonState === "studentid"){
        this.setState({
            scanned:true, studentid:data, buttonState:"normal"
        })
    }
}
   
    render(){
        const hasCameraPermisson = this.state.hasCameraPermisson
        const buttonState = this.state.buttonState
        const scanned = this.state.scanned
        if(hasCameraPermisson && buttonState != "normal"){
        return(<BarCodeScanner onBarCodeScanned = {scanned? undefined:this.handleBarCode}/>)
        }

        else if(buttonState == "normal"){
        return(
        <View>
        <Text>
        transactions
        </Text>
        <View style = {{flexDirection:"row"}}>
        <TextInput style = {style.box} placeholder = "bookid" value = {this.state.bookid} onChangeText = {(Text)=>{this.setState({bookid:Text})}} />
        <TouchableOpacity onPress = {()=>{this.getCameraPermission("bookid")}} style = {style.button}>
        <Text>
        Scan
        </Text>
        </TouchableOpacity>
        </View>
        <View style = {{flexDirection:"row"}}>
        <TextInput style = {style.box} placeholder = "studentid" value = {this.state.studentid} onChangeText = {(Text)=>{this.setState({studentid:Text})}} />
        <TouchableOpacity onPress = {()=>{this.getCameraPermission("studentid")}} style = {style.button}>
        <Text>
        Scan
        </Text>
        </TouchableOpacity>
        </View>
        </View>           
        )
        }
    }
}
const style = StyleSheet.create({
    box:{
        borderWidth:2,
        padding:10,
        marginTop:50,
        backgroundColor:"coral"
    },
    button:{
        marginTop:50,
        padding:10,
        backgroundColor:"pink"
    }
})