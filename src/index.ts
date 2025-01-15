// let a: string= "krishna";
// let num:number=343;

// let a: string;
// let number: number;
// let check : boolean;

// let a; //when we declare like this then the type woulb be any , and it is not recommended as well "avoid using any type"
// let number;
// let check;

// let number = <string>"32";

// let surname:string | number;

// surname = "421"

// const func = (n:number,m:number):number=>{
//     console.log(n,m);

// return n*m
// return String(n*m);
//     return n*m
// };

// type UserName = string | number; //this is known as type aliases

// let a: UserName=false

// type UserName = (n: number, m: number) => number;

// const func: UserName = (n, m) => {
//   console.log(n, m);
//   return n * m;
// };

// --------------------------------------------------

// const arr: number[] = [12,2,2,4,2,1];

// const arr2:string[] = ["Krishna"];

// const arr3: Array<string> = ["Krish","Raj", "Prashant"];

// type Obj = {
//     height:number;
//     weight: number;
// gender:boolean //currently is is required
//     gender?:boolean
// }

// const obj2:Obj={
//     height: 5,
//     weight:55,
//     gender:true
// }
// const obj3:Obj={
//     height: 5,
//     weight:55,
// }

// interface Obj {
//     height : number;
//     weight : number;
//     gender ? : boolean;
// }

// type FuncType = (n:number,m:number) => void;

// interface NewObj extends Obj {
//     scolar:boolean;
//     func: FuncType;
// }

// const kendal:NewObj={
//     height:42023,
//     scolar:true,
//     weight:322,
//     func : (n, m) => {
//         console.log(n * m);
//     },
// };

// kendal.func(20,30)

// ---------------------------------------------
//functions in typescript

// type FuncType = (n: number, m:number,l?:number) => number

// const func: FuncType = (n,m,l)=>{
//     if(typeof l==="undefined") return n*m;
//     return n*m*l;
// }

// func(23,43)

// -----------------------------------------------

// type FuncType = (...m:number[]) => number[];

// const func : FuncType = (...m)=> {
//     return m;
// }

// func(23,32,4,2);

// function nums(n:number):number{
//     return 43;
// }

// ----------------------------------
// Object with function ------------------------

// type GetDataType = (product: {
//     name: string;
//     stock: number;
//     price: number;
//     photo: string;
//     readonly id: string;
// }) => void;

// const getData : GetDataType = (product) => {
//     console.log(product);
// }

// const productOne = {
//     name: "Mackbook",
//     stock:38,
//     price:929299,
//     photo: "sample phto url",
//     id: "absccasdkf"
// }

// getData({
//     name: "Mackbook",
//     stock: 38,
//     price: 929299,
//     photo: "abc"
// })

// getData(productOne)

// ----------------------

// type themeMode = "light" | "dark"

// never type
// const errorHandler = (): never =>{
//     throw new Error();
// }

// const mode : themeMode = "light"

// =========================================
// clases -------->

// class Player {
//     // private height;
//     // public weight;

//     // constructor(height:number,weight:number){
//     constructor(private height:number,public weight:number){}
//     // myHeight =()=>{
//     //     return this.height;
//     // }
// }

// const krishna = new Player(200,300);

// console.log(krishna.height);

// class Player{

//     constructor (
//         private height : number,
//         public weight : number,
//         protected power : number,
//     ){}

//     getMyHeight = ()=> this.height
// }

// const prince = new Player(100,200,20);
// // console.log(prince.power);

// class smallPlayer extends Player {

//     // special : boolean;
//     constructor(height:number,weight:number,power:number,special: boolean, private age:number){
//         super(height,weight,power);
//         // this.special = special;

//     }

//      myPower = ()=> this.power
// }

// const newPlayer = new smallPlayer(100,200,2,true,2);

// console.log("weight",newPlayer.weight);
// console.log("power",newPlayer.myPower());

class Fruites {
    private fruites: string;
    private noOfFruites: number;
  
    constructor(fruites: string, noOfFruites: number) {
      this.fruites = fruites;
      this.noOfFruites = noOfFruites;
    }
  
    get getFruites(): string {
      return this.fruites;
    }
  
    set setFruites(fruites: string) {
      this.fruites = fruites;
    }
  }
  
  const apples = new Fruites("apple", 20);
  console.log(apples.getFruites);  // Output: apple
  
apples.setFruites = "orange"
console.log(apples.getFruites);
