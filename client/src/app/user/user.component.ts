import {Component, Input, OnInit} from '@angular/core';
import {Member} from "../Member";
import { ActivatedRoute} from "@angular/router";
import {MemberService} from "../member.service";
import { Location} from "@angular/common";
import {Product} from "../Product";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()currentMember: Member;
  listing: Product;

  constructor(private route: ActivatedRoute,
              private memberService: MemberService,
              private location: Location) { }

  ngOnInit() {
    this.getMember();
  }

  getMember(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    // retrieve the id from the url that called listing-detail
    this.memberService.getMemberById(1)
      .subscribe(member => {
          if(member == undefined){
            console.log('IM UNDEFINED');
          } else {
            this.currentMember = member
          }
        }
      );
  }

  registerMember(member: Member): void {
    this.memberService.registerMember(member);
}


  goBack(): void{
    this.location.back();
  }

}
