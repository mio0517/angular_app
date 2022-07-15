import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import { MembersComponent } from './members/members.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MemberDetailComponent } from './member-detail/member-datail.component';

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "detail/:id", component: MemberDetailComponent },  //:idで社員番号表示
  { path: "members", component: MembersComponent } //urlの末尾が/membersにしたときに MembersComponentを表示する
]  //MembersComponentが挿入されるようにapp.compornent.htmlで定義している

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [  //app.module.tsの中身を使えるようにする
    RouterModule
  ]
})
export class AppRoutingModule { }
