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

// class Fruites {
//     private fruites: string;
//     private noOfFruites: number;

//     constructor(fruites: string, noOfFruites: number) {
//       this.fruites = fruites;
//       this.noOfFruites = noOfFruites;
//     }

//     get getFruites(): string {
//       return this.fruites;
//     }

//     set setFruites(fruites: string) {
//       this.fruites = fruites;
//     }
//   }

//   const apples = new Fruites("apple", 20);
//   console.log(apples.getFruites);  // Output: apple

// apples.setFruites = "orange"
// console.log(apples.getFruites);

// interface ProductType {
//   name: string;
//   price: number;
//   stock: number;
//   id: string;
//   offer?: boolean;
// }

// interface GiveId {
//   getId : ()=> string;
// }

// class Product implements ProductType,GiveId {
//   public id: string = String(Math.random() * 1000);

//   constructor(
//     public name: string,
//    public  price: number,
//    public  stock: number
//   ) {}
//    getId = () => this.id;
// }

// const product1 = new Product("Mackbook",2020020,30)

// ----------------------------------------------

// Type Assertion

// const btn = document.getElementById("btn") as HTMLElement;
// const btn = document.getElementById("btn")!;
// const btn = <HTMLElement>document.getElementById("btn");

// // const img = document.getElementById("myImg") as HTMLImageElement;
// const img = document.querySelector("myImg")!;

// img.src = 'https://www.google.com/'

// btn.onclick

// -----------------------------
// accesing form
// const form = document.getElementById("myform") as HTMLFormElement;

// const myinput = document.querySelector("form > input") as HTMLInputElement

// form.onsubmit=(e: SubmitEvent)=>{

//     e.preventDefault()

//     const value = Number(myinput.value);

//     const h2 = document.createElement("h2");

//     h2.textContent = String(value + 20)

//     const body = document.querySelector("body");
//     body?.append(h2)

// }

// -----------------------------------
// Type Assertion

// interface Person{
//     // name:string,
//     // email:string
//     [key:string] : string;
// }

// const myObj:Person = {

//     name: "Krishna",
//     email: "krishna@gmail.com"
// }

// const getName = (): string=> {
//     return myObj.name
// }

// const getEmail = (): string =>{
//     return myObj.email;
// }

// const getData = (key: keyof Person): string => {
//     return myObj[key];
// }

// let key = "name";

// console.log(key as keyof Person);

// ---------------------------------------

// Type Utitlity

// Partial<Type>
// Required<Type>
// Readonly<Type>
// Record<Keys,Type>
// Pick<TypeError,Keys>
// Omit<Type,Keys>
// Exclude<TypeError,ExcludedUnion>
// Extract<TypeError,Union>
// NonNullable<Type>
// ConstructorParameters<Type>
// ReturnType<Type>
// InstanceType<Type>

// Partial<Type> --------------------------

// type User = {
//     name: string,
//     email: string
// }

// type User2 = Partial<User>

// Required<Type> - opposite of partial <---------------

// type User = {
//     name?: string,
//     email?: string,
// }

// type User2 = Required<User>

// const user : Required<User>={
//     name:"prashant",
//     email:"prashant@gmail.com"
// }

// Readonly<Type> <----------------------------

// type User = {
//     name: string,
//     email: string,
// }

// type User2 = Readonly<User>

// const user: User2={
//     name: "prashant",
//     email: "prashant@gmail.com",
// }

// user.name = "krishna"

// Record<Keys,Type> ----------------------------------

// type User = {
//     name: string;
//     email: string;
// }

// type User2 = Record<"name"|"email"|"gender",string>

//Example

// interface UserInfo{
//     age:number;
// }

// type UserName = "john" | "levi" | "elon" | "jack";

// const users : Record<UserName, UserInfo> = {
//     john : {age : 32},
//     levi : {age : 32},
//     elon : {age : 32},
//     jack : {age : 32},
// }

// Pick <Type,Keys> ---------------------------

// interface OrderInfo{
//     readonly id: string,
//     user: string,
//     city: string,
//     state: string,
//     country: string,
//     status: string;
// }

// type ShippingInfo = Pick<OrderInfo,"city"|"state"|"country">

// Omit<Type,Keys>

// interface ShippingInfo {
//     city: string,
//     state: string,
//     country: string,
// }

// type Random = Omit<ShippingInfo,"country">

// Exclude<TypeError,ExcludedUnion>

// type MyUnion = string | number | boolean

// type Random = Exclude<MyUnion, boolean >

// Extract<TypeError,Union>

// type MyUnion = string | number | boolean

// type Random = Extract<MyUnion, boolean >

// NonNullable<Type>

// type MyUnion = string | number | boolean | null | undefined

// type Random = NonNullable<MyUnion>

// Parameters<Type>

// const myFunc = (a:number,b:string)=>{
//     console.log(a+b);

// }

// type Random = Parameters<typeof myFunc>

// ConstructorParameters<Type>
// class SampleClass {
//     constructor(public s: string, public t: string) {}
// }

// type Random = ConstructorParameters<typeof SampleClass >

// ReturnType<Type>

// const myfunc = (a: number, b: string):string=>{
//     return a+b;

// }
// type FuncType = ReturnType<typeof myfunc>

// InstanceType<Type>

// class SampleClass {
//   constructor(
//     public s: string,
//     public t: string
//   ) {}
// }
// type Random = InstanceType<typeof SampleClass>

// const user: Random = {
//   s: "44",
//   t: "ssds"
// };

// ------------------------------------------

// Generics

// const func = <CustomType>(n:CustomType): CustomType => {
//     let text: CustomType;
//     return n;
// }
// const ans = func(20);

// type Person = {
//     name: string,
//     age : number,
// }

// const func = <T>(n:T): T => {

//     return n;
// }

// const person1 : Person={
//     name: "Krish",
//     age: 100
// }

// const ans = func<Person>(person1);

// generic in arr
// const arr : number[] = []
// const arr2: Array<number>=[]

// const func = <T,U>(n:T,o:U):{n:T,o:U} => {
//     return {n,o}
// };

// const ans = func<number,string>(20,"lol")

// type Person = {
//     name : string,
//     age: number
// }
// type Person2 = {
//     name : string,
//     age: number,
//     email:string
// }

// const user:Person={
//     name: "krishna",
//     age:100,
// }
// const user2:Person2={
//     name: "krishna",
//     age:100,
//     email:"adf@gmail.com"
// }

// const func = <T,U extends T>(n:T,o:U):{n:T,o:U} => {
//     return {n,o}
// };

// const ans = func<Person,Person2>(user,user2)

// ------------------------------------------

type Person = {
  name: string;
  age: number;
};

const users: Person[] = [
  {
    name: "krish",
    age: 100,
  },
  {
    name: "gopal",
    age: 200,
  },
  {
    name: "rajesh",
    age: 300,
  },
];

const filterByPeoples = <T, U extends keyof T>(
  arr: T[],
  property: U,
  value: T[U]
): T[] => {
  return arr.filter((item) => item[property] === value);
};

const filteredPeopleByName = filterByPeoples(users, "name", "krish");

const filteredPeopleByAge = filterByPeoples(users, "age", 100);

console.log(filteredPeopleByAge);
