 //jshint esversion:6
// exports use to export the function from one js to other js
 exports.getDate=function(){
    var options={
        weekday:'long',
        month: 'long',
        day: 'numeric'
    }

    var today= new Date();
   return today.toLocaleDateString('en-us',options);
}