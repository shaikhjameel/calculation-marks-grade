var a = + prompt("Enter your computer marks")
var b = + prompt("Enter your Maths marks")
var c = + prompt("Enter your science marks")
var d = + prompt("Enter your urdu marks")
var e = + prompt("Enter your English marks")

var f = a+b+c+d+e
var g = f/500 *100
document.write ("Total percentage" +g + "%")




if(g >= 85){
    document.write("Grade A+1")
    
}else if(g>=75){
    document.write("Grade A")
}else if(g>=65){
    document.write("Grade B")
}
else if(g>=55){
    document.write("Grade C")
}else if(g>=45){
    document.write("Grade D")
}
else{
(g <=40)
document.write("Grade Fail")
}
