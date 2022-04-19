canvas=document.getElementById("myCanvas");
x=canvas.getContext("2d");
x.beginPath();
x.strokeStyle="blue";
x.lineWidth=2;
x.arc(200,200,40,0,2*Math.PI);
x.stroke();

x.beginPath();
x.strokeStyle="black";
x.lineWidth=2;
x.arc(290,200,40,0,2*Math.PI);
x.stroke();

x.beginPath();
x.strokeStyle="red";
x.lineWidth=2;
x.arc(380,200,40,0,2*Math.PI);
x.stroke();

x.beginPath();
x.strokeStyle="yellow";
x.lineWidth=2;
x.arc(250,250,40,0,2*Math.PI);
x.stroke();

x.beginPath();
x.strokeStyle="green";
x.lineWidth=2;
x.arc(340,250,40,0,2*Math.PI);
x.stroke();

x.beginPath();
x.strokeStyle="cyan";
x.lineWidth=2;
x.rect(140,125,300,200);
x.stroke();