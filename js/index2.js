jQuery('#portfolio').mixItUp({  

    selectors: {
      target: '.tile',
      filter: '.filter',
      sort: '.sort-btn'
    },
    
        animation: {
        animateResizeContainer: false,
        effects: 'fade scale'
      }
  
  });


  document.getElementById("nama-saya").innerHTML = "Ari Heryawan."

  
  // JS todo ###############
function displayTodo() {
  let dataLocalStorage = localStorage.getItem("todos")
  console.log(dataLocalStorage, "==> VALUE LOCAL");
  let dataTodos = JSON.parse(dataLocalStorage)

  let listTodo = ""

  if (dataTodos) {
      
      for (let index = 0; index < dataTodos.length; index++) {
          // const element = array[index];
          listTodo += `
              <ul class="list-group list-group-horizontal rounded-0 bg-transparent m-2">
                  <li class="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 bg-transparent">
                      <div class="form-check">
                          <input type="checkbox" onchange="setComplete(checked, id)" value="" name="" id=${dataTodos[index].id} aria-label="..." ${dataTodos[index].chekced ? "checked" : ""}>
                      </div>
                  </li>
                  <li class="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                      <div class="form-check">
                          <p class="lead fw-normal mb-0">
                              ${dataTodos[index].name}
                          </p>
                      </div>
                  </li>
          
                  <li class="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                      <button type="button" class="btn btn-danger" onclick=(deleteTodo(${dataTodos[index].id}))>
                          Delete
                      </button>
                  </li>
              </ul>
          `
      }
  }

  // console.log(listTodo);
document.getElementById("kode-promo").innerHTML = "Kode Promo : arroy"
  document.getElementById("list-todo").innerHTML = listTodo

}

function submitTodo() {
  
  const todo = document.getElementById("add-todo").value

  // console.log(todo, "==> APA");
  let todos = JSON.parse(localStorage.getItem("todos"))
  // console.log(todos, "==> APA");

  if (todos) {
      // console.log("masuk if");
      let inputUser = {
          id: todos[todos.length-1].id + 1,
          name: todo,
          chekced: false
      }
      // console.log(inputUser, "==> apa ini");

      todos.push(inputUser)
  } else {
      console.log("masuk else");
      todos = [{
          id: 0,
          name: todo,
          chekced: false
      }]
  }

  localStorage.setItem("todos", JSON.stringify(todos))

  document.getElementById("add-todo").value = ""

  displayTodo()
}



function setComplete(checked, id) {

  // console.log(checked, "=> VALUE 1");
  // console.log(id," ==> Value 2");

  let todos = JSON.parse(localStorage.getItem("todos"))

  todos = todos.map(el => {
      if (el.id === Number(id)) {
          el.chekced = checked
      }
      return el
  })

  let resultStringfy = JSON.stringify(todos)

  localStorage.setItem("todos", resultStringfy)
  // console.log(todos, "==> INI NEW TODOS AFTER CHECKED");
}

function deleteTodo (id) {
  let todos = JSON.parse(localStorage.getItem("todos"))

  todos = todos.filter(el => el.id !== Number(id))

  // console.log(todos, "==> RESULT DELETE");
  if (todos.length) {
      localStorage.setItem("todos", JSON.stringify(todos))
  }else {
      localStorage.removeItem("todos")
  }

  displayTodo()
}


document.getElementById("kode-promo").innerHTML = "Kode Promo : arroy"

let today = new Date(); // Membuat objek Date untuk tanggal hari ini
const monthsOfYearID = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

 // Mengambil hari, bulan, dan tahun
 let day = today.getDate().toString().padStart(2, '0'); // Menambahkan 0 di depan jika hari < 10
 let month = monthsOfYearID[today.getMonth()]; // Mendapatkan nama bulan (dengan array)
 let year = today.getFullYear(); // Mengambil tahun 4 digit


// let day = today.getDate().toString().padStart(2, '0');
document.getElementById("tanggal").innerHTML = day
document.getElementById("bulan").innerHTML = month



// js todo end ######### 

// mansory2 ?