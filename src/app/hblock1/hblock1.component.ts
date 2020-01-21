import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hblock1',
  templateUrl: './hblock1.component.html',
  styleUrls: ['./hblock1.component.css']
})
export class Hblock1Component implements OnInit {
  Usingconditional: 2;
  title: string;
  myalign: string;
  gender = 'male';
  hb1heading = 'Headerblock1...';
  hb1p = 'my first paragarph';
  hb1imgsrc = '../../assets/images/maxresdefault.jpg';
  menu = [
    { myimg : '../../assets/images/beautiful-images-of-love-and-nature3.jpg', mytitle: 'home'},
    { myimg : '../../assets/images/maxresdefault.jpg', mytitle: 'home'}
  ];

  items = [
    { name: 'picture1',
      desc: 'pic1descrption',
      // imgsrc: '../../assets/images/beautiful-images-of-love-and-nature3.jpg',
      imgsrc: '../../assets/images/beautiful-images-of-love-and-nature3.jpg'
   },
    { name: 'picture2',
      desc: 'pic2descrption',
      imgsrc: '../../assets/images/maxresdefault.jpg',
    }
  ];
  test() {
    alert('single click event');
   }
   myalert() {
    alert('This is the dbclick event Message!');
   }


 constructor() { }

  ngOnInit() {
  }

}
