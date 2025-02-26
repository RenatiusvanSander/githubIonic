import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// own imports
import{ User} from '../../models/user';
import { GithubUsers } from '../../providers/github-users/github-users';

/**
 * Generated class for the UsersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
  providers: [GithubUsers]
})
export class UsersPage {
  users: User[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private githubUsers: GithubUsers
  )
  {
    githubUsers.load()
    .subscribe(users => {
      console.log(users)
    });
  }

  ionViewDidLoad() {
    console.log('Hello Users Page');
  }

}
