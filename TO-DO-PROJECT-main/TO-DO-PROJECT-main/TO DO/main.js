let form = document.getElementById('form')

let arr = JSON.parse(localStorage.getItem("Student")) || []

window.addEventListener('load',()=>{
    display(arr)
})

form.addEventListener('submit',(e)=>{

    e.preventDefault();

    let taskName = document.getElementById('task').value
    let priority = document.getElementById('priority').value

    let data = {
        taskName,
        priority
    }
    // console.log(data)
    arr.push(data)
    localStorage.setItem("Student",JSON.stringify(arr))
    display(arr)
})

function display(arr)
{
    document.querySelector('tbody').innerText = ""
    arr.forEach((el,index)=>{

        let row = document.createElement('tr')
        let col1 = document.createElement('td')
        col1.innerText = el.taskName
        let col2 = document.createElement('td')
        col2.innerText = el.priority
        let col3 = document.createElement('td')

        let deleteBtn = document.createElement('button');
        
        deleteBtn.innerText = "Delete"

      deleteBtn.addEventListener('click', () => {

      arr.splice(index, 1);

      localStorage.setItem('Student', JSON.stringify(arr));

    display(arr);

});
        
        col3.append(deleteBtn);

        row.append(col1,col2,col3)

        document.querySelector('tbody').append(row)

    })
}