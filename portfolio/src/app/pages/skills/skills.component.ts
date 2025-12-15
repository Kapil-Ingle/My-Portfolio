import { Component } from '@angular/core';
import { TooltipDirective } from '../../directives/tooltip.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TooltipDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  skills = {
    frontend: [
      {iconClass: 'devicon-angular-plain', tooltip: 'Angular'},
      {iconClass: 'devicon-typescript-plain', tooltip: 'TypeScript'},
      {iconClass: 'devicon-javascript-plain', tooltip: 'JavaScript'},
      {iconClass: 'devicon-angularmaterial-plain', tooltip: 'Angular Material'},
      {iconClass: 'devicon-bootstrap-plain', tooltip: 'Bootstrap'},
      {iconClass: 'devicon-html5-plain', tooltip: 'HTML5'},
      {iconClass: 'devicon-css3-plain', tooltip: 'CSS3'},
    ],
    backend: [
      {iconClass: 'devicon-nodejs-plain', tooltip: 'Node.js'},
      {iconClass: 'devicon-express-original', tooltip: 'Express'},
      {iconClass: 'devicon-mongodb-plain colored', tooltip: 'MongoDB'},
    ],
    tools: [
      {iconClass: 'devicon-github-original', tooltip: 'GitHub'},
      {iconClass: 'devicon-vscode-plain', tooltip: 'VS code'},
      {iconClass: 'devicon-postman-plain', tooltip: 'Postman'},
      {iconClass: 'devicon-swagger-plain', tooltip: 'Swagger'},
    ]
  }

  frontendSkills = this.skills.frontend;
  backendSkills = this.skills.backend;
  tools = this.skills.tools;

  ngOnInit(){

  }

}
