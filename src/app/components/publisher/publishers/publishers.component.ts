import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PublisherService } from '../../../services/publisher.service';
import { faEye,faTrash,faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-publishers',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './publishers.component.html',
  styleUrl: './publishers.component.css'
})
export class PublishersComponent {
  publishers:any;
  faEye = faEye;
  faPencil = faPencil;
  faTrash = faTrash;
  constructor(private publisherService:PublisherService){};
  ngOnInit(){
    this.publisherService.getAll().subscribe(res=>{
      console.log(res)
      this.publishers=res;
    })
  }
  delete(id:any){
    if(confirm("Are you sure")){
      this.publisherService.delete(id).subscribe(res=>{
        console.log(res)
        // this.publishers=res;
        
      console.log(id+"deleted")
      window.location.reload()
      })
    }
    }
  }
