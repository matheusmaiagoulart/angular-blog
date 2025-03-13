import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  photoCover:string = "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png"
  contentTitle:string = "Serviços de Nuvem AWS"
  contentDescription:string = "Amazon Web Services, também conhecido como AWS, é uma plataforma de serviços de computação em nuvem oferecida pela Amazon."
  private id:string | null= "0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => 
      this.id = value.get("id"))
      this.setValuesToComponent(this.id)
  }

    setValuesToComponent(id:string|null){
      const result = dataFake.filter(article => article.id == id)[0]
   
     this.contentTitle = result.title;
     this.contentDescription = result.description
     this.photoCover = result.photo
     }  
}
