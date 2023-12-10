const CrudApi={
    root:"https://crudcrud.com/api/55b02ac65657463f8f9cf65d5f339b1e/productdata"
};
var parentElem=0;
async function formsubmit(e){
   e.preventDefault();
   const sell=e.target.sellprice.value;
   const product=e.target.pname.value;
//    const category=e.target.category.value;
   const obj={
    sell,
    product
   };
   const response=await axios.post(CrudApi.root,obj);
   showUSersonScreen(response.data);
   document.getElementById("my-form").reset();

}

function showUSersonScreen(obj){

    // <button onclick=ToDo('${obj._id}')>Done</button>
    // if(obj.category=="Electronic"){
        var childElem=`<div id=${obj._id}>${obj.sell}-${obj.product}
        <button onclick=deleteUser('${obj._id}')>X</button>
        <input type="button" onclick=done ('${obj._id}') value="✓" />
        </div>`;
        var parentElem=document.getElementById("my-form1");
        parentElem.innerHTML+=childElem;
    // }
//      if(onclick="✓"){
//         var childElem=`<div id=${obj._id}>${obj.sell}-${obj.product}
//         </div>`;
//         var parentElem=document.getElementById("my-form1");
//         parentElem.innerHTML+=childElem;
//  }
    // else{
    //     var childElem=`<div id=${obj._id}>${obj.sell}-${obj.category}-${obj.product}
    //     <button onclick=deleteUser('${obj._id}')>Delete Product</button>
    //     </div>`;
    //     var parentElem=document.getElementById("listOfitems");
    //     parentElem.innerHTML+=childElem;

    // }



}
// async function ToDo(objId){
//      await axios.put(`${CrudApi.root}/${objId}`);
    // const parentElem=document.getElementById("my-form1");
    // // const childElem=document.getElementById(objId);
    // // var childElem=`<div id=${obj._id}>${obj.sell}-${obj.product}
    // //      </div>`;
    // const childElem=document.getElementById(objId);
    //      parentElem.innerHTML+=childElem;

    // if(onclick==ToDo){
    //     var childElem=`<div id=${obj._id}>${obj.sell}-${obj.product}
    //      </div>`;
    //     var parentElem=document.getElementById("my-form1");
    //      parentElem.innerHTML+=childElem;
    // }



async function deleteUser(objId){
await axios.delete(`${CrudApi.root}/${objId}`);
const parentElem=document.getElementById("my-form1");
const childElem=document.getElementById(objId);
if(childElem){
    parentElem.removeChild(childElem);
}

}

document.addEventListener("DOMContentLoaded",async()=>{
   const response=await axios.get(CrudApi.root);
   for(var i=0;i<response.data.length;i++){
    showUSersonScreen(response.data[i]);
   }
});