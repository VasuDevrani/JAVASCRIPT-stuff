let fetchbtn = document.querySelector("#fetchbtn");

fetchbtn.addEventListener("click",buttonClickHandler);

function buttonClickHandler()
{
    console.log("fetch button is clicked");

    const xhr=new XMLHttpRequest();

    // open the object
    /* xhr.open('GET','Vasufile.txt',true); //Takes three arguments the method of request, the as host site or internal file, the type of sync (async or sync);*/
    
    // Using true i.e. asynchronous will let the end conole log hello to print first as the fetching of data from JSON site takes time
    xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);



    // What to do on progress
    xhr.onprogress=function()
    {
        console.log('onprogress');
    }

    // What to do when page is ready
    xhr.onload=function(){
        // To check if the given file or site is inaccessible add an if condition

        if(this.status===200)
        console.log(this.responseText);
        else
        alert("Error???");
    }

    // Send the request
    xhr.send();
    console.log('hello');

}