let employees =[{"id":1,"name":"Aretha Casellas","email":"acasellas0@edublogs.org"},
{"id":2,"name":"Rodd Coxen","email":"rcoxen1@barnesandnoble.com"},
{"id":3,"name":"Ellsworth Spadotto","email":"espadotto2@dropbox.com"},
{"id":4,"name":"Vivianna Theodoris","email":"vtheodoris3@rambler.ru"},
{"id":5,"name":"Michal Dhillon","email":"mdhillon4@msn.com"},
{"id":6,"name":"Lindi Adamovitch","email":"ladamovitch5@i2i.jp"},
{"id":7,"name":"Thalia Blumer","email":"tblumer6@skyrock.com"},
{"id":8,"name":"Ellene Cobain","email":"ecobain7@omniture.com"},
{"id":9,"name":"Fiann Corkan","email":"fcorkan8@example.com"},
{"id":10,"name":"Melony Rodway","email":"mrodway9@clickbank.net"},
{"id":11,"name":"Guinevere Lindblad","email":"glindblada@paypal.com"},
{"id":12,"name":"Antonia Varden","email":"avardenb@abc.net.au"},
{"id":13,"name":"Melba Crunkhorn","email":"mcrunkhornc@senate.gov"},
{"id":14,"name":"Cherye Vigrass","email":"cvigrassd@live.com"},
{"id":15,"name":"Morgan Cadamy","email":"mcadamye@trellian.com"},
{"id":16,"name":"Tracie Mayes","email":"tmayesf@theguardian.com"},
{"id":17,"name":"Kariotta Sindall","email":"ksindallg@people.com.cn"},
{"id":18,"name":"Bing Roze","email":"brozeh@taobao.com"},
{"id":19,"name":"Nil Buscher","email":"nbuscheri@ucla.edu"},
{"id":20,"name":"Minda Dorn","email":"mdornj@theguardian.com"},
{"id":21,"name":"Sonia Guillain","email":"sguillaink@phpbb.com"},
{"id":22,"name":"Thekla Redihalgh","email":"tredihalghl@bing.com"},
{"id":23,"name":"Nonnah Alfonsetto","email":"nalfonsettom@storify.com"},
{"id":24,"name":"Cordey Silberschatz","email":"csilberschatzn@harvard.edu"},
{"id":25,"name":"Selle Deville","email":"sdevilleo@umich.edu"},
{"id":26,"name":"Addie Schrieves","email":"aschrievesp@infoseek.co.jp"},
{"id":27,"name":"Terza Ibberson","email":"tibbersonq@acquirethisname.com"},
{"id":28,"name":"Olwen Hatherall","email":"ohatherallr@china.com.cn"},
{"id":29,"name":"Hasty Dragge","email":"hdragges@mail.ru"},
{"id":30,"name":"Georgi Meryett","email":"gmeryettt@hc360.com"}]

function disData(){
    let rows =""
    

    //USING FOR OF LOOP FOR ITERATION:
//     for(emp of employees){
//         rows = rows + `<tr>
//                         <td>${emp.id}</td>
//                         <td>${emp.name.toUpperCase()}</td>
//                         <td>${emp.email}</td>
//                        </tr>`
//     }
//     document.getElementById('bip').innerHTML = rows
// }

//USING FOR LOOP:
for(i = 0;i<=employees.length-1; i++){
    rows = rows + `<tr>
                        <td>${employees[i].id}</td>
                        <td>${employees[i].name.toUpperCase()}</td>
                        <td>${employees[i].email}</td>
                  </tr>`
    }
    document.getElementById('bip').innerHTML = rows
}

