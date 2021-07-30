import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-add-memory',
  templateUrl: './add-memory.component.html',
  styleUrls: ['./add-memory.component.scss']
})
export class AddMemoryComponent implements OnInit {

  constructor(private db: AngularFireDatabase) { }
  onSubmit() {
    this.memory.date = new Date(this.memory.date).valueOf();
    this.db.list('memories').push(this.memory)
      .then(_ => {
        this.memory = {}
        console.log('success')
      })     
  }

  ngOnInit(): void {
  }

}
