import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Frigo',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  // ARRAY DES POSTS
  posts = [
    {
      title: 'Premier post',
      content: 'Salut les amoureux de la programmation. Comment est ce que vous trouvez ce nouveau langage de programmation, Angular ?',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'second post',
      content: 'Je ne sais pas si y a quelqu\'un par là mais j\'ai envie de plus de Love pour mon post.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'troisieme post',
      content: 'Veuillez ne pas appuyer sur la touche "je n\'aime" sinon ça risque de me choquer mdrrr.',
      loveIts: 0,
      created_at: new Date()
    }
  ];

  constructor() {
    setTimeout(
      (callback) => {
        this.isAuth = true;
      }, 4000
    );

    // this.posts.forEach(function(post){
    //   post.created_at = new Promise((resolve, reject) => {
    //     post.created_at = new Date();
    //     setTimeout(
    //       () => {
    //         resolve(post.created_at);
    //       }, 1500
    //     );
    //   });
    // });
  }

  onAllumer() {
    console.log('Allumez tout les amis !');
  }

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
}
