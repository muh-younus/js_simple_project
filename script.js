let accordList = document.querySelectorAll(".accord-item");

accordList.forEach(item => {

    const title = item.querySelector(".accord-head");
    const content =item.querySelector(".accord-content");

    title.addEventListener('click', () => {

        for(var i = 0; i < accordList.length; i++){

            if(accordList[i] != item){

                accordList[i].classList.remove("show");
                
            }

            else{

                content.classList.toggle("show");
                


            }
        }

    });
});








