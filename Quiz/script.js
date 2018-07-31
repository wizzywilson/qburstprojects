page=0;
var obj=[];
var ansobj=[];
$.ajax({
				url:"http://10.2.0.104:3000/api/v4/calculators/dibly",
				dataType:"json",
				async:true,
				method:'GET',
				success: function(data,textstatus,jqXHR){
						mainfunction(data);
						//console.log(data.calculator.questions);
						
						
				},
				error:function(jqXHR,textstatus,errorThrown){
						console.log(textstatus);
						console.log(errorThrown);
				},
			});

class answers{

	constructor(id,title)
	{
		this.id=id;
		this.title=title;
	}
}


class questions{

	 constructor(id,title,numofans){
	 	this.id=id;
	 	this.title=title;
	 	this.numofans=numofans;
	 }

	 assign(ans){
	 	var ansobj=[];
	 	var temp=[];
	 	 
	 	 for(let i=0;i<this.numofans;i++)
	 	 {
	 	 		temp.push(new answers(ans[i].id,ans[i].title));

	 	 }
	 	 
	 	 return temp;

	 	 
	 }
	 result(response){
	 		this.response=response;
	 }
	

}

function mainfunction(data){
	console.log(data.calculator.questions);
	
	var quest=data.calculator.questions;

	for(let i=0;i<quest.length;i++){
		//console.log(quest[i].answers)
		obj.push(new questions(quest[i].id,quest[i].title,quest[i].answers.length));
		ansobj.push(obj[i].assign(quest[i].answers));


	}
	console.log(obj)
	console.log(ansobj)

	$('h3').text(obj[page].title);
		var text="";
		for(let i=0;i<ansobj[page].length;i++)
		{
			
				text+=beg+ansobj[page][i].title+end;
			
		}
		
		$('ul').html(text);

	
		

}
var beg='<li class="list-group-item list-group-item-primary"><input type="radio" name="same" >    ';
var end='</li>'

function nextpage(){
	if(page==obj.length-1)
	{
		alert("Questions Over")
		
	}
	else
	{
		page++;
		$('h3').text(obj[page].title);
		var text="";
		for(let i=0;i<ansobj[page].length;i++)
		{
			
				text+=beg+ansobj[page][i].title+end;
			
		}
		
		$('ul').html(text);
		
	}
	
}

function prevpage(){
	
	if(page==0)
	{
		alert("Cant go back")
		
		
	}
	else
	{
		page--;
		$('h3').text(obj[page].title);
		var text="";
		for(let i=0;i<ansobj[page].length;i++)
		{
			
				text+=beg+ansobj[page][i].title+end;
			
		}
		
		$('ul').html(text);
	
	}
	

}

function submit(){
        $("input[type='radio']").click(function(){
            var radioValue = $("input[name='gender']:checked").val();
            if(radioValue){
                alert("Your are a - " + radioValue);
            }
        });
        
    });








