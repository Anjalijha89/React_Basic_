import "./Product.css";

//M-1 props
/*
function Product(props){
    console.log(props.title);
    return(
        <div className="Product">
            <h3>{props.title}</h3>
            <h5>Product Discription</h5>
        
        </div>
    );
    }
    */

         //M-2
    /*function Product({title, price, features}){
      //  const list = features.map((feature) => <li>feature</li>);
        return(
            <div className="Product">
                <h3>{title}</h3>
                <h5>price: {price }</h5>
                <p>{features}</p>
            </div>
        );

}*/




     //Conditionals
     //M-1
     /*
     function Product({title, price}){
         if(price>30000){
          return(
              <div className="Product">
                  <h3>{title}</h3>
                  <h5>price: {price }</h5>
                  <p>Discount of 5%</p>
              </div>
          )
          }
          else{
            return(
                <div className="Product">
                    <h3>{title}</h3>
                    <h5>price: {price }</h5>
                </div>
            )
          }     
  }*/


  //M-2
  /*function Product({title, price}){
    let isDiscount = price>30000 ? "Discount of 5%" : "";
     return(
         <div className="Product">
             <h3>{title}</h3>
             <h5>price: {price }</h5>
             <p>{isDiscount}</p>
         </div>
     )}*/


     //M-3
    /* function Product({title, price}){
         return(
             <div className="Product">
                 <h3>{title}</h3>
                 <h5>price: {price }</h5>
                 {price>30000 && <p>"Discount of 5%" </p>}
             </div>
         )} */





         //Dynamic component styling
        /* function Product({title, price,features}){
            let styles = {backgroundColor: price > 30000 ? "yellow" : ""};
         // let styles = {backgroundColor: "yellow"}
            return(
                <div className="Product"  style={styles}>
                    <h3>{title}</h3>
                    <h5>price: {price }</h5>
                    {price>30000 && <p>"Discount of 5%" </p>}
                </div>
            )} */






              //Activity Amazon card
            /*  import Price from "./Price";
              function Product({title, idx}){
                let oldPrices = ["30000", "40000","34000","23000"];
                let newPrices = ["28000", "35000", "31000", "20000"];
                let description = [
                    ["8000 DPI" , "Intuitive surface"],
                     ["Intuitive surface","Wireless"],
                     ["Mobile app","80 watt"],
                     ["Oneplus","Wireless"],
                    ];
                  return(
                    <div className="Product">
                       <h4>{title}</h4>
                        <p>{description[idx][0]}</p>
                        <p>{description[idx][1]}</p>
                        <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
                    </div>
                )}
            */

             export default Product;