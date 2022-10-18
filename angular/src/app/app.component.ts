import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // thuộc tính
  title:string = 'Xuân Cường';
  age: number = 20;
  hay: Array<string> = ['đẹp','quá','đy'];
  imgUrl:string = 'https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg';
 // phương thức 
  calltitel(){
    // alert(this.title);
    
    this.imgUrl = 'https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg';
    setTimeout(() => {
      this.imgUrl = 'https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg';
    },3000);
  }
  ageless(){
    this.age--;
  }
  agemore(){
    this.age++;
  }
  handleChaClick(){
    alert('handleChaClick');
  }
}
//app.component.ts