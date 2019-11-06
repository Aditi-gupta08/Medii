function goto_url()
{
    var x= document.forms["form_srch"]["dis"].value;
    x= x.toLowerCase();
    // var url= "http://localhost:3000/list/" + x;
	var url = "http://localhost:3000/cure.html/" +x;
    console.log(url);
    
    window.location.assign(url)
}

function validatee()
{
    var fname= document.forms["contact_form"]["fname"].value;
   // if(fname!= NaN)
    //{
     //    alert("Write a proper name!");
    //}
    
    //console.log("running");
    
    var mail= document.forms["contact_form"]["mail"].value;
    
    var ph_no= document.forms["contact_form"]["ph_no"].value;

    
    if(ph_no==NaN ||ph_no<=0 || ph_no.length!=10)
    {
        alert("Incorrect mobile number!");
    }
    
    var subj= document.forms["contact_form"]["subj"].value;
}
