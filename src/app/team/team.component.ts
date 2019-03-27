import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor() { }

  services = ['SEO', 'PPC', 'SMO', 'Design', 'Email' ]
  persoalInfo = {firstName: "sameer", email: "samir.mah@ebrandz.com", phone: "999999999"}
  companyDepartment = [
                    { 
                      department: "Design", 
                      teamHead: "Sarvesh sir",
                      employeeTotal: 35,
                      status: {
                        value : "active",
                        time : '02:20 PM'
                      } 
                    }, 
                    {
                      department: "Developerz", 
                      teamHead: "Intekhab sir",
                      employeeTotal: 30,
                      status: {
                        value : "Inactive",
                        time : '03:20 PM'
                      }
                    }, 
                    {
                      department: "SEO",
                      teamHead: "Imran sir", 
                      employeeTotal: 150,
                      status: {
                        value : "active",
                        time : '04:20 PM'
                      }
                    }
                  ]
    
    arrayInfo = {
                  social:['seo', 'ppc', 'smo'],
                  programing:['design', 'development']
                };              

  addServices(value:string)
  {
    this.services.push(value);
  }

  ngOnInit() {
  }

}
