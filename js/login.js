function validateform(e)
{  
    
  var name=document.myform.name.value;  
  var password=document.myform.password.value; 
  
  var x=document.myform.email.value;  
  var atposition=x.indexOf("@");  
  var dotposition=x.lastIndexOf(".");  
  
    

if (name==null || name==""){  
  alert("Username can't be blank");  
  return false;  
}
else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
    alert("Please enter a valid e-mail address \n @_postion:"+atposition+"\n dot_position:"+dotposition);  
    return false;  
    }  
else if(password.length<6){  
  alert("Password must be at least 6 characters long.");  
  return false;  
  }  




var firstpassword=document.myform.password.value;  
var secondpassword=document.myform.password2.value; 
if(firstpassword==secondpassword)
{  
alert ("Login successfully");    
window.location.replace ("index.html"); 

}  
else
{  
alert("password must be same!");  
  
}   


}
