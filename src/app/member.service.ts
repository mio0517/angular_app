import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Member } from './member';
import { MEMBERS } from './mock-members';
import { MessageService } from './message.service';

@Injectable({  //serviceがどこで使われるか 今回はroot(アプリ全体)
  providedIn: 'root'
})
export class MemberService {

  constructor(private messageService: MessageService) { }

  getMembers(): Observable<Member[]> {
    this.messageService.add("MemberService: 社員一覧データを取得しました");
    return of(MEMBERS); //ofはrxjsの実行の際に渡した値(MEMBERS)observableに変換して返す関数
  }
}
