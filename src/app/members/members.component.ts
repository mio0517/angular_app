import { Component, OnInit } from '@angular/core';
import {Member} from "../member";
import { MemberService } from '../member.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {


  members: Member[];

  constructor(private memberService: MemberService,) { }

  ngOnInit(): void { //外部から取得の際はngOnInit()で行う
    this.getMembers(); //member一覧取得
  }

  getMembers(): void {
    this.memberService.getMembers() //Observable
      .subscribe(members => this.members = members);

  }
}

