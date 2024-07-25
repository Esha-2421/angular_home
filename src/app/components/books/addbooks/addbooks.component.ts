import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookService } from '../../../services/book.service';
import { PublisherService } from '../../../services/publisher.service';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-addbooks',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './addbooks.component.html',
  styleUrl: './addbooks.component.css'
})
export class AddbooksComponent {
  categories:any;
  publishers:any;
  reg:FormGroup=new FormGroup({
    isbn:new FormControl<String>(''),
    author:new FormControl<String>(''),
    title:new FormControl<String>(''),
    price:new FormControl<String>(''),
    quantity:new FormControl<String>(''),
  });
  submitted=false;
  isSuccess=false;
  publisher={
    isbn:"",
    author:"",
    title:"",
    price:"",
    quantity:"",
  };
  constructor(private formBuilder:FormBuilder , private bookService:BookService ,private publisherService:PublisherService,private categoryService:CategoryService){}
  ngOnInit(){
    
    this.reg=this.formBuilder.group({
      isbn: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern("^[0-9]*$")
        ],
      ],
      author:['',Validators.required],
      title:['',Validators.required],
      price:['',Validators.required],
      quantity:['',Validators.required],
    })

    this.categoryService.getAll().subscribe(data=>{
      console.log(data)
      this.categories=data
    })
    this.publisherService.getAll().subscribe(data=>{
      console.log(data)
      this.publishers=data
    })
  };
  get f():{[key:string]:AbstractControl}{
    return this.reg.controls;
  }
  onSubmit(){
    this.submitted=true;
    if(this.reg.invalid){
      return;
    }
    this.bookService.create(this.reg.value).subscribe(reg=>{
      console.log("Successfully added")
      this.isSuccess=true;
      this.reg.reset()
      this.submitted=false;
      
    })
    console.log(JSON.stringify(this.reg.value,null,2));
  }
}
