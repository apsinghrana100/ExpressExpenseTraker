form=document.getElementById('formid');
submit=document.getElementById('id3');
 const ul=document.getElementById('tblid');
submit.addEventListener('click',adddata);


var user_id;
async function adddata(e){
    
    e.preventDefault();
    naam=document.getElementById('id1').value;
    email=document.getElementById('id2').value;
    price=document.getElementById('id4').value;
    choice=document.getElementById('1').value;
    
    let promise1;
    
    if(naam!==''||email!=='' || price!=='')
    {

   
        const myobj={
             'naam':naam,
            'email':email,
            'price': price,
            'choice':choice
        }
        if(submit.innerText==="Update")
         {
            try{  
                promise1= await axios.put(`http://localhost:4000/updatedata/${user_id}`,myobj)
                    
                }catch(err)
                {
                    console.log(err);
                }
                finally
                {
                    submit.innerText="Submit";
                    submit.style.background="gray"
                
                }
                if(promise1)
                    {
                        console.log(promise1);
                        removeItemFromScreen(user_id);
                        alert('sucessfully updated');
                    }
         }
         else
         {
            try{
                 promise1= await axios.post("http://localhost:4000/",myobj);
                 if(promise1)
                    {
                        alert("suceesfully inserted");
                    }
              }catch(err){
                console.log(err);
              }
              
           
         }
        
    //    addNewLineElement(myobj);
        cleardataInputBox();
    
    }
    
}
var promise1;

 window.addEventListener('DOMContentLoaded', async (event) => {
    try{
        promise1=await axios.get("http://localhost:4000/fetchdata");
        console.log("i am loading section");
        console.log(promise1);
        for(var i=0;i<promise1.data.length;i++)
                { 
                    addNewLineElement(promise1.data[i])
                }

    }catch(err){
        alert(err);
    }
          
    });


function addNewLineElement(obj){
    let li=`<li id=${obj.id}> ${obj.nam} - ${obj.emailid}-${obj.price}-${obj.choice}
    <button onclick=deleteUser('${obj.id}')> Delete User </button>
    <button type="button" onclick=editUserDetails('${obj.id}','${obj.emailid}','${obj.nam}','${obj.price}','${obj.choice}')>Edit User </button>
 </li>`
    
    ul.innerHTML=ul.innerHTML+li;

}

async function deleteUser(id) {
        try{
            const promise2= await axios.delete(`http://localhost:4000/deletedata/${id}`);

        }catch(err){
            alert(err);
        }finally{
            removeItemFromScreen(id);
        }

    }

    
     function removeItemFromScreen(id){
        const parentNode = document.getElementById('tblid');
        const elem = document.getElementById(id)
        parentNode.removeChild(elem);
    }
    
    
    function editUserDetails(id,emailId, name,price,choice){
    
        document.getElementById('id2').value = emailId;
        document.getElementById('id1').value = name;
        document.getElementById('id4').value = price;
        document.getElementById('1').value = choice;
        user_id=id;
        
        submit.innerText="Update";
        submit.style.background="green";

     }

     function cleardataInputBox()
     {
        document.getElementById('id2').value ="";
        document.getElementById('id1').value ="";
        document.getElementById('id4').value ="";
     }
