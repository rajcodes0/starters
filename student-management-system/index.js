class Student{
    constructor(name,erp,department,section){
        this.name = name;
        this.erp = erp;
        this.department = department;
        this.section = section;

    }
}

    class UI{
        static addStudentTOList(student){
            const list = document.getElementById('student-list');
            const li = document.createElement('li');
            li.innerHTML = `
              ${student.name}(Erp:${student.erp})-${student.department} ${student.section}
              <button class ="delete-btn">DEL</button>`
              list.appendChild(li);
          
        }
    }
    
