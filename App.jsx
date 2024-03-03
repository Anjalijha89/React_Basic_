
import "./App.css";
//import MsgBox from "./MsgBox";
import ProductTab from "./ProductTab.jsx";
//Import Title
//import Title from "./Title.jsx";


/*function Discription() {
   return <h3>This is Discription page</h3>
}*/




/*function App() {
   return <Title />

  /*



  function App() {
  return (
   <div>
      <h1>This is main heading</h1>
      <p>This is my first page</p>
      <Title />
      <Discription />
   </div>
  );
  */



       //or react fragment
   /*
   function App() {
   return(    
   <>
      <h1>This is main heading</h1>
      <p>This is my first page</p>
      <Title />
      <Discription />

   </>   
    );
    */





    //jxs with curly braces
   /* 
   function App() {
   let name = "Anjali";
    return (
      <div>
         <p>2*2 = {2*2} </p>
         <p>Hii, {name}</p>
         <p>Hii, {name.toUpperCase()}</p>
      </div>
     );
     */





     //Structuring components
     /*import ProductTab from "./ProductTab.jsx";
     function App() {

      return <ProductTab />;
     
}*/





      //Activity
     /* function App() {
         return (
            <>
                  <MsgBox userName ="Anjali" textColor="green"/>
                  <MsgBox userName ="Apna college" textColor="blue"/>
                  <ProductTab />;
            </>
         )
      
       }*/



       
       //Activity Amazon card
       /*function App() {
         return (
            <>
            <h2>Blockbuster deals | shop now</h2>
                  <ProductTab />;
            </>
         )
      
       }
       */




       //Event in React
       import Button from "./Button";
       
       function App(){
         return (
            <>
               <Button />
            </>
         );
       }

export default App
