const CrudApi={
    root:"https://crudcrud.com/api/3ece699167384245baff04808d30c239/productdata"
};
var parentElem=0;
async function formsubmit(e){
   e.preventDefault();
   const ItemN=e.target.Name.value;
   const Decsription=e.target.D.value;
   const Price=e.target.P.value;
   const Quantity=e.target.Q.value;
   const obj={
    ItemN,
    Decsription,
    Price,
    Quantity
   };
   const response=await axios.post(CrudApi.root,obj);
   showUSersonScreen(response.data);
   document.getElementById("my-form").reset();

}

function showUSersonScreen(obj){

    // if(obj.category=="Electronic"){
        var childElem=`<div id=${obj._id}>${obj.ItemN}-${obj.Decsription}-${obj. Price}-${obj. Quantity}
        <button onclick=buy1('${obj. Quantity}')>buy1</button>
        <button onclick=buy2('${obj. Quantity}')>buy2</button>
        <button onclick=buy3('${obj. Quantity}')>buy3</button>
        </div>`;
        var parentElem=document.getElementById("my-form");
        parentElem.innerHTML+=childElem;

        if(onclick ==buy1)
        {
            obj. Quantity=obj. Quantity-1
        }
       else if(onclick ==buy2)
        {
            obj. Quantity=obj. Quantity-2
        }
        else if(onclick ==buy3)
        {
            obj. Quantity=obj. Quantity-3
        }
    // }
    // else if(obj.category=="Food"){
    //     var childElem=`<div id=${obj._id}>${obj.sell}-${obj.category}-${obj.product}
    //     <button onclick=deleteUser('${obj._id}')>Delete Product</button>
    //     </div>`;
    //     var parentElem=document.getElementById("listOffitems");
    //     parentElem.innerHTML+=childElem;

    // }
    // else{
    //     var childElem=`<div id=${obj._id}>${obj.sell}-${obj.category}-${obj.product}
    //     <button onclick=deleteUser('${obj._id}')>Delete Product</button>
    //     </div>`;
    //     var parentElem=document.getElementById("listOfsitems");
    //     parentElem.innerHTML+=childElem;

    // }



}



async function buy1(){
await axios.push(`${CrudApi.root}`); ///${objId}
// const parentElem=document.getElementById("my-form");
// const childElem=document.getElementById(objId);
// if(childElem){
//     parentElem.removeChild(childElem);
// }

}

document.addEventListener("DOMContentLoaded",async()=>{
   const response=await axios.get(CrudApi.root);
   for(var i=0;i<response.data.length;i++){
    showUSersonScreen(response.data[i]);
   }
});