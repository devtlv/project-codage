getElementByTagName("button"); 

 document.getElementById("btnClick").addEventListener("click", clicked);
    function clicked()
    {
            alert("");
    }    



function Search(){
	var t = document.getElementsByClassName("typeahead")[0].value; //le[0] permet de voir tous les élemnts de la liste (les enfants)
	var tb = document.getElementsByClassName("ulaffiche")[0].children ;
	
	for(i=0; i<tb.length;i++){
	if (t.toUpperCase()!= null && t.toUpperCase() != ""  && tb[i].textContent.toUpperCase().indexOf(t.toUpperCase()) == -1){
}
	}
	else $(tb[i]).show();
	}
	
};


 //if(tb[i].textContent.toUpperCase() != t.toUpperCase() && t.toUpperCase()!= null && t.toUpperCase() != "" ){
		//$(tb[i]).hide();