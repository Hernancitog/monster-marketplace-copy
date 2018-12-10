import { Component, OnInit } from '@angular/core';
import { Member} from "../Member";
import {Location} from "@angular/common";
import { MemberService } from "../member.service";



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newMember = new Member(0,'','','','','','','');


  registerMember(): void {
    console.log(this.newMember);
    this.memberService.registerMember(this.newMember).subscribe();
    // this.
  }

  constructor(private location: Location,
              private memberService: MemberService) { }

  ngOnInit() {
  }

  goBack(): void{
    this.location.back();
  }

}
